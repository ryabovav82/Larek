import './scss/styles.scss';
import {Api} from "./components/base/api";
import {API_URL, CDN_URL} from "./utils/constants";
import {ICard} from "./types";

class AddOnApi extends Api {

    constructor(baseUrl: string, cdnURL: string, options?: RequestInit) {
        super(baseUrl, options);
    }
    getCards() {
        return this.get('/product')
            .then((data: ICard) => console.log(data))
    }

    getCard(id: string) {
        return this.get(`/product/${id}`)
            .then((data: ICard) => console.log(data))
    }

}



const test = new AddOnApi(API_URL, CDN_URL)

test.getCards()
