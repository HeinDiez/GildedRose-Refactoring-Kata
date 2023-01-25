import { Item } from './item';

export const updateConjured = (item) :Item => {

    if (item.sellIn === 5) {

        item.quality -= 3

    } else {

        item.quality = Math.max(0, item.sellIn > 0 ? item.quality -= 2 : item.quality -= 4);

    }

    item.sellIn--;

    return item;
}