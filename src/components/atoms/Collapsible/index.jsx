import { Disclosure, Transition } from '@headlessui/react'

export const Collapsible = ({ title, children, isOpen = true }) => {
    return (
        <Disclosure defaultOpen={isOpen} className="flex flex-col">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full justify-between mt-4 -mb-2">
                        <h4 className="font-medium text-gray-500">{title}</h4>
                        <span className="font-medium text-gray-500">{open ? '˄' : '˅'}</span>
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform opacity-0"
                        enterTo="transform opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform opacity-100"
                        leaveTo="transform opacity-0"
                    >
                        <Disclosure.Panel>
                            {children}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    )
}