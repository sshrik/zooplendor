import React from 'react';
import { GameBoard } from './component/GameBoard.js'
import { Player } from './component/Player.js'

function App() {
	return (
		<div style={{ display: "flex", height: "100vh", alignItems: 'center'  }}>
			<GameBoard />
			<div style={{ display: "flex", flexDirection: "column" }}>
				<Player style={{marginBottom: 50}} />
				<Player />	
			</div>
			<div style={{ display: "flex", flexDirection: "column", marginLeft: 50 }}>
				<Player style={{marginBottom: 50}} />
				<Player />	
			</div>
		</div>
	);
}

export default App;
