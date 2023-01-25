import { Item } from './item';

export const updateDefaultItem = (item) :Item => {

    item.quality = Math.max((item.sellIn > 0 ? item.quality -= 1 : item.quality -= 2), 0);

    item.sellIn--
    
    return item;
}