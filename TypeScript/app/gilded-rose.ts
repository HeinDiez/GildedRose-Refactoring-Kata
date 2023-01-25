import { Item, updateAgedBrie, updateBackStage, updateSulfuras, updateConjured, updateDefaultItem } from './item';

export class GildedRose {
  items: Array<Item>;
  constructor(items = [] as Array<Item>) {
    this.items = items;
  }


  updateQuality(): Item[] {
    this.items.map((item) => {

        if (item.name === 'Aged Brie') {
          return updateAgedBrie(item);
        }
  
        if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          return updateBackStage(item);
        }
  
        if (item.name === 'Sulfuras, Hand of Ragnaros') {
          return updateSulfuras(item);
        }

        if (item.name.indexOf('Conjured') !== -1) {
            return updateConjured(item);
        }

  
        return updateDefaultItem(item);

    });
    
    return this.items;
  }

}