import React from 'react';
import { TokenImageList } from '../CardInfo.js';

const tokenCounterStyles = {
    tokenImageCounterContainer: {
        display: "flex",
        marginBottom: 2
    },
    tokenImageContainer : { 
        width: 20, 
        height: 20 
    },
    tokenImage : { 
        width: 18, 
        height: 18, 
        resizeMode: "contain" 
    },
    tokenNumberContainer : { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: 10, 
        height: 20, 
    },
    tokenNumber : { 
        display: 'inline',
        fontSize: 10
    },
    tokenCounterContainer:  { 
        display: 'flex',
        flexDirection: "column", 
        justifyContent: 'flex-end',
        marginLeft: 1,  
    }
}

export function TokenCounter(props) {
	var tokenImgs = [];
	
	for(var i = 0; i < props.CardInfo.need.length; i++) {
		if(props.CardInfo.need[i] != 0) {
			tokenImgs.push(
				<span style={ tokenCounterStyles.tokenImageCounterContainer } key={i}>
					<span style={ tokenCounterStyles.tokenImageContainer }>
						<img 
                            src={ TokenImageList[i] } 
                            style={ tokenCounterStyles.tokenImage }
                        />
					</span>
					<span style={ tokenCounterStyles.tokenNumberContainer }>
						<p style={ tokenCounterStyles.tokenNumber }>
                            { props.CardInfo.need[i] }
                        </p>
					</span>
				</span>
			);
		}
    }
    
	return (
		<span style={ Object.assign({}, props.style, tokenCounterStyles.tokenCounterContainer) }>
			{tokenImgs}
		</span>
	);
}