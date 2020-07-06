import { useState, useEffect } from 'react';
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
        textAlign: "center",
    },
    havingCardContainer : { 
        display: "flex", 
        flexDirection: "column" 
    },
    havingTokenContainer : { 
        width: 50,
        justifyContent: 'flex-start',
        marginTop: -10, 
    },
    havingTokenImg : { 
        width: 30, 
        height: 30, 
        resizeMode: 'contain'
    },
    marginedHavingTokenImg : { 
        marginLeft: -27, 
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
    let [cardList, setCardList] = useState([]);
    let [tokenNumber, setTokenNumber] = useState(0);
    
    useEffect(() => { 
        let tier1Num = props.havingList.tier1[props.tokenIndx].length;
        let tier2Num = props.havingList.tier2[props.tokenIndx].length;
        let tier3Num = props.havingList.tier3[props.tokenIndx].length;
 
        if(tier1Num + tier2Num + tier3Num != 0) {
            if(cardList[0].props.src) {
                if(cardList.length != tier1Num + tier2Num + tier3Num) {
                    updateCardList();
                    updateTokenNumber();
                }
            }
            else {
                // If empty,
                updateCardList();
                updateTokenNumber();
            }
        }
    });

    let updateCardList = () => {
        let tempCardList = [];
        let havingTemp = [ 
            props.havingList.tier1[props.tokenIndx].length, 
            props.havingList.tier2[props.tokenIndx].length, 
            props.havingList.tier3[props.tokenIndx].length 
        ]

        let first = true;
        let key = 0;

        for(let i = 0; i < havingTemp.length; i++) {
            for(let j = 0; j < havingTemp[i]; j++) {
                key += 1;
                if(first) {
                    tempCardList.push(
                        <img 
                            key={ key }
                            style={ playerStyle.cardBackImg } 
                            src={ ColoredBackCardImageList[i][props.tokenIndx] }
                        />
                    )
                    first = false;
                }
                else {
                    tempCardList.push(
                        <img 
                            key={ key }
                            style={ playerStyle.marginedCardBackImg } 
                            src={ ColoredBackCardImageList[i][props.tokenIndx] }
                        />
                    )
                }
            }
        }

        // If no token cards, make space for token setting.
        if(tempCardList.length == 0) {
            tempCardList.push(
                <span style={ Object.assign({}, playerStyle.cardBackImg) } />
            )
        }

        setCardList(tempCardList);
    }

    let updateTokenNumber = () => {
        let tempTokenNumber = 0;

        // Add up all token`s reaming.
        tempTokenNumber += props.havingList.tier1[props.tokenIndx].length;
        tempTokenNumber += props.havingList.tier2[props.tokenIndx].length;
        tempTokenNumber += props.havingList.tier3[props.tokenIndx].length;
        tempTokenNumber += props.havingToken[props.tokenIndx];

        setTokenNumber(tempTokenNumber);
    }

    // If props.havingList change, chaing cardList with using Hook.
    useEffect(()=> {
        updateCardList();

        console.log("Card List Setting called. : " + props.havingList.tier1);
    }, [ props.havingList ]);

    useEffect(() => {
        updateTokenNumber();
    }, [
        props.havingToken[props.tokenIndx]
    ]);

    return(
        <span style={Object.assign({}, props.style, { margin: 5 })}>
            <p style={ havingStyle.havingP  }> { tokenNumber } </p>
            <span style={ havingStyle.havingCardContainer }>
                { cardList }
            </span>
            <span>
                <HavingToken 
                    style={ havingStyle.havingTokenContainer }
                    havingToken={ props.havingToken } 
                    tokenIndx={ props.tokenIndx }
                />
            </span>
        </span>
    )
}

function HavingToken(props) {
    let [tokens, setTokens] = useState([]);

    useEffect(() => {
        let tempTokens = [];
        for(let i = 0; i < props.havingToken[props.tokenIndx]; i++) {
            if( i == 0 ) {
                tempTokens.push(
                    <img 
                        key={ i }
                        style={Object.assign({}, props.style, havingStyle.havingTokenImg)} 
                        src={ TokenImageList[ props.tokenIndx ] } 
                    />
                );
            }
            else {
                tempTokens.push(
                    <img 
                        key={ i }
                        style={Object.assign({}, props.style, havingStyle.marginedHavingTokenImg)} 
                        src={ TokenImageList[ props.tokenIndx ] } 
                    />
                );
            }
        }

        setTokens(tempTokens);
    }, [ props.havingToken[props.tokenIndx] ]);
    
    return(
        <span style={Object.assign({}, props.style)}>
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
    let [nowTurn, setNowTurn] = useState({ backgroundColor: "#FFFFFF"});

    useEffect(() => {
        if(props.turn == props.playerNumber) {
            setNowTurn({ backgroundColor: "#BADFFF"});
        }
        else {
            setNowTurn({ backgroundColor: "#FFFFFF"});
        }
    }, [props.turn]);

    return (
        <span style={Object.assign({}, props.style, nowTurn)}>
            <div style={{display: "flex"}}>
                <span style={ playerStyle.scoreContainer }>
                    <p style={ playerStyle.scoreP }> SCORE </p>
                    <p style={ playerStyle.scoreNum }> 8 </p>
                </span>
                <HavingCard havingList={ props.havingList } tokenIndx={ WHITE_TOKEN_INDEX } havingToken={ props.havingToken } style={{flex: 1}} />
                <HavingCard havingList={ props.havingList } tokenIndx={ BLUE_TOKEN_INDEX } havingToken={ props.havingToken } style={{flex: 1}} />
                <HavingCard havingList={ props.havingList } tokenIndx={ GREEN_TOKEN_INDEX } havingToken={ props.havingToken } style={{flex: 1}} />
            </div>
            <div style={{display: "flex"}}>
                <span style={ playerStyle.goldenTokenContainer }>
                    <GoldenToken />
                    <GoldenToken style={{marginTop: -23}}/>
                    <GoldenToken style={{marginTop: -23}}/>
                </span>
                <SavingCard img={ BackCardImageList[0] } number={ 1 } style={{flex: 1}} />
                <HavingCard havingList={ props.havingList } tokenIndx={ RED_TOKEN_INDEX } havingToken={ props.havingToken } style={{flex: 1}} />
                <HavingCard havingList={ props.havingList } tokenIndx={ BLACK_TOKEN_INDEX } havingToken={ props.havingToken } style={{flex: 1}} />
            </div>
        </span>
    )
}


