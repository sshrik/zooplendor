import React from 'react';
import { BackCardImageList } from '../CardInfo.js';
import { TokenImageList, ColoredBackCardImageList } from '../CardInfo.js';
import { 
    WHITE_TOKEN_INDEX, 
    BLUE_TOKEN_INDEX, 
    GREEN_TOKEN_INDEX, 
    RED_TOKEN_INDEX, 
    BLACK_TOKEN_INDEX, 
    GOLDEN_TOKEN_INDEX 
} from '../CardInfo.js';

const playerStyle = {
    goldenTokenImg : { 
        width: 30, 
        height: 30,
        resizeMode: 'contain' 
    },
    cardBackImg : { 
        width:50, 
        height: 70, 
        resizeMode: 'contain' 
    },
    marginedCardBackImg : { 
        marginTop: -60, 
        width:50, 
        height: 70, 
        resizeMode: 'contain' 
    },
    scoreContainer : { 
        flex: 1, 
        justifyContent: 'center', 
        alignContent: 'center' 
    },
    scoreP : { 
        fontSize: 12, 
        display: 'inline', 
        textAlign: "center" 
    },
    scoreNum : { 
        fontSize: 15, 
        display: 'inline', 
        textAlign: "center" 
    },
    goldenTokenContainer : { 
        flex: 1, 
        display: 'flex', 
        flexDirection: "column", 
        justifyContent: "center", 
        alignContent: 'center' 
    }
}

const havingStyle = {
    havingP : { 
        fontSize: 10, 
        textAlign: "center" 
    },
    havingCardContainer : { 
        display: "flex", 
        flexDirection: "column" 
    },
    havingTokenContainer : { 
        marginTop: -10, 
        marginLeft: 2 
    },
    havingTokenImg : { 
        width: 30, 
        height: 30, 
        resizeMode: 'contain'
    },
    marginedHavingTokenImg : { 
        marginLeft: -35, 
        width: 30, 
        height: 30, 
        resizeMode: 'contain'
    },
}

function GoldenToken(props) {
    return(
        <img 
            style={Object.assign( {}, props.style, playerStyle.goldenTokenImg )} 
            src={ TokenImageList[GOLDEN_TOKEN_INDEX] } 
            />
    )
}

function HavingCard(props) {
    let cardList = [];

    for(let i = 0; i < props.havingList.length; i++) {
        for(let j = 0; j < props.havingList[i]; j++) {
            if(i == 0 && j == 0) {
                cardList.push(
                    <img style={ playerStyle.cardBackImg } src={ ColoredBackCardImageList[i][props.tokenIndx] }/>
                )
            }
            else {
                cardList.push(
                    <img style={ playerStyle.marginedCardBackImg } src={ ColoredBackCardImageList[i][props.tokenIndx] }/>
                )
            }
        }
    }

    return(
        <span style={Object.assign({}, props.style, { margin: 5 })}>
            <p style={ havingStyle.havingP  }> { props.number } </p>
            <span style={ havingStyle.havingCardContainer }>
                { cardList }
            </span>
            <span>
                <HavingToken style={ havingStyle.havingTokenContainer } tokenNumber={ props.tokenNumber } tokenIndx={ props.tokenIndx }/>
            </span>
        </span>
    )
}


function HavingToken(props) {
    let tokens = [];

    for(let i = 0; i < props.tokenNumber; i++) {
        if( i == 0) {
            tokens.push(
                <img style={Object.assign({}, props.style, havingStyle.havingTokenImg)} 
                    src={ TokenImageList[ props.tokenIndx ] } 
                    />
            );
        }
        else {
            tokens.push(
                <img style={Object.assign({}, props.style, havingStyle.marginedHavingTokenImg)} 
                    src={ TokenImageList[ props.tokenIndx ] } 
                    />
            );
        }
    }
    return(
        <span style={Object.assign({}, props.style, { display: "flex" })}>
            {tokens}
        </span>
    )
}

function SavingCard(props) {
    return(
        <span style={Object.assign({}, props.style, { margin: 5 })}>
            <p style={ havingStyle.havingP }> { props.number } </p>
            <img style={ playerStyle.cardBackImg } src={ BackCardImageList[0] }/>
        </span>
    )
}

export function Player(props) {

    return (
        <span style={Object.assign({}, props.style)}>
            <div style={{display: "flex"}}>
                <span style={ playerStyle.scoreContainer }>
                    <p style={ playerStyle.scoreP }> SCORE </p>
                    <p style={ playerStyle.scoreNum }> 8 </p>
                </span>
                <HavingCard havingList={ [1, 0, 0] } tokenIndx={ WHITE_TOKEN_INDEX } tokenNumber={ 2 } number={ 1 + 2 } style={{flex: 1}} />
                <HavingCard havingList={ [1, 2, 0] } tokenIndx={ BLUE_TOKEN_INDEX } tokenNumber={ 2 } number={ 3 + 2 } style={{flex: 3}} />
                <HavingCard havingList={ [1, 0, 3] } tokenIndx={ GREEN_TOKEN_INDEX } tokenNumber={ 2 } number={ 4 + 2 } style={{flex: 4}} />
            </div>
            <div style={{display: "flex"}}>
                <span style={ playerStyle.goldenTokenContainer }>
                    <GoldenToken />
                    <GoldenToken style={{marginTop: -23}}/>
                    <GoldenToken style={{marginTop: -23}}/>
                </span>
                <SavingCard img={BackCardImageList[0]} number={1} style={{flex: 1}} />
                <HavingCard havingList={ [5, 0, 0] } tokenIndx={ RED_TOKEN_INDEX } tokenNumber={ 2 } number={ 5 + 2 } style={{flex: 5}} />
                <HavingCard havingList={ [9, 0, 0] } tokenIndx={ BLACK_TOKEN_INDEX } tokenNumber={ 2 } number={ 9 + 2 } style={{flex: 9}} />
            </div>
        </span>
    )
}


