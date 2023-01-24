import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('fixme');
  });

  it('should perform fast', () => {
    let filledArray = new Array(10000).fill(new Item('foo', 0, 0));

    const startTime = performance.now();

    const gildedRose = new GildedRose(filledArray);
    gildedRose.updateQuality();

    const endTime = performance.now();
    console.log(`Test took ${endTime - startTime}ms to execute`, filledArray);
  });
});
