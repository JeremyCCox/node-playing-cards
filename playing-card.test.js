import {describe, expect, test} from "@jest/globals"
import {Deck,Card} from "./src";
import {CardValue, FaceCard, SuitValue} from "./src/types";


describe('Cards', () => {
    test("Comparing Playing Cards",()=>{
        let card = new Card(0,10)
        expect(card.value).toBe(CardValue.TEN)
        expect(card.suit).toBe(SuitValue.SPADE)
        expect(card.value in FaceCard).toBeFalsy()
        card = new Card(2,12)
        expect(card.value).toBe(CardValue.QUEEN)
        expect(card.suit).toBe(SuitValue.CLUB)
        expect(card.value in FaceCard).toBeTruthy()
    })
});
describe('Card Deck',()=>{
    test("Create Deck of Cards",()=>{
        let deck = new Deck()
        expect(deck.cardStack.length).toBe(52)
        expect(deck.cardStack[26]).toStrictEqual(new Card(2,1))
    })
    test("Suffle Deck of Cards without seed",()=>{
        let shuffledDeck = new Deck()
        let deck = new Deck()
        shuffledDeck.shuffle()
        expect(deck.cardStack === shuffledDeck.cardStack).toBeFalsy();
    })
    test("Suffle Deck of Cards with seed",()=>{
        let shuffledDeck = new Deck({seed:0.292})
        let deck = new Deck({seed:0.292})
        shuffledDeck.shuffle()
        deck.shuffle()
        expect(deck.cardStack).toStrictEqual(shuffledDeck.cardStack);
        shuffledDeck.shuffle()
        deck.shuffle()
        expect(deck.cardStack).toStrictEqual(shuffledDeck.cardStack);
    })
    test('Draw cards',()=>{
        let deck = new Deck();
        expect(deck.draw()).toStrictEqual(new Card(3,13))
        expect(deck.cardStack.length).toBe(51)
        expect(deck.draw()).toStrictEqual(new Card(3,12))
    })
    test('Draw at end of deck',()=>{
        let deck = new Deck();
        deck.draw_n(52);
        expect(()=>deck.draw()).toThrowError("There are no cards left in this deck!")
    })
    test('Draw N cards',()=>{
        let deck = new Deck();
        deck.draw_n(3)
        expect(deck.cardStack.length).toBe(49)
        expect(deck.draw()).toStrictEqual(new Card(3,10))
    })

    test('Draw more cards than length',()=>{
        let deck = new Deck();
        expect(()=>deck.draw_n(55)).toThrowError("Not enough cards left in deck! 55 > 52");
        expect(deck.cardStack.length).toBe(52)
    })
    test("burn card",()=>{
        let deck = new Deck();
        deck.burn()
        expect(deck.cardStack.length).toBe(51)
    })
    test("burn N cards",()=>{
        let deck = new Deck();
        deck.burn_n(20)
        expect(deck.cardStack.length).toBe(32)
    })

})