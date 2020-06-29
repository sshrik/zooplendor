import React from 'react';
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

export function TokenCard(props) {
    return (
        <span style={{flex : 1}}>
            <span style={tokenCardStyles.tokenCardTop}>
                <span style={tokenCardStyles.tokenCardRewordContainer}>
                    <img 
                        style={tokenCardStyles.tokenCardReword} 
                        src={TokenImageList[props.CardInfo.reword]}
                    />
                </span>
            </span>
            <span style={tokenCardStyles.tokenCardSide}>
                <p style={tokenCardStyles.tokenCardText}>
                    { props.CardInfo.score }
                </p>
                <TokenCounter 
                    style={tokenCardStyles.tokenCardTokenImage}
                    CardInfo={ props.CardInfo }
                />
            </span>
            <img 
                src={ props.CardInfo.imgSrc }
                style={{ width: 100, height: 140 }}
            />
        </span>
    )
}