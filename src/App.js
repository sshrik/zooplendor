import React from 'react';
import {
	WHITE_TOKEN_INDEX, 
	BLUE_TOKEN_INDEX, 
	GREEN_TOKEN_INDEX, 
	RED_TOKEN_INDEX, 
	BLACK_TOKEN_INDEX, 
	GOLDEN_TOKEN_INDEX, 
	TokenCardList, 
	ComboCardList, 
	TokenImageList
} from './CardInfo.js';

function App() {
	return (
		<div style={{ flex: 1, flexDirection: "row" }}>
			<ComboCard CardInfo={ ComboCardList[0] }/>
			<ComboCard CardInfo={ ComboCardList[1] }/>
			<ComboCard CardInfo={ ComboCardList[2] }/>
			<ComboCard CardInfo={ ComboCardList[3] }/>
		</div>
	);
}

function TokenCounter(props) {
	var tokenImgs = [];
	
	for(var i = 0; i < props.CardInfo.need.length; i++) {
		if(props.CardInfo.need[i] != 0) {
			tokenImgs.push(
				<span style={{ display:"flex", marginBottom: 2 }} key={i}>
					<span style={{ width: 20, height: 20 }}>
						<img src={ require( `${TokenImageList[i]}`) } style={{ width: 20, height: 20, resizeMode: "contain" }} />
					</span>
					<span style={{ width: 10, height: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<p style={{ fontSize: 10, display: 'inline' }} >{ props.CardInfo.need[i] }</p>
					</span>
				</span>
			);
		}
	}
	
	var styles = Object.assign({}, props.style, { marginTop: 10, marginLeft: 2, display: 'flex', flexDirection: "column", justifyContent: 'flex-end', alignItems: 'center' });
	console.log(styles);

	return (
		<span style={styles}>
			{tokenImgs}
		</span>
	);
}

function ComboCard(props) {
	return (
		<span style={{ flex: 1 }}>
			<span style={{ width: 30, height: 100, position:'absolute', backgroundColor : 'rgba(255, 255, 255, 0.8)' }}>
				<p style={{ textAlign: 'center', margin: 5, fontSize: 18 }}>{props.CardInfo.score}</p>
				<TokenCounter style={{ width: 30, height: 60 }} CardInfo={ props.CardInfo }/>
			</span>
			<img 
				src={ require(`${props.CardInfo.imgSrc}`) }
				style={{ width: 100, height: 100 }}
			/>
		</span>
	)
}

export default App;
