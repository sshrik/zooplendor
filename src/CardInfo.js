export const WHITE_TOKEN_INDEX = 0;
export const BLUE_TOKEN_INDEX = 1;
export const GREEN_TOKEN_INDEX = 2;
export const RED_TOKEN_INDEX = 3;
export const BLACK_TOKEN_INDEX = 4;
export const GOLDEN_TOKEN_INDEX = 5;

/**
    CardList`s need : Need token number with order of above TOKEN_INDEX.
    CardList`s reword : Reword will be only 1 with number of above TOKEN_INDEX.
    CardList`s score : Score of each cards.
    CardList`s imgSrc : Image Source where it saved. Image can duplicate 10 / 3 / 2 cards each teir.
*/

export const TokenCardList = {
    tier1 : [
        {
            need : [1, 1, 1, 1, 0],
            reword : 4,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 5.png"
        },
        {
            need : [1, 2, 1, 1, 0],
            reword : 4,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 5.png"
        },
        {
            need : [2, 2, 0, 1, 0],
            reword : 4,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 5.png"
        },
        {
            need : [0, 0, 1, 3, 1],
            reword : 4,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 5.png"
        },
        {
            need : [0, 0, 2, 1, 0],
            reword : 4,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 5.png"
        },
        {
            need : [2, 0, 2, 0, 0],
            reword : 4,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 5.png"
        },
        {
            need : [0, 0, 3, 0, 0],
            reword : 4,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 5.png"
        },
        {
            need : [0, 4, 0, 0, 0],
            reword : 4,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 1 5.png"
        },
        {
            need : [1, 0, 1, 1, 1],
            reword : 1,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 2.png"
        },
        {
            need : [1, 0, 1, 2, 1],
            reword : 1,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 2.png"
        },
        {
            need : [1, 0, 2, 2, 0],
            reword : 1,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 2.png"
        },
        {
            need : [0, 1, 3, 1, 0],
            reword : 1,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 2.png"
        },
        {
            need : [1, 0, 0, 0, 2],
            reword : 1,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 2.png"
        },
        {
            need : [0, 0, 2, 0, 2],
            reword : 1,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 2.png"
        },
        {
            need : [0, 0, 0, 0, 3],
            reword : 1,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 2.png"
        },
        {
            need : [0, 0, 0, 4, 0],
            reword : 1,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 1 2.png"
        },
        {
            need : [0, 1, 1, 1, 1],
            reword : 0,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 1.png"
        },
        {
            need : [0, 1, 2, 1, 1],
            reword : 0,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 1.png"
        },
        {
            need : [0, 2, 2, 0, 1],
            reword : 0,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 1.png"
        },
        {
            need : [3, 1, 0, 0, 1],
            reword : 0,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 1.png"
        },
        {
            need : [0, 0, 0, 2, 1],
            reword : 0,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 1.png"
        },
        {
            need : [0, 2, 0, 0, 2],
            reword : 0,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 1.png"
        },
        {
            need : [0, 3, 0, 0, 0],
            reword : 0,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 1.png"
        },
        {
            need : [0, 0, 4, 0, 0],
            reword : 0,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 1 1.png"
        },
        {
            need : [1, 1, 0, 1, 1],
            reword : 2,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 3.png"
        },
        {
            need : [1, 1, 0, 1, 2],
            reword : 2,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 3.png"
        },
        {
            need : [0, 1, 0, 2, 2],
            reword : 2,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 3.png"
        },
        {
            need : [1, 3, 1, 0, 0],
            reword : 2,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 3.png"
        },
        {
            need : [2, 1, 0, 0, 0],
            reword : 2,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 3.png"
        },
        {
            need : [0, 2, 0, 2, 0],
            reword : 2,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 3.png"
        },
        {
            need : [0, 0, 0, 3, 0],
            reword : 2,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 3.png"
        },
        {
            need : [0, 0, 0, 0, 4],
            reword : 2,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 1 3.png"
        },
        {
            need : [1, 1, 1, 0, 1],
            reword : 3,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 4.png"
        },
        {
            need : [2, 1, 1, 0, 1],
            reword : 3,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 4.png"
        },
        {
            need : [2, 0, 1, 0, 2],
            reword : 3,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 4.png"
        },
        {
            need : [1, 0, 0, 1, 3],
            reword : 3,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 4.png"
        },
        {
            need : [0, 2, 1, 0, 0],
            reword : 3,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 4.png"
        },
        {
            need : [2, 0, 0, 2, 0],
            reword : 3,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 4.png"
        },
        {
            need : [3, 0, 0, 0, 0],
            reword : 3,
            score: 0,
            imgSrc : "resource/tokenCard/Tier 1 4.png"
        },
        {
            need : [4, 0, 0, 0, 0],
            reword : 3,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 1 4.png"
        },
    ],
    tier2 : [
        {
            need : [3, 2, 2, 0, 0],
            reword : 4,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 9.png"
        },
        {
            need : [3, 0, 3, 0, 2],
            reword : 4,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 9.png"
        },
        {
            need : [0, 1, 4, 2, 0],
            reword : 4,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 9.png"
        },
        {
            need : [0, 0, 5, 3, 0],
            reword : 4,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 10.png"
        },
        {
            need : [5, 0, 0, 0, 0],
            reword : 4,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 10.png"
        },
        {
            need : [0, 0, 0, 0, 6],
            reword : 4,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 2 10.png"
        },
        {
            need : [0, 2, 2, 3, 0],
            reword : 1,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 3.png"
        },
        {
            need : [0, 2, 3, 0, 3],
            reword : 1,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 3.png"
        },
        {
            need : [5, 3, 0, 0, 0],
            reword : 1,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 3.png"
        },
        {
            need : [2, 0, 0, 1, 4],
            reword : 1,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 4.png"
        },
        {
            need : [0, 5, 0, 0, 0],
            reword : 1,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 4.png"
        },
        {
            need : [0, 6, 0, 0, 0],
            reword : 1,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 2 4.png"
        },
        {
            need : [0, 0, 3, 2, 2],
            reword : 0,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 1.png"
        },
        {
            need : [2, 3, 0, 3, 0],
            reword : 0,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 1.png"
        },
        {
            need : [0, 0, 1, 4, 2],
            reword : 0,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 1.png"
        },
        {
            need : [0, 0, 0, 5, 3],
            reword : 0,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 2.png"
        },
        {
            need : [0, 0, 0, 5, 0],
            reword : 0,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 2.png"
        },
        {
            need : [6, 0, 0, 0, 0],
            reword : 0,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 2 2.png"
        },
        {
            need : [3, 0, 2, 3, 0],
            reword : 2,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 5.png"
        },
        {
            need : [2, 3, 0, 0, 2],
            reword : 2,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 5.png"
        },
        {
            need : [4, 2, 0, 0, 1],
            reword : 2,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 5.png"
        },
        {
            need : [0, 5, 3, 0, 0],
            reword : 2,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 6.png"
        },
        {
            need : [0, 0, 5, 0, 0],
            reword : 2,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 6.png"
        },
        {
            need : [0, 0, 6, 0, 0],
            reword : 2,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 2 6.png"
        },
        {
            need : [2, 0, 0, 2, 3],
            reword : 3,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 7.png"
        },
        {
            need : [0, 3, 0, 2, 3],
            reword : 3,
            score: 1,
            imgSrc : "resource/tokenCard/Tier 2 7.png"
        },
        {
            need : [1, 4, 2, 0, 0],
            reword : 3,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 7.png"
        },
        {
            need : [3, 0, 0, 0, 5],
            reword : 3,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 8.png"
        },
        {
            need : [0, 0, 0, 0, 5],
            reword : 3,
            score: 2,
            imgSrc : "resource/tokenCard/Tier 2 8.png"
        },
        {
            need : [0, 0, 0, 6, 0],
            reword : 3,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 2 8.png"
        },
    ],
    tier3 : [
        {
            need : [3, 3, 5, 3, 0],
            reword : 4,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 3 9.png"
        },
        {
            need : [0, 0, 0, 7, 0],
            reword : 4,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 9.png"
        },
        {
            need : [0, 0, 3, 6, 3],
            reword : 4,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 10.png"
        },
        {
            need : [0, 0, 0, 7, 3],
            reword : 4,
            score: 5,
            imgSrc : "resource/tokenCard/Tier 3 10.png"
        },
        {
            need : [3, 0, 3, 3, 5],
            reword : 1,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 3 3.png"
        },
        {
            need : [7, 0, 0, 0, 0],
            reword : 1,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 3.png"
        },
        {
            need : [6, 3, 0, 0, 3],
            reword : 1,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 4.png"
        },
        {
            need : [7, 3, 0, 0, 0],
            reword : 1,
            score: 5,
            imgSrc : "resource/tokenCard/Tier 3 4.png"
        },
        {
            need : [0, 3, 3, 5, 3],
            reword : 0,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 3 1.png"
        },
        {
            need : [0, 0, 0, 0, 7],
            reword : 0,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 1.png"
        },
        {
            need : [3, 0, 0, 3, 6],
            reword : 0,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 2.png"
        },
        {
            need : [3, 0, 0, 0, 7],
            reword : 0,
            score: 5,
            imgSrc : "resource/tokenCard/Tier 3 2.png"
        },
        {
            need : [5, 3, 0, 3, 3],
            reword : 2,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 3 5.png"
        },
        {
            need : [0, 7, 0, 0, 0],
            reword : 2,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 5.png"
        },
        {
            need : [3, 6, 3, 0, 0],
            reword : 2,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 6.png"
        },
        {
            need : [0, 7, 3, 0, 0],
            reword : 2,
            score: 5,
            imgSrc : "resource/tokenCard/Tier 3 6.png"
        },
        {
            need : [3, 5, 3, 0, 3],
            reword : 3,
            score: 3,
            imgSrc : "resource/tokenCard/Tier 3 7.png"
        },
        {
            need : [0, 0, 7, 0, 0],
            reword : 3,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 7.png"
        },
        {
            need : [0, 3, 6, 3, 0],
            reword : 3,
            score: 4,
            imgSrc : "resource/tokenCard/Tier 3 8.png"
        },
        {
            need : [0, 0, 7, 3, 0],
            reword : 3,
            score: 5,
            imgSrc : "resource/tokenCard/Tier 3 8.png"
        },
    ],
};

/**
    CardList`s need : Need TokenCard number with order of above TOKEN_INDEX.
    CardList`s score : Score of each combo cards. All same with 3.
    CardList`s imgSrc : Image source of each combo cards.
*/
export const ComboCardList = [
    {
        need : [4, 0, 0, 0, 4],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 1.png"
    },
    {
        need : [4, 4, 0, 0, 0],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 2.png"
    },
    {
        need : [3, 3, 3, 0, 0],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 3.png"
    },
    {
        need : [0, 0, 0, 4, 4],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 4.png"
    },
    {
        need : [0, 0, 3, 3, 3],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 5.png"
    },
    {
        need : [0, 4, 4, 0, 0],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 6.png"
    },
    {
        need : [3, 0, 0, 3, 3],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 7.png"
    },
    {
        need : [0, 3, 3, 3, 0],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 8.png"
    },
    {
        need : [0, 0, 4, 4, 0],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 9.png"
    },
    {
        need : [3, 3, 0, 0, 3],
        score: 3,
        imgSrc : "resource/comboCard/Combo Card 10.png"
    }
];

export const TokenImageList = [
    "resource/token/Token 1", 
    "resource/token/Token 2", 
    "resource/token/Token 3", 
    "resource/token/Token 4", 
    "resource/token/Token 5", 
    "resource/token/Token 6"
];