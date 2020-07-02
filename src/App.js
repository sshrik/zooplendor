import React from 'react';
import { GameBoard } from './component/GameBoard.js'
import { Player } from './component/Player.js'

function App() {
	return (
		<div style={{ display: "flex", height: "100vh", alignItems: 'center'  }}>
			<GameBoard />
			<div style={{ display: "flex", flexDirection: "column"}}>
				<Player />
				<Player />
				<Player />
				<Player />	
			</div>
		</div>
	);
}

export default App;
