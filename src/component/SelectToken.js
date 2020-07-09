import { useState, useEffect } from 'react';
import React from 'react';

export function SelectToken(props) {
    return(
        <span style={Object.assign({}, props.style, { display: "flex", width: 80, height: 120, flexDirection: "column" })}>
            <div style={{display: 'flex', width: 80, height: 20}}>
                <img 
                    style={{marginLeft: 5, marginRight: 30, width: 20, height: 20}}
                    src="/resource/button/PlusBtn.png"
                    onClick={() => {
                        props.tokenPlus(props.index);
                    }}
                />
                <img 
                    style={{width: 20, height: 20}}
                    src="/resource/button/MinusBtn.png"
                    onClick={() => {
                        props.tokenMinus(props.index);
                    }}
                />
            </div>
            <img 
                style={{width: 80, height: 80}}
                src={props.imgSrc}
            />
            <div style={{display: "flex", width: 80, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                <p>{props.nowSelect} / {props.total}</p>
            </div>
        </span>
    )
}