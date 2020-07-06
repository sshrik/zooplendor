import React from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { TokenCounter } from './TokenCounter.js'
import { TokenImageList } from '../CardInfo.js';

const tokenCardStyles = {
    tokenCardSide : { 
        position:'absolute', 
        width: 30, 
        height: 140,
    },
    tokenCardText : { 
        textAlign: 'center', 
        margin: 5,
        fontSize: 18
    },
    tokenCardTokenImage : { 
        width: 30,
        height: 108
    },
    tokenCardTop: { 
        position: "absolute", 
        width: 100, 
        height: 30, 
        backgroundColor : 'rgba(255, 255, 255, 0.8)' 
    },
    tokenCardRewordContainer : {
        display: "flex", 
        justifyContent: "flex-end"
    },
    tokenCardReword : {
        marginTop: 6, 
        marginRight: 6, 
        width: 18, 
        height: 18
    }
}

function RightClickMenu(props) {
    return (
        <ContextMenu style={{ backgroundColor: "#FFFFFF", padding: 5 }} id={props.id}>
            <MenuItem 
                data={{act: 'buy'}}
                onClick={ (e, data, el) => {
                    props.buyCard(props.tier, props.index);
                }}
            >
                구매하기
            </MenuItem>
            <MenuItem 
                data={{act: 'book'}}
                onClick={ (e, data, el) => {
                    props.bookCard(props.tier, props.index);
                }}
            >
                예약하기
            </MenuItem>
        </ContextMenu>
    )
} 

export class TokenCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span style={ Object.assign({}, this.props.style, { display: "inline", width: 100, height: 140 }) }>
                <ContextMenuTrigger renderTag="span" id={"tokenCard " + this.props.tier + " " + this.props.index}>
                    <span style={tokenCardStyles.tokenCardTop}>
                        <span style={tokenCardStyles.tokenCardRewordContainer}>
                            <img 
                                style={tokenCardStyles.tokenCardReword} 
                                src={TokenImageList[this.props.CardInfo.reword]}
                            />
                        </span>
                    </span>
                    <span style={tokenCardStyles.tokenCardSide}>
                        <p style={tokenCardStyles.tokenCardText}>
                            { this.props.CardInfo.score }
                        </p>
                        <TokenCounter 
                            style={tokenCardStyles.tokenCardTokenImage}
                            CardInfo={ this.props.CardInfo }
                        />
                    </span>
                    <img 
                        src={ this.props.CardInfo.imgSrc }
                        style={{ width: 100, height: 140 }}
                    />
                </ContextMenuTrigger>
                <RightClickMenu 
                    tier={this.props.tier} index={this.props.index} 
                    id={"tokenCard " + this.props.tier + " " + this.props.index}
                    buyCard={this.props.buyCard}
                    bookCard={this.props.bookCard}
                    />
            </span>
        )
    }
}