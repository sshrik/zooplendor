import React from 'react';
import { ComboCard } from './component/ComboCard.js'
import { TokenCard } from './component/TokenCard.js'
import { TokenList } from './component/TokenList.js'
import { ComboCardList, TokenCardList, TokenImageList } from './CardInfo.js'
import { 
	WHITE_TOKEN_INDEX, 
	BLUE_TOKEN_INDEX, 
	GREEN_TOKEN_INDEX, 
	RED_TOKEN_INDEX, 
	BLACK_TOKEN_INDEX, 
	GOLDEN_TOKEN_INDEX 
} from './CardInfo.js'

function App() {
	return (
		<div style={{ display: "flex", height: "100vh", alignItems: 'center', justifyContent: 'center'}}>
			<div style={{ width: "80%", height: "80%", justifyContent: 'center', backgroundColor: "#204920" }}>
				<div style={{ marginLeft: "10%", display: "flex", width: "80%", backgroundColor: "#250493" }}>
					<ComboCard style={{flex: 1, marginLeft: "10%"}} CardInfo={ ComboCardList[0] }/>
					<ComboCard style={{flex: 1}} CardInfo={ ComboCardList[1] }/>
					<ComboCard style={{flex: 1}} CardInfo={ ComboCardList[2] }/>
					<ComboCard style={{flex: 1}} CardInfo={ ComboCardList[3] }/>
					<ComboCard style={{flex: 1}} CardInfo={ ComboCardList[4] }/>
				</div>
			</div>
		</div>
	);
}

/*
	<div style={{ flex: 1, flexDirection: "row" }}>
		<ComboCard CardInfo={ ComboCardList[0] }/>
		<ComboCard CardInfo={ ComboCardList[1] }/>
		<ComboCard CardInfo={ ComboCardList[2] }/>
		<ComboCard CardInfo={ ComboCardList[3] }/>
	</div>
	<div style={{ flex: 1, flexDirection: "row" }}>
		<TokenCard CardInfo={ TokenCardList.tier1[0] }/>
		<TokenCard CardInfo={ TokenCardList.tier2[4]}/>
		<TokenCard CardInfo={ TokenCardList.tier3[1]}/>
		<TokenCard CardInfo={ TokenCardList.tier2[6] }/>
	</div>
	<div style={{ flex: 1, flexDirection: "row" }}>
		<TokenList kinds={ WHITE_TOKEN_INDEX } remain={ 7 }/>
		<TokenList kinds={ BLUE_TOKEN_INDEX } remain={ 6 }/>
		<TokenList kinds={ GREEN_TOKEN_INDEX } remain={ 5 }/>
		<TokenList kinds={ RED_TOKEN_INDEX } remain={ 4 }/>
		<TokenList kinds={ BLACK_TOKEN_INDEX } remain={ 3 }/>
		<TokenList kinds={ GOLDEN_TOKEN_INDEX } remain={ 1 }/>
	</div>
			
*/

export default App;
