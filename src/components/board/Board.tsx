// import { GameState, Square as GameSquare } from "../../logic/gameTypes";
import Square from '../squares/Square'

import { flatten } from 'ramda'

// const renderableSquaresFromGrid = (gameState: GameState): GameSquare[] =>
//   flatten(gameState.grid);

const style: React.CSSProperties = {
	border: '4px solid darkblue',
	borderRadius: '10px',
	width: '1000px',
	height: '1000px',
	margin: '50px auto',
	display: 'grid',
	gridTemplate: 'repeat(9, 1fr) / repeat(9, 1fr)',
}

const initialGrid = flatten([
	['1', '', '', '', '', '', '', '', ''],
	['', '1', '', '', '', '', '', '', ''],
	['', '', '1', '', '', '', '', '', ''],

	['', '', '', '1', '', '', '', '', ''],
	['', '', '', '', '1', '', '', '', ''],
	['', '', '', '', '', '1', '', '', ''],

	['', '', '', '', '', '', '1', '', ''],
	['', '', '', '', '', '', '', '1', ''],
	['', '', '', '', '', '', '', '', '1'],
])

type SquareColor = 'lightblue' | 'lightgreen'

const determineSquareColor = (i: number): SquareColor => {
	if ((i + 1) / 9 > 3 && i / 9 < 6 && i % 9 > 2 && i % 9 < 6) {
		return 'lightblue'
	}
	if ((i + 1) / 9 > 3 && i / 9 < 6) {
		return 'lightgreen'
	}
	if (i % 9 > 2 && i % 9 < 6) {
		return 'lightgreen'
	}
	return 'lightblue'
}

const Board = ({ grid }: any) => {
	// const squares = renderableSquaresFromGrid(grid);
	return (
		<div style={style}>
			{initialGrid.map((square: any, i: number) => (
				<Square
					key={i}
					value={`${square}`}
					color={determineSquareColor(i)}
					onClick={() => console.log(i, square)}
				/>
			))}
		</div>
	)
}

export default Board
