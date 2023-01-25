import { Item } from './item';

export class UpdateAgedBrie extends Item {
    constructor (name, sellIn, quality) {
        super(name, sellIn, quality) 
    }

    update () {
        if (this.quality < 50) {
            this.quality += 1
        }
        this.sellIn -= 1;
    }
}