import React from 'react';
import { ComboCard } from './ComboCard.js'
import { ComboCardList } from './CardInfo.js'

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

export default App;
