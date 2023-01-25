import { Item } from './item';

export class UpdateConjured extends Item {
    constructor (name, sellIn, quality) {
        super(name, sellIn, quality) 
    }

    update () {
        if (this.quality > 0) {
            this.quality -= 2
        }
        this.sellIn -= 1;
    }
}