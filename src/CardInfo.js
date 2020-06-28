export const WHITE_TOKEN_INDEX = 0;
export const BLUE_TOKEN_INDEX = 1;
export const GREEN_TOKEN_INDEX = 2;
export const RED_TOKEN_INDEX = 3;
export const BLACK_TOKEN_INDEX = 4;

/**
    CardList`s need : Need token number with order of above TOKEN_INDEX.
    CardList`s reword : Reword will be only 1 with number of above TOKEN_INDEX.
    CardList`s imgSrc : Image Source where it saved.
*/
export const CardList = {
    tier1 : [
        {
            need : [1, 1, 1, 1, 0],
            reword : 4,
            imgSrc : ""
        },
        {
            need : [1, 2, 1, 1, 0],
            reword : 4,
            imgSrc : ""
        },
        {
            need : [2, 2, 0, 1, 0],
            reword : 4,
            imgSrc : ""
        },
    ],
    tier2 : [],
    tier3 : [],
};

export const ComboCardList = [];

export const TokenList = [];