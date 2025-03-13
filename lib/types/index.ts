export type Card = {
    id: number;
    time: number; // Время в секундах
    imageUrl: string; // URL изображения
    title: string; // Заголовок карточки
    bid: number; // Ставка
};

export type CardList = Card[];
