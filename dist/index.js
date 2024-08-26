"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = exports.Card = void 0;
var types_1 = require("./types");
var Card = /** @class */ (function () {
    function Card(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    return Card;
}());
exports.Card = Card;
var Deck = /** @class */ (function () {
    function Deck(_a) {
        var _b = _a === void 0 ? { type: "standard", jokers: false, seed: Math.random() } : _a, type = _b.type, jokers = _b.jokers, seed = _b.seed;
        var _this = this;
        this.deckType = type || "standard";
        this.jokers = jokers || false;
        this.cardStack = new Array();
        Object.values(types_1.DefaultSuitValues).map(function (value) {
            var _a;
            (_a = _this.cardStack).push.apply(_a, __spreadArray([], __read(suitStack(value)), false));
        });
        this.seed = seed || Math.random();
    }
    Deck.prototype.shuffle = function () {
        var _a;
        var array = this.cardStack;
        var currentIndex = array.length;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            var randomIndex = Math.floor(this.seed * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            _a = __read([
                array[randomIndex], array[currentIndex]
            ], 2), array[currentIndex] = _a[0], array[randomIndex] = _a[1];
        }
        this.cardStack = array;
    };
    Deck.prototype.draw = function () {
        if (this.cardStack.length === 0) {
            throw new Error("There are no cards left in this deck!");
        }
        return (this.cardStack.pop());
    };
    Deck.prototype.draw_n = function (count) {
        if (count > this.cardStack.length) {
            throw new Error("Not enough cards left in deck! ".concat(count, " > ").concat(this.cardStack.length));
        }
        return (this.cardStack.splice(-count));
    };
    Deck.prototype.burn = function () {
        if (this.cardStack.length == 0) {
            throw new Error("There are no cards left in this deck to burn!");
        }
        this.cardStack.pop();
    };
    Deck.prototype.burn_n = function (count) {
        if (count > this.cardStack.length) {
            throw new Error("Not enough cards left in deck to burn! ".concat(count, " > ").concat(this.cardStack.length));
        }
        this.cardStack.splice(-count);
    };
    return Deck;
}());
exports.Deck = Deck;
function suitStack(suit) {
    var cards = Object.values(types_1.DefaultCardValues).map(function (value) {
        return new Card(suit, value);
    });
    return (cards);
}
