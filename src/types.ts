export enum SuitValue{
    SPADE=0,
    HEART=1,
    CLUB=2,
    DIAMOND=3,
}
export enum CardValue{
    // JOKER,
    ACE=1,
    TWO,
    THREE,
    FOUR,
    FIVE,
    SIX,
    SEVEN,
    EIGHT,
    NINE,
    TEN,
    JACK,
    QUEEN,
    KING,
}
export const DefaultSuitValues={
    SPADE:0,
    HEART:1,
    CLUB:2,
    DIAMOND:3,
}as const;
export const DefaultCardValues={
    // JOKER,
    ACE:1,
    TWO:2,
    THREE:3,
    FOUR:4,
    FIVE:5,
    SIX:6,
    SEVEN:7,
    EIGHT:8,
    NINE:9,
    TEN:10,
    JACK:11,
    QUEEN:12,
    KING:13,
} as const;
export enum FaceCard{
    JACK=11,
    QUEEN,
    KING
}

export interface CardType{
    suit:SuitValue;
    value:CardValue,
}

export interface DeckType{
    cardStack:CardType[]
    seed?:number,
    type?:string,
    jokers?:boolean,
}

export interface DeckOptions{
    type?:string,
    jokers?:boolean,
    seed?:number,
}