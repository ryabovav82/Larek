
//Интерфейс карточки товара
export interface ICard {
    category: string;
    description: string;
    _id: string;
    image: string;
    price: number;
    title: string;

}
//Интерфейс пользователя
export interface IUser {
    paymentMethod: string;
    address: string;
    email: string;
    phone: string;
    _id: string;
}

//Интерфейс объекта карточки товара
export interface ICardData {
    cards: ICard[];
    cardId: string | null;
    getCard(cardId: string): ICard
}

