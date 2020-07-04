import React from 'react';
import { GameBoard } from './component/GameBoard.js'
import { Player } from './component/Player.js'

class App extends React.Component {
	constructor(props) {
		super(props);

		let tempPlayer = [];
		
		for(let i = 0; i < 4; i++) {
			tempPlayer.push(this.makePlayerPreset());
		}

		this.state = {
			player : tempPlayer,
			boardTier1 : {
				cardPool : [],
				opend : []
			},
			boardTier2 : {
				cardPool : [],
				opend : []
			},
			boardTier2 : {
				cardPool : [],
				opend : []
			},
			turn : -1,
		}
	}

	componentDidMount() {

	}

	makePlayerPreset() {
		return (
			{
				tokenNumber : [1, 2, 3, 7, 4, 5],
				tokenCard : {
					tier1: [[0, 0], [0], [], [], [0]],
					tier2: [[], [0], [], [], []],
					tier3: [[], [], [0], [], []]
				},
				savingCard : [],
				score : 0
			}
		)
	}

	render() {
		return (
			<div style={{ display: "flex", height: "100vh", alignItems: 'center'  }}>
				<GameBoard />
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Player 
						havingToken={ this.state.player[0].tokenNumber } 
						havingList={ this.state.player[0].tokenCard } 
						style={{marginBottom: 50}} 
					/>
					<Player 
						havingToken={ this.state.player[1].tokenNumber } 
						havingList={ this.state.player[1].tokenCard } 
					/>	
				</div>
				<div style={{ display: "flex", flexDirection: "column", marginLeft: 50 }}>
					<Player 
						havingToken={ this.state.player[2].tokenNumber } 
						havingList={ this.state.player[2].tokenCard } 
						style={{marginBottom: 50}}
					/>
					<Player 
						havingToken={ this.state.player[3].tokenNumber } 
						havingList={ this.state.player[3].tokenCard }
					/>	
				</div>
			</div>
		);
	}
}

export default App;
