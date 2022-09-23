import { useState, Fragment, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'

export const Select = ({ options, initial, handleChange }) => {
    const [selected, setSelected] = useState(initial)

    useEffect(() => {
        handleChange(selected)
    }, [selected])

    const optionsType = typeof initial

    return (
        <Listbox value={selected} onChange={setSelected}>
            <div className='relative mt-1'>
                <Listbox.Button className='relative w-full rounded bg-gray-100 p-1.5 text-left focus:outline-none'>
                    <span className='block truncate'>{
                        optionsType === 'string' ? selected : optionsType !== 'undefined' ? selected.name : 'Ninguno'
                    }</span>
                    <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                        ˅
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    enter='transition ease-in duration-100'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options className='absolute mt-1 max-h-60 w-full rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-sm z-30'>
                        {options.map((option) => (
                            <Listbox.Option
                                key={optionsType === 'string' ? option : option.id}
                                className='relative select-none cursor-pointer py-2 pl-4 pr-4 hover:text-blue-500'
                                value={optionsType === 'string' ? option : option}
                            >
                                <span className='block truncate'>
                                    {optionsType === 'string' ? option : option.name}
                                </span>
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    )
}