import React from 'react';
import { TokenImageList } from '../CardInfo.js';

const tokenListStyle = {
    tokenListContainer : {
        flex: 1, 
        display:"flex", 
        flexDirection: "row", 
        marginBottom: 10
    },
    tokenImageContainer : {
        width: 80, 
        height: 80
    },
    tokenImage : {
        width: 80, 
        height: 80
    },
    tokenTextContainer : {
        display: "flex", 
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: 5, 
        width: 20, 
        height: 80, 
    },
    tokenText : {
        fontSize: 20, 
        display: "inline"
    }
}

export function TokenList(props) {
    return(
        <span style={tokenListStyle.tokenListContainer}>
            <span style={tokenListStyle.tokenImageContainer}>
                <img 
                    src={TokenImageList[props.kinds]}
                    style={tokenListStyle.tokenImage}
                />
            </span>
            <span style={tokenListStyle.tokenTextContainer}>
                <p style={tokenListStyle.tokenText}>{props.remain}</p>
            </span>
        </span>
    );
}
