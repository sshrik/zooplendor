import React from 'react';
import { BackCardImageList } from '../CardInfo.js';
import { TokenImageList, ColoredBackCardImageList } from '../CardInfo.js';
import { 
    WHITE_TOKEN_INDEX, 
    BLUE_TOKEN_INDEX, 
    GREEN_TOKEN_INDEX, 
    RED_TOKEN_INDEX, 
    BLACK_TOKEN_INDEX, 
    GOLDEN_TOKEN_INDEX 
} from '../CardInfo.js';

function GoldenToken(props) {
    return(
        <img 
            style={Object.assign({}, props.style, { width: 30, height: 30, resizeMode: 'contain'})} 
            src={ TokenImageList[GOLDEN_TOKEN_INDEX] } 
        />
    )
}

function HavingCard(props) {
    return(
        <span style={Object.assign({}, props.style, { margin: 5 })}>
            <p style={{ fontSize: 10, textAlign: "center" }}> { props.number } </p>
            <img style={{width:50, height: 70, resizeMode: 'contain'}} src={ BackCardImageList[0] }/>
        </span>
    )
}

export function Player(props) {

    return (
        <span>
            <div style={{display: "flex"}}>
                <span style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <p style={{ fontSize: 20, textAlign: "center" }}>8</p>
                </span>
                <HavingCard img={ColoredBackCardImageList[WHITE_TOKEN_INDEX]} number={1} style={{flex: 1}} />
                <HavingCard img={ColoredBackCardImageList[BLUE_TOKEN_INDEX]} number={1} style={{flex: 1}} />
                <HavingCard img={ColoredBackCardImageList[GREEN_TOKEN_INDEX]} number={1} style={{flex: 1}} />
            </div>
            <div style={{display: "flex"}}>
                <span style={{ display: 'flex', flex: 1, flexDirection: "column", justifyContent: "center", alignContent: 'center' }}>
                    <GoldenToken />
                    <GoldenToken style={{marginTop: -23}}/>
                    <GoldenToken style={{marginTop: -23}}/>
                </span>
                <HavingCard img={BackCardImageList[0]} number={1} style={{flex: 1}} />
                <HavingCard img={ColoredBackCardImageList[RED_TOKEN_INDEX]} number={1} style={{flex: 1}} />
                <HavingCard img={ColoredBackCardImageList[BLACK_TOKEN_INDEX]} number={1} style={{flex: 1}} />
            </div>
        </span>
    )
}


