import React from 'react';
import { useState, useEffect } from 'react';
import { TokenImageList } from '../CardInfo.js';
import { 
	GOLDEN_TOKEN_INDEX 
} from '../CardInfo.js'

const tokenListStyle = {
    tokenListContainer : {
        flex: 1, 
        display:"flex", 
        flexDirection: "row", 
        marginBottom: 10
    },
    tokenImageContainer : {
        width: 100, 
        height: 100,
        textAlign: "center",
        borderRadius: 50,
    },
    tokenImage : {
        marginTop: 10,
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
    let [selected, setSelected] = useState({ backgroundColor: "#FFFFFF" });

    useEffect(() => {
        if(props.selected) {
            setSelected({ backgroundColor: "#FFBF88" });
        }
        else {
            setSelected({ backgroundColor: "#FFFFFF" });
        }
    }, [props.selected])

    return(
        <span style={Object.assign({}, props.style, tokenListStyle.tokenListContainer)}>
            <span 
                style={Object.assign({}, tokenListStyle.tokenImageContainer, selected)}
                onClick={ (e) => { 
                    // Golden Token only can be taken by reserving cards.
                    if(props.kinds != GOLDEN_TOKEN_INDEX) {
                        e.stopPropagation();
                        props.selectToken(props.kinds);
                    }
                } }
            >
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
