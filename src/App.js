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
		<div>
			<ComboCard CardInfo={ ComboCardList[0] }/>
			<ComboCard CardInfo={ ComboCardList[1] }/>
			<ComboCard CardInfo={ ComboCardList[2] }/>
			<ComboCard CardInfo={ ComboCardList[3] }/>
		</div>
	);
}

function ComboCard(props) {
	var imgSrc = "./" + props.CardInfo.imgSrc;
	console.log(props.cardInfo);

	return (
		<div style={{flex: 1}}>
			<div style={{width: 30, height: "100%", position: "absolute", backgroundColor : "#ffffff", opacity: 0.5}}>
				<text>{props.CardInfo.score}</text>
			</div>
			<img 
				src={ require(`${imgSrc}`) }
			/>
		</div>
	)
}

export default App;
