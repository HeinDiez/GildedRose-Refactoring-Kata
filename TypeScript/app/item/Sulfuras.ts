import { Item } from './item';

export const updateSulfuras = (item) :Item => {
    //"Sulfuras" is a legendary item and as such its Quality is 80 and it never alters.
    item.quality = 80;
    
    return item;
}