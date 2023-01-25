import { Item } from './item';

export const updateAgedBrie = (item) :Item => {

    if (item.quality < 50) {

        item.quality += ( item.sellIn > 0 ? 1 : 2 )

    } else {
        item.quality = 50
    }

    item.sellIn--;

    return item;
}