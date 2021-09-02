import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export const DropdownOptions = ({ options, selected, onChange }) => {

	const handleClick = (optionId) => {
		onChange(optionId)
	}

	return (
		<div>
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm text-white whitespace-nowrap overflow-ellipsis bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						{selected === 0
							? 'Ninguno'
							: options.find((option) => option.id === selected).name}
					</Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<Menu.Items className="absolute left-0 w-56 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 z-10">
						<div className="p-1">
							<Menu.Item>
								<option
									onClick={() => handleClick(0)}
									className="bg-violet-500 hover:text-blue-500 group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer"
								>
									Ninguno
								</option>
							</Menu.Item>
						</div>
						{options.map((option) => (
							<div key={option.id} className="p-1">
								<Menu.Item>
									<option
										onClick={() => handleClick(option.id)}
										className="bg-violet-500 hover:text-blue-500 group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer"
									>
										{option.name}
									</option>
								</Menu.Item>
							</div>
						))}
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
