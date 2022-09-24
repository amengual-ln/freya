import { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'

export const Toggle = ({ handleToggle, initial, color = 'bg-gray-500' }) => {
    const [enabled, setEnabled] = useState(initial)

    useEffect(() => {
        handleToggle(enabled)
    }, [enabled])

    return (
        <div>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${enabled ? 'bg-' + color : 'bg-gray-300'} items-center relative inline-flex h-6 w-11 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">{enabled ? 'Disable' : 'Enable'} project</span>
                <span
                    aria-hidden="true"
                    className={`${enabled ? 'translate-x-5' : 'translate-x-0'} pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    )
}