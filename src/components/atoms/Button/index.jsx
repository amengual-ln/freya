
export const Button = ({ children, handleClick, circle, primary, card, small }) => {
	const primaryStyles = 'rounded mt-2.5 ml-2 py-1.5 px-3 text-blue-900 bg-blue-100 hover:bg-blue-200'
	const circleStyles = `bg-gray-200 ${small ? 'w-20 h-20' : 'w-24 h-24'} m-auto rounded-full`
	const cardStyles = 'rounded-md p-1.5 px-3 bg-gray-200 hover:bg-gray-300 transition duration-200'
	const defaultStyles = 'rounded mt-2.5 py-1.5 px-3 hover:bg-gray-200'

	return (
		<button
			onClick={handleClick}
			className={ card? cardStyles : circle ? circleStyles : primary ? primaryStyles : defaultStyles }
		>
			{children}
		</button>
	)
}
