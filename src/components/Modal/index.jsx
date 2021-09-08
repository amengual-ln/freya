import React from 'react'
import { Dialog, Transition } from '@headlessui/react'

export const Modal = ({ isOpen, hide, children }) => (
	<Transition appear show={isOpen}>
		<Dialog
			as="div"
			className="fixed inset-0 z-10 overflow-y-auto"
			onClose={hide}
		>
			<div className="min-h-screen text-center">
				<Transition.Child
					enter="ease-out duration-300"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					<Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
				</Transition.Child>
				<Transition.Child
					enter="ease-out duration-200"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="ease-in duration-100"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				>
					<div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-lg rounded-lg">
						<button
							onClick={hide}
							className="absolute right-0 top-0 m-2.5 px-2.5 py-0.5 rounded hover:bg-gray-200 focus:outline-none"
						>
							&times;
						</button>
						<br />
						{children}
					</div>
				</Transition.Child>
			</div>
		</Dialog>
	</Transition>
)
