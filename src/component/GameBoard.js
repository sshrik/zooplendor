import React from 'react';
import { ComboCard } from './ComboCard.js'
import { TokenCard } from './TokenCard.js'
import { TokenList } from './TokenList.js'
import { BackCard } from './BackCard.js'
import { ComboCardList, TokenCardList, BackCardImageList } from '../CardInfo.js'
import { 
	WHITE_TOKEN_INDEX, 
	BLUE_TOKEN_INDEX, 
	GREEN_TOKEN_INDEX, 
	RED_TOKEN_INDEX, 
	BLACK_TOKEN_INDEX, 
	GOLDEN_TOKEN_INDEX 
} from '../CardInfo.js'

const gameBoardStyle = {
    gameBoardContainer : { 
        display: "flex", 
        marginLeft: "10%", 
        width: "60%",
         height: "80%", 
    },
    comboCardContainer : { 
        display: "flex",
        marginLeft: "10%", 
        width: "80%" 
    },
    tokenCardContainer : { 
        display: "flex", 
        flex: 1,
        flexDirection: "column", 
        marginLeft: "10%",
        marginRight: "10%", 
        marginTop: "10%"
    },
    tokenListContainer : { 
        display: 'flex',
        flexDirection: "column", 
        justifyContent: 'center', 
        alignItems: 'center', 
        width: "20%",
        height: "80%",
        marginTop: "7%", 
    }
}

const exToken = {
    tier1 : {
        need : [0, 0, 0, 0, 0],
        reword : 0,
        score: 0,
        imgSrc : "/resource/cardBack/Tier 1.png"
    },
    tier2 : {
        need : [0, 0, 0, 0, 0],
        reword : 0,
        score: 0,
        imgSrc : "/resource/cardBack/Tier 2.png"
    },
    tier3 : {
        need : [0, 0, 0, 0, 0],
        reword : 0,
        score: 0,
        imgSrc : "/resource/cardBack/Tier 3.png"
    }
}


export class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tokenRemains : [7, 7, 7, 7, 7, 7],
            tier1CardPool : TokenCardList.tier1.slice(),
            tier2CardPool : TokenCardList.tier2.slice(),
            tier3CardPool : TokenCardList.tier3.slice(),
            openedTier1Card : [ exToken.tier1, exToken.tier1, exToken.tier1, exToken.tier1 ],
            openedTier2Card : [ exToken.tier2, exToken.tier2, exToken.tier2, exToken.tier2 ],
            openedTier3Card : [ exToken.tier3, exToken.tier3, exToken.tier3, exToken.tier3 ]
        }
    }

    componentDidMount() {
        let tempArrOpend1 = [];
        let tempArrClosed1 = this.state.tier1CardPool.slice();
        let tempArrOpend2 = [];
        let tempArrClosed2 = this.state.tier2CardPool.slice();
        let tempArrOpend3 = [];
        let tempArrClosed3 = this.state.tier3CardPool.slice();
        
        for(let i = 0 ; i < 4; i++) {
            this.pickAndRemove( tempArrClosed1, tempArrOpend1 );
            this.pickAndRemove( tempArrClosed2, tempArrOpend2 );
            this.pickAndRemove( tempArrClosed3, tempArrOpend3 );
        }
        
        this.setState({
            tier1CardPool: tempArrClosed1,
            openedTier1Card: tempArrOpend1,
            tier2CardPool: tempArrClosed2,
            openedTier2Card: tempArrOpend2,
            tier3CardPool: tempArrClosed3,
            openedTier3Card: tempArrOpend3
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

    render() {
        return (
            <div style={ gameBoardStyle.gameBoardContainer }>
                <div style={{ flex: 1 }}>		
                    <div style={ gameBoardStyle.comboCardContainer }>
                        <ComboCard style={{flex: 1, marginLeft: "5%"}} CardInfo={ ComboCardList[0] }/>
                        <ComboCard style={{flex: 1}} CardInfo={ ComboCardList[1] }/>
                        <ComboCard style={{flex: 1}} CardInfo={ ComboCardList[2] }/>
                        <ComboCard style={{flex: 1}} CardInfo={ ComboCardList[3] }/>
                        <ComboCard style={{flex: 1}} CardInfo={ ComboCardList[4] }/>
                    </div>
                    <div style={ gameBoardStyle.tokenCardContainer }>
                        <div>
                            <BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[2] }/>
                            <TokenCard style={{marginLeft: "10%"}} CardInfo={ this.state.openedTier3Card[0] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.state.openedTier3Card[1] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.state.openedTier3Card[2] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.state.openedTier3Card[3] }/>
                        </div>
                        <div>
                            <BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[1] }/>
                            <TokenCard style={{marginLeft: "10%"}} CardInfo={ this.state.openedTier2Card[0] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.state.openedTier2Card[1] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.state.openedTier2Card[2] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.state.openedTier2Card[3] }/>
                        </div>
                        <div>
                            <BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[0] }/>
                            <TokenCard style={{marginLeft: "10%"}} CardInfo={ this.state.openedTier1Card[0] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.state.openedTier1Card[1] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.state.openedTier1Card[2] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.state.openedTier1Card[3] }/>
                        </div>
                    </div>
                </div>
                <div style={ gameBoardStyle.tokenListContainer }>
                    <TokenList style={{marginTop: "10%"}} kinds={ WHITE_TOKEN_INDEX } remain={ this.state.tokenRemains[WHITE_TOKEN_INDEX] } />
                    <TokenList kinds={ BLUE_TOKEN_INDEX } remain={ this.state.tokenRemains[BLUE_TOKEN_INDEX] } />
                    <TokenList kinds={ GREEN_TOKEN_INDEX } remain={ this.state.tokenRemains[GREEN_TOKEN_INDEX] } />
                    <TokenList kinds={ RED_TOKEN_INDEX } remain={ this.state.tokenRemains[RED_TOKEN_INDEX] } />
                    <TokenList kinds={ BLACK_TOKEN_INDEX } remain={ this.state.tokenRemains[BLACK_TOKEN_INDEX] } />
                    <TokenList kinds={ GOLDEN_TOKEN_INDEX } remain={ this.state.tokenRemains[GOLDEN_TOKEN_INDEX] } />
                </div>
            </div>
        )
    }
}