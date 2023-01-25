import { Item } from './item';

export class UpdateSulfuras extends Item {
    constructor (name, sellIn, quality) {
        super(name, sellIn, quality) 
    }

    update () {
        this.sellIn -= 1;
    }
}