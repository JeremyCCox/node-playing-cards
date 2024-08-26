"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceCard = exports.DefaultCardValues = exports.DefaultSuitValues = exports.CardValue = exports.SuitValue = void 0;
var SuitValue;
(function (SuitValue) {
    SuitValue[SuitValue["SPADE"] = 0] = "SPADE";
    SuitValue[SuitValue["HEART"] = 1] = "HEART";
    SuitValue[SuitValue["CLUB"] = 2] = "CLUB";
    SuitValue[SuitValue["DIAMOND"] = 3] = "DIAMOND";
})(SuitValue || (exports.SuitValue = SuitValue = {}));
var CardValue;
(function (CardValue) {
    // JOKER,
    CardValue[CardValue["ACE"] = 1] = "ACE";
    CardValue[CardValue["TWO"] = 2] = "TWO";
    CardValue[CardValue["THREE"] = 3] = "THREE";
    CardValue[CardValue["FOUR"] = 4] = "FOUR";
    CardValue[CardValue["FIVE"] = 5] = "FIVE";
    CardValue[CardValue["SIX"] = 6] = "SIX";
    CardValue[CardValue["SEVEN"] = 7] = "SEVEN";
    CardValue[CardValue["EIGHT"] = 8] = "EIGHT";
    CardValue[CardValue["NINE"] = 9] = "NINE";
    CardValue[CardValue["TEN"] = 10] = "TEN";
    CardValue[CardValue["JACK"] = 11] = "JACK";
    CardValue[CardValue["QUEEN"] = 12] = "QUEEN";
    CardValue[CardValue["KING"] = 13] = "KING";
})(CardValue || (exports.CardValue = CardValue = {}));
exports.DefaultSuitValues = {
    SPADE: 0,
    HEART: 1,
    CLUB: 2,
    DIAMOND: 3,
};
exports.DefaultCardValues = {
    // JOKER,
    ACE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4,
    FIVE: 5,
    SIX: 6,
    SEVEN: 7,
    EIGHT: 8,
    NINE: 9,
    TEN: 10,
    JACK: 11,
    QUEEN: 12,
    KING: 13,
};
var FaceCard;
(function (FaceCard) {
    FaceCard[FaceCard["JACK"] = 11] = "JACK";
    FaceCard[FaceCard["QUEEN"] = 12] = "QUEEN";
    FaceCard[FaceCard["KING"] = 13] = "KING";
})(FaceCard || (exports.FaceCard = FaceCard = {}));
