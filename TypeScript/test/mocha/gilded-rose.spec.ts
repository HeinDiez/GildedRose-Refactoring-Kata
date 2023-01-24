import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    const testItem = items.shift();
    expect(testItem.name).to.equal('foo');
    expect(testItem.sellIn).to.equal(0);
    expect(testItem.quality).to.equal(0);
  });

  it('should perform fast', () => {
    let filledArray = new Array(100_000).fill(new Item('foo', 0, 0));

    const startTime = performance.now();

    const gildedRose = new GildedRose(filledArray);
    gildedRose.updateQuality();

    const endTime = performance.now();
    console.log(`Test took ${endTime - startTime}ms to execute`);

    //Old version took around 11 to 12 seconds to execure
  });

});
