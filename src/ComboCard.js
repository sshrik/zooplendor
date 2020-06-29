import React from 'react';
import { TokenCounter } from './TokenCounter.js'

const comboCardStyles = {
    comboCardSide : { 
        position:'absolute', 
        width: 30, 
        height: 100, 
        backgroundColor : 'rgba(255, 255, 255, 0.8)' 
    },
    comboCardText : { 
        textAlign: 'center', 
        margin: 5,
        fontSize: 18
    },
    comboCardTokenImage : { 
        width: 30,
        height: 70 
    }
}

export function ComboCard(props) {
	return (
		<span style={{ flex: 1 }}>
			<span style={comboCardStyles.comboCardSide}>
				<p style={comboCardStyles.comboCardText}>
                    { props.CardInfo.score }
                </p>
				<TokenCounter 
                    style={comboCardStyles.comboCardTokenImage}
                    CardInfo={ props.CardInfo }
                />
			</span>
			<img 
				src={ require(`${props.CardInfo.imgSrc}`) }
				style={{ width: 100, height: 100 }}
			/>
		</span>
	)
}
