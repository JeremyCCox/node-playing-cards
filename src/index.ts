import {CardType, CardValue, DeckOptions, DeckType, DefaultCardValues, SuitValue, DefaultSuitValues} from "./types"

export class Card implements CardType{
    suit: SuitValue;
    value: CardValue;
    constructor(suit:SuitValue,value:CardValue) {
        this.suit=suit;
        this.value=value;
    }
}
export class Deck implements DeckType{
    cardStack:CardType[];
    seed:number;
    deckType:string;
    jokers:boolean;
    constructor({type,jokers, seed}:DeckOptions = {type:"standard",jokers:false,seed:Math.random()}) {
        this.deckType=type||"standard";
        this.jokers=jokers||false;
        this.cardStack = new Array<CardType>();
        Object.values(DefaultSuitValues).map(value=>{
            this.cardStack.push(...suitStack(value))
        })
        this.seed = seed|| Math.random();
    }

    shuffle(){
        let array = this.cardStack
        let currentIndex = array.length;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            let randomIndex = Math.floor(this.seed * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        this.cardStack = array;
    }
    draw(){
        if(this.cardStack.length===0){
            throw new Error("There are no cards left in this deck!")
        }
        return(
            this.cardStack.pop()
        )
    }
    draw_n(count:number){
        if(count > this.cardStack.length){
            throw new Error(`Not enough cards left in deck! ${count} > ${this.cardStack.length}`)
        }
        return(
            this.cardStack.splice(-count)
        )
    }
    burn(){
        if(this.cardStack.length==0){
            throw new Error("There are no cards left in this deck to burn!")
        }
        this.cardStack.pop();
    }

    burn_n(count:number){
        if(count > this.cardStack.length){
            throw new Error(`Not enough cards left in deck to burn! ${count} > ${this.cardStack.length}`)
        }
        this.cardStack.splice(-count)
    }
}
function suitStack(suit:number){
    let cards = Object.values(DefaultCardValues).map((value)=>{
        return new Card(suit,value)
    })
    return<[CardType]>(
        cards
    )
}