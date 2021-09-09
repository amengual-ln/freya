const primaryStyles = 'rounded mt-2.5 ml-2 py-1.5 px-3 text-blue-900 bg-blue-100 hover:bg-blue-200'
const circleStyles = 'bg-gray-200 w-24 h-24 m-auto rounded-full'
const defaultStyles = 'rounded mt-2.5 py-1.5 px-3 hover:bg-gray-200'

export const Button = ({ children, handleClick, circle, primary }) => {
	return (
		<button
			onClick={handleClick}
			className={ circle ? circleStyles : primary ? primaryStyles : defaultStyles }
		>
			{children}
		</button>
	)
}
