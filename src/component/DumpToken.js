import { useState, useEffect } from 'react';
import React from 'react';
import { TokenImageList } from '../CardInfo.js';
import { 
    WHITE_TOKEN_INDEX, 
    BLUE_TOKEN_INDEX, 
    GREEN_TOKEN_INDEX, 
    RED_TOKEN_INDEX, 
    BLACK_TOKEN_INDEX, 
    GOLDEN_TOKEN_INDEX 
} from '../CardInfo.js';
import { SelectToken } from './SelectToken.js'


export function DumpTokenPopUp(props) {
    return(
        <span style={Object.assign({}, props.style, {backgroundColor: "#C4C4C4"})}>
            <div style={{display: "flex", justifyContent: 'center', alignItems: 'center', height: "25%"}}>
                <p>토큰은 10개 이상 가질 수 없습니다. 버릴 토큰을 선택 해 주세요.</p>
            </div>
            <div style={{display: "flex", height: "50%", justifyContent: 'center'}}>
                <SelectToken 
                    imgSrc={TokenImageList[WHITE_TOKEN_INDEX]} 
                    nowSelect={props.selectToken[WHITE_TOKEN_INDEX]} 
                    total={props.totalToken[WHITE_TOKEN_INDEX]}
                    index={WHITE_TOKEN_INDEX}
					tokenPlus={props.tokenPlus}
					tokenMinus={props.tokenMinus}
                />
                <SelectToken 
                    style={{ marginLeft: 12 }}
                    imgSrc={TokenImageList[BLUE_TOKEN_INDEX]} 
                    nowSelect={props.selectToken[BLUE_TOKEN_INDEX]} 
                    total={props.totalToken[BLUE_TOKEN_INDEX]}
                    index={BLUE_TOKEN_INDEX}
					tokenPlus={props.tokenPlus}
					tokenMinus={props.tokenMinus}
                />
                <SelectToken 
                    style={{ marginLeft: 12 }}
                    imgSrc={TokenImageList[GREEN_TOKEN_INDEX]} 
                    nowSelect={props.selectToken[GREEN_TOKEN_INDEX]} 
                    total={props.totalToken[GREEN_TOKEN_INDEX]}
                    index={GREEN_TOKEN_INDEX}
					tokenPlus={props.tokenPlus}
					tokenMinus={props.tokenMinus}
                />
                <SelectToken 
                    style={{ marginLeft: 12 }}
                    imgSrc={TokenImageList[RED_TOKEN_INDEX]} 
                    nowSelect={props.selectToken[RED_TOKEN_INDEX]} 
                    total={props.totalToken[RED_TOKEN_INDEX]}
                    index={RED_TOKEN_INDEX}
					tokenPlus={props.tokenPlus}
					tokenMinus={props.tokenMinus}
                />
                <SelectToken 
                    style={{ marginLeft: 12 }}
                    imgSrc={TokenImageList[BLACK_TOKEN_INDEX]} 
                    nowSelect={props.selectToken[BLACK_TOKEN_INDEX]} 
                    total={props.totalToken[BLACK_TOKEN_INDEX]}
                    index={BLACK_TOKEN_INDEX}
					tokenPlus={props.tokenPlus}
					tokenMinus={props.tokenMinus}
                />
                <SelectToken 
                    style={{ marginLeft: 12 }}
                    imgSrc={TokenImageList[GOLDEN_TOKEN_INDEX]} 
                    nowSelect={props.selectToken[GOLDEN_TOKEN_INDEX]} 
                    total={props.totalToken[GOLDEN_TOKEN_INDEX]}
                    index={GOLDEN_TOKEN_INDEX}
					tokenPlus={props.tokenPlus}
					tokenMinus={props.tokenMinus}
                />
            </div>
            <div style={{display: "flex", alignItems: "flex-end", justifyContent: "flex-end", height: "25%"}}>
                <span style={{display:"flex", alignItems: "center", justifyContent: "center", width: 100, height: 40, borderRadius: 8, marginBottom : 36, marginRight: 36, backgroundColor: "#3E81E5"}}>
                    <p style={{color: "#FFFFFF", fontSize: 18}}> 결정 </p>
                </span>
            </div>
        </span>
    )
}