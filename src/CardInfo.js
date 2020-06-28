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
    CardList`s imgSrc : Image Source where it saved. Image can duplicate 4 / 3 / 2 cards each teir.
*/
export const CardList = {
    tier1 : [
        {
            need : [1, 1, 1, 1, 0],
            reword : 4,
            score: 0,
            imgSrc : ""
        },
        {
            need : [1, 2, 1, 1, 0],
            reword : 4,
            score: 0,
            imgSrc : ""
        },
        {
            need : [2, 2, 0, 1, 0],
            reword : 4,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 1, 3, 1],
            reword : 4,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 2, 1, 0],
            reword : 4,
            score: 0,
            imgSrc : ""
        },
        {
            need : [2, 0, 2, 0, 0],
            reword : 4,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 3, 0, 0],
            reword : 4,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 4, 0, 0, 0],
            reword : 4,
            score: 1,
            imgSrc : ""
        },
        {
            need : [1, 0, 1, 1, 1],
            reword : 1,
            score: 0,
            imgSrc : ""
        },
        {
            need : [1, 0, 1, 2, 1],
            reword : 1,
            score: 0,
            imgSrc : ""
        },
        {
            need : [1, 0, 2, 2, 0],
            reword : 1,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 1, 3, 1, 0],
            reword : 1,
            score: 0,
            imgSrc : ""
        },
        {
            need : [1, 0, 0, 0, 2],
            reword : 1,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 2, 0, 2],
            reword : 1,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 0, 3],
            reword : 1,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 4, 0],
            reword : 1,
            score: 1,
            imgSrc : ""
        },
        {
            need : [0, 1, 1, 1, 1],
            reword : 0,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 1, 2, 1, 1],
            reword : 0,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 2, 2, 0, 1],
            reword : 0,
            score: 0,
            imgSrc : ""
        },
        {
            need : [3, 1, 0, 0, 1],
            reword : 0,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 2, 1],
            reword : 0,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 2, 0, 0, 2],
            reword : 0,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 3, 0, 0, 0],
            reword : 0,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 4, 0, 0],
            reword : 0,
            score: 1,
            imgSrc : ""
        },
        {
            need : [1, 1, 0, 1, 1],
            reword : 2,
            score: 0,
            imgSrc : ""
        },
        {
            need : [1, 1, 0, 1, 2],
            reword : 2,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 1, 0, 2, 2],
            reword : 2,
            score: 0,
            imgSrc : ""
        },
        {
            need : [1, 3, 1, 0, 0],
            reword : 2,
            score: 0,
            imgSrc : ""
        },
        {
            need : [2, 1, 0, 0, 0],
            reword : 2,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 2, 0, 2, 0],
            reword : 2,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 3, 0],
            reword : 2,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 0, 4],
            reword : 2,
            score: 1,
            imgSrc : ""
        },
        {
            need : [1, 1, 1, 0, 1],
            reword : 3,
            score: 0,
            imgSrc : ""
        },
        {
            need : [2, 1, 1, 0, 1],
            reword : 3,
            score: 0,
            imgSrc : ""
        },
        {
            need : [2, 0, 1, 0, 2],
            reword : 3,
            score: 0,
            imgSrc : ""
        },
        {
            need : [1, 0, 0, 1, 3],
            reword : 3,
            score: 0,
            imgSrc : ""
        },
        {
            need : [0, 2, 1, 0, 0],
            reword : 3,
            score: 0,
            imgSrc : ""
        },
        {
            need : [2, 0, 0, 2, 0],
            reword : 3,
            score: 0,
            imgSrc : ""
        },
        {
            need : [3, 0, 0, 0, 0],
            reword : 3,
            score: 0,
            imgSrc : ""
        },
        {
            need : [4, 0, 0, 0, 0],
            reword : 3,
            score: 1,
            imgSrc : ""
        },
    ],
    tier2 : [
        {
            need : [3, 2, 2, 0, 0],
            reword : 4,
            score: 1,
            imgSrc : ""
        },
        {
            need : [3, 0, 3, 0, 2],
            reword : 4,
            score: 1,
            imgSrc : ""
        },
        {
            need : [0, 1, 4, 2, 0],
            reword : 4,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 0, 5, 3, 0],
            reword : 4,
            score: 2,
            imgSrc : ""
        },
        {
            need : [5, 0, 0, 0, 0],
            reword : 4,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 0, 6],
            reword : 4,
            score: 3,
            imgSrc : ""
        },
        {
            need : [0, 2, 2, 3, 0],
            reword : 1,
            score: 1,
            imgSrc : ""
        },
        {
            need : [0, 2, 3, 0, 3],
            reword : 1,
            score: 1,
            imgSrc : ""
        },
        {
            need : [5, 3, 0, 0, 0],
            reword : 1,
            score: 2,
            imgSrc : ""
        },
        {
            need : [2, 0, 0, 1, 4],
            reword : 1,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 5, 0, 0, 0],
            reword : 1,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 6, 0, 0, 0],
            reword : 1,
            score: 3,
            imgSrc : ""
        },
        {
            need : [0, 0, 3, 2, 2],
            reword : 0,
            score: 1,
            imgSrc : ""
        },
        {
            need : [2, 3, 0, 3, 0],
            reword : 0,
            score: 1,
            imgSrc : ""
        },
        {
            need : [0, 0, 1, 4, 2],
            reword : 0,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 5, 3],
            reword : 0,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 5, 0],
            reword : 0,
            score: 2,
            imgSrc : ""
        },
        {
            need : [6, 0, 0, 0, 0],
            reword : 0,
            score: 3,
            imgSrc : ""
        },
        {
            need : [3, 0, 2, 3, 0],
            reword : 2,
            score: 1,
            imgSrc : ""
        },
        {
            need : [2, 3, 0, 0, 2],
            reword : 2,
            score: 1,
            imgSrc : ""
        },
        {
            need : [4, 2, 0, 0, 1],
            reword : 2,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 5, 3, 0, 0],
            reword : 2,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 0, 5, 0, 0],
            reword : 2,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 0, 6, 0, 0],
            reword : 2,
            score: 3,
            imgSrc : ""
        },
        {
            need : [2, 0, 0, 2, 3],
            reword : 3,
            score: 1,
            imgSrc : ""
        },
        {
            need : [0, 3, 0, 2, 3],
            reword : 3,
            score: 1,
            imgSrc : ""
        },
        {
            need : [1, 4, 2, 0, 0],
            reword : 3,
            score: 2,
            imgSrc : ""
        },
        {
            need : [3, 0, 0, 0, 5],
            reword : 3,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 0, 5],
            reword : 3,
            score: 2,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 6, 0],
            reword : 3,
            score: 3,
            imgSrc : ""
        },
    ],
    tier3 : [
        {
            need : [3, 3, 5, 3, 0],
            reword : 4,
            score: 3,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 7, 0],
            reword : 4,
            score: 4,
            imgSrc : ""
        },
        {
            need : [0, 0, 3, 6, 3],
            reword : 4,
            score: 4,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 7, 3],
            reword : 4,
            score: 5,
            imgSrc : ""
        },
        {
            need : [3, 0, 3, 3, 5],
            reword : 1,
            score: 3,
            imgSrc : ""
        },
        {
            need : [7, 0, 0, 0, 0],
            reword : 1,
            score: 4,
            imgSrc : ""
        },
        {
            need : [6, 3, 0, 0, 3],
            reword : 1,
            score: 4,
            imgSrc : ""
        },
        {
            need : [7, 3, 0, 0, 0],
            reword : 1,
            score: 5,
            imgSrc : ""
        },
        {
            need : [0, 3, 3, 5, 3],
            reword : 0,
            score: 3,
            imgSrc : ""
        },
        {
            need : [0, 0, 0, 0, 7],
            reword : 0,
            score: 4,
            imgSrc : ""
        },
        {
            need : [3, 0, 0, 3, 6],
            reword : 0,
            score: 4,
            imgSrc : ""
        },
        {
            need : [3, 0, 0, 0, 7],
            reword : 0,
            score: 5,
            imgSrc : ""
        },
        {
            need : [5, 3, 0, 3, 3],
            reword : 2,
            score: 3,
            imgSrc : ""
        },
        {
            need : [0, 7, 0, 0, 0],
            reword : 2,
            score: 4,
            imgSrc : ""
        },
        {
            need : [3, 6, 3, 0, 0],
            reword : 2,
            score: 4,
            imgSrc : ""
        },
        {
            need : [0, 7, 3, 0, 0],
            reword : 2,
            score: 5,
            imgSrc : ""
        },
        {
            need : [3, 5, 3, 0, 3],
            reword : 3,
            score: 3,
            imgSrc : ""
        },
        {
            need : [0, 0, 7, 0, 0],
            reword : 3,
            score: 4,
            imgSrc : ""
        },
        {
            need : [0, 3, 6, 3, 0],
            reword : 3,
            score: 4,
            imgSrc : ""
        },
        {
            need : [0, 0, 7, 3, 0],
            reword : 3,
            score: 5,
            imgSrc : ""
        },
    ],
};

export const ComboCardList = [];

export const TokenList = [];