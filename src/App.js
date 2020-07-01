import React from 'react';
import { GameBoard } from './component/GameBoard.js'

function App() {
	return (
		<div style={{ display: "flex", height: "100vh", alignItems: 'center'  }}>
			<GameBoard />
		</div>
	);
}

export default App;
