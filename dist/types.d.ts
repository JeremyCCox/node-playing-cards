export declare enum SuitValue {
    SPADE = 0,
    HEART = 1,
    CLUB = 2,
    DIAMOND = 3
}
export declare enum CardValue {
    ACE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
    SEVEN = 7,
    EIGHT = 8,
    NINE = 9,
    TEN = 10,
    JACK = 11,
    QUEEN = 12,
    KING = 13
}
export declare const DefaultSuitValues: {
    readonly SPADE: 0;
    readonly HEART: 1;
    readonly CLUB: 2;
    readonly DIAMOND: 3;
};
export declare const DefaultCardValues: {
    readonly ACE: 1;
    readonly TWO: 2;
    readonly THREE: 3;
    readonly FOUR: 4;
    readonly FIVE: 5;
    readonly SIX: 6;
    readonly SEVEN: 7;
    readonly EIGHT: 8;
    readonly NINE: 9;
    readonly TEN: 10;
    readonly JACK: 11;
    readonly QUEEN: 12;
    readonly KING: 13;
};
export declare enum FaceCard {
    JACK = 11,
    QUEEN = 12,
    KING = 13
}
export interface CardType {
    suit: SuitValue;
    value: CardValue;
}
export interface DeckType {
    cardStack: CardType[];
    seed?: number;
    type?: string;
    jokers?: boolean;
}
export interface DeckOptions {
    type?: string;
    jokers?: boolean;
    seed?: number;
}
