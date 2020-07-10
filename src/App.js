import React from 'react';
import { GameBoard } from './component/GameBoard.js';
import { Player } from './component/Player.js';
import { ComboCardList, TokenCardList, BackCardImageList, GOLDEN_TOKEN_INDEX } from './CardInfo.js';
import { DumpTokenPopUp } from './component/DumpToken.js';

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

const visible = {
	true: {
		visibility: 'visible'
	},
	false: {
		visibility: 'hidden'
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
			playerNumber: 4,
			dumpTotalToken : [0, 0, 0, 0, 0, 0],
			dumpSelectToken : [0, 0, 0, 0, 0, 0],
			dumpTokenVisible : false
		}

		this.selectToken = this.selectToken.bind(this);
		this.giveToken = this.giveToken.bind(this);
		this.buyCard = this.buyCard.bind(this);
		this.bookCard = this.bookCard.bind(this);
		this.tokenPlus = this.tokenPlus.bind(this);
		this.tokenMinus = this.tokenMinus.bind(this);
		this.dumpToken = this.dumpToken.bind(this);
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
				cardPool: tempArrClosed1,
				opened: tempArrOpend1
			},
			boardTier2 : {
				cardPool: tempArrClosed2,
				opened: tempArrOpend2
			},
			boardTier3 : {
				cardPool: tempArrClosed3,
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
			// 2개 1개 고르는거 제외하고, 2개 고를 때 4개 이상일 때만 골라올 수 있게 하는 로직.
			if(!tempToken.includes(tokenIndx)) {
				tempToken.push(tokenIndx);
			}
			else if(tempToken.length == 1 && this.state.tokenRemains[tokenIndx] >= 4) {
				tempToken.push(tokenIndx);
			}
		}

		// 2개 골랐으면 가져오기. 혹은 3개 골랐을 때 가져오기.
		if(tempToken.length == 2) {
			if(tempToken[0] == tempToken[1]) {
				this.giveToken(tempToken);
				
				if(this.checkOver10(tempToken)) {
					this.setState({
						dumpTokenVisible:  true
					})
				}
				// TODO : if token over 10, dumping logic do.
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
			let givenToken = this.giveToken(tempToken);
			// TODO : if token over 10, dumping logic do.
			
			if(this.checkOver10(givenToken)) {
				this.setState({
					dumpTokenVisible:  true,
					dumpTotalToken: givenToken,
					nowSelectedToken: []
				})
			}
			else {
				this.setState({
					turn: this.state.turn + 1 > 4 ? (this.state.turn + 1) % 4  : this.state.turn + 1,
					nowSelectedToken: []
				});
			}
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
		return tempPlayer[this.state.turn - 1].tokenNumber;
	}

	getHaving(havingToken, havingCard) {
		let having = havingToken.slice();
		let cardHaving = [0, 0, 0, 0, 0];

		for(let i = 0; i < havingCard.tier1.length; i++) {
			having[i] += havingCard.tier1[i].length;
			cardHaving[i] += havingCard.tier1[i].length;
		}


		for(let i = 0; i < havingCard.tier2.length; i++) {
			having[i] += havingCard.tier2[i].length;
			cardHaving[i] += havingCard.tier2[i].length;
		}


		for(let i = 0; i < havingCard.tier3.length; i++) {
			having[i] += havingCard.tier3[i].length;
			cardHaving[i] += havingCard.tier3[i].length;
		}

		return [having, cardHaving]
	}

	buyCard(tier, index) {
		let tempPlayer = this.state.player.slice();
		let tokenRemains = this.state.tokenRemains.slice();
		let need = [];
		let tempBoardOpened = [];
		let tempBoardPool = [];
		
		switch(tier) {
			case 1:
				need = this.state.boardTier1.opened[index].need;
				tempBoardOpened = this.state.boardTier1.opened.slice();
				tempBoardPool = this.state.boardTier1.cardPool.slice();
				break;
			case 2:
				need = this.state.boardTier2.opened[index].need;
				tempBoardOpened = this.state.boardTier2.opened.slice();
				tempBoardPool = this.state.boardTier2.cardPool.slice();
				break;
			case 3:
				need = this.state.boardTier3.opened[index].need;
				tempBoardOpened = this.state.boardTier3.opened.slice();
				tempBoardPool = this.state.boardTier3.cardPool.slice();
			default:
				break;
		}

		let nowPlayer = tempPlayer[this.state.turn-1];
		let nowHavingToken = nowPlayer.tokenNumber;
		let nowHavingCard = nowPlayer.tokenCard;

		// Checking all having token.
		let [having, cardHaving] = this.getHaving(nowHavingToken, nowHavingCard);

		if( this.checkNeed(need, having) ) {
			let pickNumber = -1;
			for(let i = 0; i < need.length; i++) {
				// 가진 토큰 카드가 더 많을 땐 토큰을 주지 않으므로 계산하지 않는다.
				if(cardHaving[i] < need[i]) {
					nowPlayer.tokenNumber[i] -= (need[i] - cardHaving[i]);
					tokenRemains[i] += (need[i] - cardHaving[i]);
				}
			}
			switch(tier) {
				case 1:
					nowPlayer.tokenCard.tier1[this.state.boardTier1.opened[index].reword].push(this.state.boardTier1.opened[index]);
					break;
				case 2:
					nowPlayer.tokenCard.tier2[this.state.boardTier2.opened[index].reword].push(this.state.boardTier2.opened[index]);
					break;
				case 3:
					nowPlayer.tokenCard.tier3[this.state.boardTier3.opened[index].reword].push(this.state.boardTier3.opened[index]);
					break;
				default:
					break;
			}

			// Refill board.
			if(tempBoardPool.length == 0) {
				console.log("Pool is empty!")
			}
			else {
				pickNumber = this.pickRandom(tempBoardPool);
				tempBoardOpened.splice(index, 0, tempBoardPool[pickNumber]);
				tempBoardOpened.splice(index + 1, 1);
				tempBoardPool.splice(pickNumber, 1);
			}

			switch(tier) {
				case 1:
					this.setState({
						player: tempPlayer,
						turn: this.state.turn + 1 > 4 ? (this.state.turn + 1) % 4  : this.state.turn + 1,
						tokenRemains: tokenRemains,
						boardTier1: {
							cardPool: tempBoardPool,
							opened: tempBoardOpened
						},
					});
					break;
				case 2:
					this.setState({
						player: tempPlayer,
						turn: this.state.turn + 1 > 4 ? (this.state.turn + 1) % 4  : this.state.turn + 1,
						tokenRemains: tokenRemains,
						boardTier2: {
							cardPool: tempBoardPool,
							opened: tempBoardOpened
						}
					});
					break;
				case 3:
					this.setState({
						player: tempPlayer,
						turn: this.state.turn + 1 > 4 ? (this.state.turn + 1) % 4  : this.state.turn + 1,
						tokenRemains: tokenRemains,
						boardTier3: {
							cardPool: tempBoardPool,
							opened: tempBoardOpened
						}
					});
					break;
				default:
					break;
			}
		}
	}

	checkNeed(need, having){ 
		let ret = true;

		for(let i = 0; i < need.length; i++) {
			if(need[i] > having[i]) {
				ret = false;
				break;
			}
		}

		return ret;
	}

	bookCard(tier, index) {
		let tempPlayer = this.state.player.slice();
		let nowPlayer = tempPlayer[this.state.turn-1];
	
		// 3개보다 많이 저장 할 수 없음.
		console.log(nowPlayer.savingCard.length);
		if(nowPlayer.savingCard.length >= 3) {
			console.log("Too many cards in saving list.");
			return ;
		}

		let tokenRemains = this.state.tokenRemains.slice();
		let tempBoardOpened = [];
		let tempBoardPool = [];
		
		switch(tier) {
			case 1:
				tempBoardOpened = this.state.boardTier1.opened.slice();
				tempBoardPool = this.state.boardTier1.cardPool.slice();
				break;
			case 2:
				tempBoardOpened = this.state.boardTier2.opened.slice();
				tempBoardPool = this.state.boardTier2.cardPool.slice();
				break;
			case 3:
				tempBoardOpened = this.state.boardTier3.opened.slice();
				tempBoardPool = this.state.boardTier3.cardPool.slice();
			default:
				break;
		}

		if(tokenRemains[GOLDEN_TOKEN_INDEX] <= 0) { 
			console.log("Token is not ready. Just booking card into hands.")
		}
		else {
			nowPlayer.tokenNumber[GOLDEN_TOKEN_INDEX] += 1;
			tokenRemains[GOLDEN_TOKEN_INDEX] -= 1;
		}
		nowPlayer.savingCard.push(tempBoardOpened[index]);
	
		// Refill board.
		if(tempBoardPool.length == 0) {
			console.log("Pool is empty!")
		}
		else {
			let pickNumber = this.pickRandom(tempBoardPool);
			tempBoardOpened.splice(index, 0, tempBoardPool[pickNumber]);
			tempBoardOpened.splice(index + 1, 1);
			tempBoardPool.splice(pickNumber, 1);
		}

		switch(tier) {
			case 1:
				this.setState({
					player: tempPlayer,
					tokenRemains: tokenRemains,
					boardTier1: {
						cardPool: tempBoardPool,
						opened: tempBoardOpened
					},
				});
				break;
			case 2:
				this.setState({
					player: tempPlayer,
					tokenRemains: tokenRemains,
					boardTier2: {
						cardPool: tempBoardPool,
						opened: tempBoardOpened
					}
				});
				break;
			case 3:
				this.setState({
					player: tempPlayer,
					tokenRemains: tokenRemains,
					boardTier3: {
						cardPool: tempBoardPool,
						opened: tempBoardOpened
					}
				});
				break;
			default:
				break;
		}

		if(this.checkOver10(nowPlayer.tokenNumber)) {
			this.setState({
				dumpTokenVisible:  true,
				dumpTotalToken: nowPlayer.tokenNumber
			})
		}
		else {
			this.setState({ turn: this.state.turn + 1 > 4 ? (this.state.turn + 1) % 4  : this.state.turn + 1 });
		}
	}
	
	checkOver10(tokenNumber) {
		// Return if token is over 10.
		let totalTokenNumber = 0;
		for(let i = 0; i < tokenNumber.length; i++) {
			totalTokenNumber += tokenNumber[i];
		}

		return totalTokenNumber > 10;
	}

	tokenPlus(index) {
		if(this.state.dumpSelectToken[index] < this.state.dumpTotalToken[index])	{
			let tempSelectToken = this.state.dumpSelectToken.slice();
			tempSelectToken[index] += 1;

			this.setState({
				dumpSelectToken: tempSelectToken
			});
		}
	}

	tokenMinus(index) {
		if(this.state.dumpSelectToken[index] > 0)	{
			let tempSelectToken = this.state.dumpSelectToken.slice();
			tempSelectToken[index] -= 1;

			this.setState({
				dumpSelectToken: tempSelectToken
			});
		}
	}

	dumpToken() {
		// TODO : Need to show user token is not under 10. ( can be same. )
		let totalTokenNumber = 0;
		for(let i = 0; i < this.state.dumpSelectToken.length; i++) {
			totalTokenNumber += (this.state.dumpTotalToken[i] - this.state.dumpSelectToken[i]);
		}
		
		if(totalTokenNumber > 10) {
			return ;
		}

		let tempPlayer = this.state.player.slice();
		let nowPlayer = tempPlayer[this.state.turn - 1];
		let tempRemain = this.state.tokenRemains.slice();
		
		// Give selected token to computer.
		for(let i = 0; i < nowPlayer.tokenNumber.length; i++) {
			nowPlayer.tokenNumber[i] -= this.state.dumpSelectToken[i];
			tempRemain[i] += this.state.dumpSelectToken[i];	
		}

		this.setState({
			player: tempPlayer,
			tokenRemains: tempRemain,
			dumpSelectToken: [0, 0, 0, 0, 0, 0],
			dumpTotalToken: [0, 0, 0, 0, 0, 0],
			turn: this.state.turn + 1 > 4 ? (this.state.turn + 1) % 4  : this.state.turn + 1,
			dumpTokenVisible: false
		})
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
					buyCard={ this.buyCard }
					bookCard={ this.bookCard }
				/>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Player 
						turn={ this.state.turn }
						playerNumber={ 1 }
						havingToken={ this.state.player[0].tokenNumber } 
						havingList={ this.state.player[0].tokenCard } 
						savingList={ this.state.player[0].savingCard }
						style={{marginBottom: 50}} 
					/>
					<Player 
						turn={ this.state.turn }
						playerNumber={ 2 }
						havingToken={ this.state.player[1].tokenNumber } 
						havingList={ this.state.player[1].tokenCard } 
						savingList={ this.state.player[1].savingCard }
					/>	
				</div>
				<div style={{ display: "flex", flexDirection: "column", marginLeft: 50 }}>
					<Player 
						turn={ this.state.turn }
						playerNumber={ 3 }
						havingToken={ this.state.player[2].tokenNumber } 
						havingList={ this.state.player[2].tokenCard } 
						savingList={ this.state.player[2].savingCard }
						style={{marginBottom: 50}}
					/>
					<Player 
						turn={ this.state.turn }
						playerNumber={ 4 }
						havingToken={ this.state.player[3].tokenNumber } 
						havingList={ this.state.player[3].tokenCard }
						savingList={ this.state.player[3].savingCard }
					/>	
				</div>
				<DumpTokenPopUp 
					style={ Object.assign({}, {position: "absolute", marginLeft: "25%", width: "50%", height: "50%"}, this.state.dumpTokenVisible ? visible.true : visible.false) }
					totalToken={this.state.dumpTotalToken}
					selectToken={this.state.dumpSelectToken}
					tokenPlus={this.tokenPlus}
					tokenMinus={this.tokenMinus}
					dumpToken={this.dumpToken}
				/>
			</div>
		);
	}
}

export default App;
