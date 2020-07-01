import React from 'react';
import { ComboCard } from './component/ComboCard.js'
import { TokenCard } from './component/TokenCard.js'
import { TokenList } from './component/TokenList.js'
import { BackCard } from './component/BackCard.js'
import { ComboCardList, TokenCardList, TokenImageList, BackCardImageList } from './CardInfo.js'
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
		<div style={{ display: "flex", height: "100vh", alignItems: 'center'}}>
			<div style={{ marginLeft: "10%", width: "60%", height: "80%", backgroundColor: "#204920", display: "flex"}}>
				<div style={{ flex: 1 }}>		
					<div style={{ marginLeft: "10%", display: "flex", width: "80%", backgroundColor: "#250493" }}>
						<ComboCard style={{flex: 1, marginLeft: "5%"}} CardInfo={ ComboCardList[0] }/>
						<ComboCard style={{flex: 1}} CardInfo={ ComboCardList[1] }/>
						<ComboCard style={{flex: 1}} CardInfo={ ComboCardList[2] }/>
						<ComboCard style={{flex: 1}} CardInfo={ ComboCardList[3] }/>
						<ComboCard style={{flex: 1}} CardInfo={ ComboCardList[4] }/>
					</div>
					<div style={{ display: "flex", flexDirection: "column", marginLeft: "10%", marginTop: "10%", flex: 1, backgroundColor: "#603310" }}>
						<div>
							<BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[2] }/>
							<TokenCard style={{marginLeft: "10%"}} CardInfo={ TokenCardList.tier3[0] }/>
							<TokenCard style={{marginLeft: "5%"}} CardInfo={ TokenCardList.tier3[1]}/>
							<TokenCard style={{marginLeft: "5%"}} CardInfo={ TokenCardList.tier3[2]}/>
							<TokenCard style={{marginLeft: "5%"}} CardInfo={ TokenCardList.tier3[3] }/>
						</div>
						<div>
							<BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[1] }/>
							<TokenCard style={{marginLeft: "10%"}} CardInfo={ TokenCardList.tier2[0] }/>
							<TokenCard style={{marginLeft: "5%"}} CardInfo={ TokenCardList.tier2[1]}/>
							<TokenCard style={{marginLeft: "5%"}} CardInfo={ TokenCardList.tier2[2]}/>
							<TokenCard style={{marginLeft: "5%"}} CardInfo={ TokenCardList.tier2[3] }/>
						</div>
						<div>
							<BackCard style={{marginLeft: "3%"}} imgSrc={ BackCardImageList[0] }/>
							<TokenCard style={{marginLeft: "10%"}} CardInfo={ TokenCardList.tier1[0] }/>
							<TokenCard style={{marginLeft: "5%"}} CardInfo={ TokenCardList.tier1[1]}/>
							<TokenCard style={{marginLeft: "5%"}} CardInfo={ TokenCardList.tier1[2]}/>
							<TokenCard style={{marginLeft: "5%"}} CardInfo={ TokenCardList.tier1[3] }/>
						</div>
					</div>
				</div>
				<div style={{ width: "20%", flexDirection: "row", backgroundColor: "#602482" }}>
					<TokenList kinds={ WHITE_TOKEN_INDEX } remain={ 7 }/>
					<TokenList kinds={ BLUE_TOKEN_INDEX } remain={ 7 }/>
					<TokenList kinds={ GREEN_TOKEN_INDEX } remain={ 7 }/>
					<TokenList kinds={ RED_TOKEN_INDEX } remain={ 7 }/>
					<TokenList kinds={ BLACK_TOKEN_INDEX } remain={ 7 }/>
					<TokenList kinds={ GOLDEN_TOKEN_INDEX } remain={ 7 }/>
				</div>
			</div>
		</div>
	);
}

export default App;
