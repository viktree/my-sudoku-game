type SquareColor = 'lightblue' | 'lightgreen'

type SquareProps = {
	value: string
	color: SquareColor
	onClick: () => void
}

const Square = ({ value, onClick, color }: SquareProps) => {
	const style: React.CSSProperties = {
		background: color,
		border: '2px solid darkblue',
		fontSize: '30px',
		cursor: 'pointer',
		outline: 'none',
	}
	return (
		<button style={style} onClick={onClick}>
			{value}
		</button>
	)
}

export default Square
