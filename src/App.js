import React from 'react';
import { GameBoard } from './component/GameBoard.js';
import { Player } from './component/Player.js';
import { ComboCardList, TokenCardList, BackCardImageList } from './CardInfo.js';

const exToken = {
    tier1 : {
        need : [0, 0, 0, 0, 0],
        reword : 0,
        score: 0,
        imgSrc : BackCardImageList[0]
    },
    tier2 : {
        need : [0, 0, 0, 0, 0],
        reword : 0,
        score: 0,
        imgSrc : BackCardImageList[1]
    },
    tier3 : {
        need : [0, 0, 0, 0, 0],
        reword : 0,
        score: 0,
        imgSrc : BackCardImageList[2]
	},
    combo: {
        need : [0, 0, 0, 0, 0],
        score: 0,
        imgSrc : ComboCardList[0].imgSrc
    }
}

class App extends React.Component {
	constructor(props) {
		super(props);

		let tempPlayer = [];
		
		for(let i = 0; i < 4; i++) {
			tempPlayer.push( this.makePlayerPreset() );
		}

		this.state = {
			player : tempPlayer,
			boardTier1 : {
				cardPool : TokenCardList.tier1.slice(),
				opened : [ exToken.tier1, exToken.tier1, exToken.tier1, exToken.tier1 ],
			},
			boardTier2 : {
				cardPool : TokenCardList.tier2.slice(),
				opened : [ exToken.tier2, exToken.tier2, exToken.tier2, exToken.tier2 ],
			},
			boardTier3 : {
				cardPool : TokenCardList.tier3.slice(),
				opened : [ exToken.tier3, exToken.tier3, exToken.tier3, exToken.tier3 ]
			},
			tokenRemains : [7, 7, 7, 7, 7, 7],
			comboCardList : [ exToken.combo, exToken.combo, exToken.combo, exToken.combo, exToken.combo ],
			nowSelectedToken : [],
			nowSelectedCard : [],
			turn : 1,
			playerNumber: 4
		}

		this.selectToken = this.selectToken.bind(this);
		this.giveToken = this.giveToken.bind(this);
	}

	componentDidMount() {
		this.settingBoard(4);
	}

	settingBoard(playerNumber) {
		// Token Card Tier1 ~ 3 initializing.
        let tempArrOpend1 = [];
        let tempArrClosed1 = TokenCardList.tier1.slice();
        let tempArrOpend2 = [];
        let tempArrClosed2 = TokenCardList.tier2.slice();
        let tempArrOpend3 = [];
		let tempArrClosed3 = TokenCardList.tier3.slice();
		
        for(let i = 0 ; i < 4; i++) {
            this.pickAndRemove( tempArrClosed1, tempArrOpend1 );
            this.pickAndRemove( tempArrClosed2, tempArrOpend2 );
            this.pickAndRemove( tempArrClosed3, tempArrOpend3 );
        }
		
		// Combo Card with playerNumber + 1 initializing.
		let tempArrComboClosed = ComboCardList.slice();
		let tempArrComboOpened = [];
		for(let i = 0; i < playerNumber + 1; i++) {
			this.pickAndRemove( tempArrComboClosed, tempArrComboOpened );
		}
		
        this.setState({
			boardTier1 : {
				cardPol: tempArrClosed1,
				opened: tempArrOpend1
			},
			boardTier2 : {
				cardPol: tempArrClosed2,
				opened: tempArrOpend2
			},
			boardTier3 : {
				cardPol: tempArrClosed3,
				opened: tempArrOpend3
			},
			comboCardList : tempArrComboOpened
        });
	}

    pickAndRemove(arrClosed, arrOpened) {
		let tempIndex = this.pickRandom(arrClosed);

		arrOpened.push(arrClosed[tempIndex]);
		arrClosed.splice(tempIndex, 1);
	}

	pickRandom(cardPool) {
		return Math.floor( Math.random() * cardPool.length );
	}

	makePlayerPreset() {
		return (
			{
				tokenNumber : [0, 0, 0, 0, 0, 0],
				tokenCard : {
					tier1: [[], [], [], [], []],
					tier2: [[], [], [], [], []],
					tier3: [[], [], [], [], []]
				},
				savingCard : [],
				score : 0
			}
		)
	}

	selectToken(tokenIndx) {
		let tempToken = this.state.nowSelectedToken.slice();
		
		if(this.state.tokenRemains[tokenIndx] > 0) {
			if(!tempToken.includes(tokenIndx)) {
				tempToken.push(tokenIndx);
			}
		}

		if(tempToken.length == 2) {
			if(tempToken[0] == tempToken[1]) {
				this.giveToken(tempToken);
				this.setState({
					turn: this.state.turn + 1 > 4 ? (this.state.turn + 1) % 4  : this.state.turn + 1,
					nowSelectedToken: []
				});
			}
			else {
				this.setState({nowSelectedToken: tempToken});
			}
		}
		else if(tempToken.length == 3) {
			this.giveToken(tempToken);
			this.setState({
				turn: this.state.turn + 1 > 4 ? (this.state.turn + 1) % 4  : this.state.turn + 1,
				nowSelectedToken: []
			});
		}
		else {
			this.setState({nowSelectedToken: tempToken});
		}
	}

	giveToken(tokenList) {
		let tempPlayer = this.state.player.slice();
		let tempTokenRemain = this.state.tokenRemains.slice();

		for(let i = 0; i < tokenList.length; i++) {
			tempPlayer[this.state.turn - 1].tokenNumber[tokenList[i]] += 1;
			tempTokenRemain[tokenList[i]] -= 1;
		}

		this.setState({
			player: tempPlayer,
			tokenRemains: tempTokenRemain
		});
	}

	buyCard(tier, indx) {
		// can buy card will be check at player components.
		
	}

	render() {
		return (
			<div style={{ display: "flex", height: "100vh", alignItems: 'center'  }}>
				<GameBoard 
					tier1={ this.state.boardTier1.opened } 
					tier2={ this.state.boardTier2.opened } 
					tier3={ this.state.boardTier3.opened }
					selectCard={ this.state.nowSelectedCard }
					nowSelectedToken={ this.state.nowSelectedToken }
					tokenRemains={ this.state.tokenRemains }
					comboCardList={ this.state.comboCardList }
					playerToken={ this.state.player }
					selectToken={ this.selectToken }
				/>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Player 
						turn={ this.state.turn }
						playerNumber={ 1 }
						havingToken={ this.state.player[0].tokenNumber } 
						havingList={ this.state.player[0].tokenCard } 
						style={{marginBottom: 50}} 
					/>
					<Player 
						turn={ this.state.turn }
						playerNumber={ 2 }
						havingToken={ this.state.player[1].tokenNumber } 
						havingList={ this.state.player[1].tokenCard } 
					/>	
				</div>
				<div style={{ display: "flex", flexDirection: "column", marginLeft: 50 }}>
					<Player 
						turn={ this.state.turn }
						playerNumber={ 3 }
						havingToken={ this.state.player[2].tokenNumber } 
						havingList={ this.state.player[2].tokenCard } 
						style={{marginBottom: 50}}
					/>
					<Player 
						turn={ this.state.turn }
						playerNumber={ 4 }
						havingToken={ this.state.player[3].tokenNumber } 
						havingList={ this.state.player[3].tokenCard }
					/>	
				</div>
			</div>
		);
	}
}

export default App;
