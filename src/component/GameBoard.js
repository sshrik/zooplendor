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
        this.state = {
            selected : [false, false, false, false, false, false]
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.nowSelectedToken != this.props.nowSelectedToken) {
            let tempSelected = [false, false, false, false, false, false];

            for(let i = 0; i < this.props.nowSelectedToken.length; i++) {
                tempSelected[this.props.nowSelectedToken[i]] = true;
            }

            this.setState({selected: tempSelected});
        }
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
                            <TokenCard style={{marginLeft: "10%"}} 
                                CardInfo={ this.props.tier3[0] } tier={3} index={0} 
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                            <TokenCard style={{marginLeft: "5%"}} 
                                CardInfo={ this.props.tier3[1] } tier={3} index={1}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                            <TokenCard style={{marginLeft: "5%"}} 
                                CardInfo={ this.props.tier3[2] } tier={3} index={2}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                            <TokenCard style={{marginLeft: "5%"}} 
                                CardInfo={ this.props.tier3[3] } tier={3} index={3}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                        </div>
                        <div>
                            <BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[1] }/>
                            <TokenCard style={{marginLeft: "10%"}} 
                                CardInfo={ this.props.tier2[0] } tier={2} index={0}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                            <TokenCard style={{marginLeft: "5%"}} 
                                CardInfo={ this.props.tier2[1] } tier={2} index={1}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                            <TokenCard style={{marginLeft: "5%"}} 
                                CardInfo={ this.props.tier2[2] } tier={2} index={2}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                            <TokenCard style={{marginLeft: "5%"}} 
                                CardInfo={ this.props.tier2[3] } tier={2} index={3}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                        </div>
                        <div>
                            <BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[0] }/>
                            <TokenCard style={{marginLeft: "10%"}} 
                                CardInfo={ this.props.tier1[0] } tier={1} index={0}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                            <TokenCard style={{marginLeft: "5%"}} 
                                CardInfo={ this.props.tier1[1] } tier={1} index={1}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                            <TokenCard style={{marginLeft: "5%"}} 
                                CardInfo={ this.props.tier1[2] } tier={1} index={2}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                            <TokenCard style={{marginLeft: "5%"}} 
                                CardInfo={ this.props.tier1[3] } tier={1} index={3}
                                buyCard={ this.props.buyCard } bookCard={ this.props.bookCard }
                            />
                        </div>
                    </div>
                </div>
                <div style={ gameBoardStyle.tokenListContainer }>
                    <TokenList 
                        style={{marginTop: "10%"}} 
                        selected={ this.state.selected[WHITE_TOKEN_INDEX] }
                        kinds={ WHITE_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[WHITE_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        selected={ this.state.selected[BLUE_TOKEN_INDEX] }
                        kinds={ BLUE_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[BLUE_TOKEN_INDEX] } 
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        selected={ this.state.selected[GREEN_TOKEN_INDEX] }
                        kinds={ GREEN_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[GREEN_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        selected={ this.state.selected[RED_TOKEN_INDEX] }
                        kinds={ RED_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[RED_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        selected={ this.state.selected[BLACK_TOKEN_INDEX] }
                        kinds={ BLACK_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[BLACK_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                    <TokenList 
                        selected={ this.state.selected[GOLDEN_TOKEN_INDEX] }
                        kinds={ GOLDEN_TOKEN_INDEX } 
                        remain={ this.props.tokenRemains[GOLDEN_TOKEN_INDEX] }
                        selectToken={ this.props.selectToken }
                    />
                </div>
            </div>
        )
    }
}