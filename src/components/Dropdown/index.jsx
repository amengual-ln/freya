import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export const Dropdown = ({ options=[], taskId }) => {
	return (
		<div>
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						...
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
					<Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
						{options.map((option) => (
							<div key={ option.label } className="px-1 py-1 ">
								<Menu.Item>
									<button
										onClick={() => option.handler(taskId)}
										className="bg-violet-500 hover:text-blue-500 group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer"
									>
										{ option.label }
									</button>
								</Menu.Item>
							</div>
						))}
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
