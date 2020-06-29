import React from 'react';
import { ComboCard } from './component/ComboCard.js'
import { TokenCard } from './component/TokenCard.js'
import { ComboCardList, TokenCardList } from './CardInfo.js'

function App() {
	return (
		<div style={{flex: 1}}>
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
		</div>
	);
}

export default App;
