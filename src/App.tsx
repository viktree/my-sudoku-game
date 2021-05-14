import Board from './components/board/Board'
//
// import { GameState } from "./logic/gameTypes";

// const initialGameState: GameState = {
//   grid: [
//     ["", "", ""],
//     ["", "", ""],
//     ["", "", ""],
//   ],
//   move: 0,
// };

const initialGameState = {}

const App = () => (
	<div>
		<Board grid={initialGameState} />
	</div>
)

export default App
