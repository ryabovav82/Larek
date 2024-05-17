import {ICard} from "../types";
import {IEvents} from "./base/events";

export class CardsData {
    protected _cards: ICard[];
    protected _preview: string;
    protected events: IEvents;

    constructor(events: IEvents) {
        this.events = events
    }
    getCard() {

    }
}