import React from 'react';
import { ComboCard } from './ComboCard.js'
import { TokenCard } from './TokenCard.js'
import { TokenList } from './TokenList.js'
import { BackCard } from './BackCard.js'
import { BackCardImageList } from '../CardInfo.js'
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

export class GameBoard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={ gameBoardStyle.gameBoardContainer }>
                <div style={{ flex: 1 }}>		
                    <div style={ gameBoardStyle.comboCardContainer }>
                        <ComboCard style={{flex: 1, marginLeft: "5%"}} CardInfo={ this.props.comboCardList[0] }/>
                        <ComboCard style={{flex: 1}} CardInfo={ this.props.comboCardList[1] }/>
                        <ComboCard style={{flex: 1}} CardInfo={ this.props.comboCardList[2] }/>
                        <ComboCard style={{flex: 1}} CardInfo={ this.props.comboCardList[3] }/>
                        <ComboCard style={{flex: 1}} CardInfo={ this.props.comboCardList[4] }/>
                    </div>
                    <div style={ gameBoardStyle.tokenCardContainer }>
                        <div>
                            <BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[2] }/>
                            <TokenCard style={{marginLeft: "10%"}} CardInfo={ this.props.tier3[0] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.props.tier3[1] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.props.tier3[2] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.props.tier3[3] }/>
                        </div>
                        <div>
                            <BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[1] }/>
                            <TokenCard style={{marginLeft: "10%"}} CardInfo={ this.props.tier2[0] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.props.tier2[1] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.props.tier2[2] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.props.tier2[3] }/>
                        </div>
                        <div>
                            <BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[0] }/>
                            <TokenCard style={{marginLeft: "10%"}} CardInfo={ this.props.tier1[0] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.props.tier1[1] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.props.tier1[2] }/>
                            <TokenCard style={{marginLeft: "5%"}} CardInfo={ this.props.tier1[3] }/>
                        </div>
                    </div>
                </div>
                <div style={ gameBoardStyle.tokenListContainer }>
                    <TokenList 
                        style={{marginTop: "10%"}} 
                        kinds={ WHITE_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[WHITE_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        kinds={ BLUE_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[BLUE_TOKEN_INDEX] } 
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        kinds={ GREEN_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[GREEN_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        kinds={ RED_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[RED_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        kinds={ BLACK_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[BLACK_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        kinds={ GOLDEN_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[GOLDEN_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                </div>
            </div>
        )
    }
}