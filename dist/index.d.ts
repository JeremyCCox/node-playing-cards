import { CardType, CardValue, DeckOptions, DeckType, SuitValue } from "./types";
export declare class Card implements CardType {
    suit: SuitValue;
    value: CardValue;
    constructor(suit: SuitValue, value: CardValue);
}
export declare class Deck implements DeckType {
    cardStack: CardType[];
    seed: number;
    deckType: string;
    jokers: boolean;
    constructor({ type, jokers, seed }?: DeckOptions);
    shuffle(): void;
    draw(): CardType | undefined;
    draw_n(count: number): CardType[];
    burn(): void;
    burn_n(count: number): void;
}
