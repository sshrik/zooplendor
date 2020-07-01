import React from 'react';

export function BackCard(props) {
    return (
        <span style={ Object.assign({}, props.style, { flex : 1 }) }>
            <img 
                src={ props.imgSrc }
                style={{ width: 100, height: 140 }}
            />
        </span>
    )
}