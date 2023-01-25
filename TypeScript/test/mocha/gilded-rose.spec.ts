import { expect } from 'chai';
import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item'

describe('Gilded Rose', () => {
    it('should read value of foo', () => {
        const gildedRose = new GildedRose([new Item('foo', 1, 1)]);
        const items = gildedRose.updateQuality();
        const item = items[0];
        expect(item.name).to.equal('foo');
        expect(item.sellIn).to.equal(0);
        expect(item.quality).to.equal(0);
    });

    it('should accept empty value', () => {
        const gildedRose = new GildedRose();
        const instance = gildedRose.items
        expect(instance.length).to.equal(0);
    });

    it('should perform faster than old version', () => {
        let filledArray = new Array(100_000).fill(new Item('foo', 0, 0));
        const startTime = performance.now();
        const gildedRose = new GildedRose(filledArray);
        gildedRose.updateQuality();
        const endTime = performance.now();
        console.log(`Test took ${endTime - startTime}ms to execute`);
        //Old version took around 11 to 12 seconds to execute
    });

    describe('Aged Brie conditions', () => { 

        it('increase the quality and decrease the sellin by 1', () => {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 5, 6) ]);
            const items = gildedRose.updateQuality();
            const item =items[0]
            expect(item.sellIn).to.equal(4);
            expect(item.quality).to.equal(7);
        });
        
        it('decrease the sellin and retain quality if 50', () => {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 49, 50) ]);
            const items = gildedRose.updateQuality();
            const item =items[0]
            expect(item.sellIn).to.equal(48);
            expect(item.quality).to.equal(50);
        });

        it('should limit quality of 50 when there are more than 50 quality', () => {
            const gildedRose = new GildedRose([ new Item('Aged Brie', 20, 60) ]);
            const items = gildedRose.updateQuality();
            const item =items[0]
            expect(item.sellIn).to.equal(19);
            expect(item.quality).to.equal(50);
        });
    })

    describe('Backstage passes to a TAFKAL80ETC concert conditions', () => {
        it('increase quality by 2 when there are 10 days or less', () => {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1) ]);
            const items = gildedRose.updateQuality();
            const item =items[0]
            expect(item.sellIn).to.equal(9);
            expect(item.quality).to.equal(3);
        });
        it('increase quality by 3 when there are 5 days or less', () => {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 4, 1) ]);
            const items = gildedRose.updateQuality();
            const item =items[0]
            expect(item.sellIn).to.equal(3);
            expect(item.quality).to.equal(4);
        });
        it('set quality of backstage passes to 0 after concert', () => {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10) ]);
            const items = gildedRose.updateQuality();
             const item =items[0]
            expect(item.sellIn).to.equal(-1);
            expect(item.quality).to.equal(0);
        });
    
        it('set quality of 1 when there are 10 days more', () => {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 20, 20) ]);
            const items = gildedRose.updateQuality();
             const item =items[0]
            expect(item.sellIn).to.equal(19);
            expect(item.quality).to.equal(21);
        });
    
        it('limit quality of 50 when there are more than 50 quality', () => {
            const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 20, 60) ]);
            const items = gildedRose.updateQuality();
             const item =items[0]
            expect(item.sellIn).to.equal(19);
            expect(item.quality).to.equal(50);
        });
    })

    describe('Sulfuras, Hand of Ragnaros Conditions', () => {
        it('does not decrease quality for sulfuras', () => {
            const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 10, 54) ]);
            const items = gildedRose.updateQuality();
             const item =items[0]
            expect(item.sellIn).to.equal(10);
            expect(item.quality).to.equal(80);
        });

        it('always have the quality value of 80', () => {
            const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 10, 55) ]);
            const items = gildedRose.updateQuality();
             const item =items[0]
            expect(item.sellIn).to.equal(10);
            expect(item.quality).to.equal(80);
        });
    })


    describe('Conjured items Conditions', () => {
        it('decrease quality by 2 times and sellin by 1 ', () => {
            const gildedRose = new GildedRose([ new Item('Conjured', 10, 10) ]);
            const items = gildedRose.updateQuality();
             const item =items[0]
            expect(item.sellIn).to.equal(9);
            expect(item.quality).to.equal(8);
        });
         
        it('decrease quality by 4 times when sellin is 0', () => {
            const gildedRose = new GildedRose([ new Item('Conjured', 0, 10) ]);
            const items = gildedRose.updateQuality();
             const item =items[0]
            expect(item.sellIn).to.equal(-1);
            expect(item.quality).to.equal(6);
        });
    
        it('quality should never go below 0', () => {
            const gildedRose = new GildedRose([ new Item('Conjured', 0, 1) ]);
            const items = gildedRose.updateQuality();
            const item = items[0]
            expect(item.sellIn).to.equal(-1);
            expect(item.quality).to.equal(0);
        });
    
        it('lower quality by 3 if exactly 5 days left', () => {
            const gildedRose = new GildedRose([ new Item('Conjured', 5, 6 )])
            const items = gildedRose.updateQuality();
            const item = items[0]
            expect(item.sellIn).to.equal(4);
            expect(item.quality).to.equal(3);
        })
    })

    describe('Default Item Conditions', () => {
        it('decrease quality and sellin', () => {
            const gildedRose = new GildedRose([ new Item('foo', 1, 1) ]);
            const items = gildedRose.updateQuality();
            const item =items[0]
            expect(item.sellIn).to.equal(0);
            expect(item.quality).to.equal(0);
        });
         
        it('decrease quality 2x as fast if sellin is 0', () => {
            const gildedRose = new GildedRose([ new Item('foo', 0, 4) ]);
            const items = gildedRose.updateQuality();
             const item =items[0]
            expect(item.sellIn).to.equal(-1);
            expect(item.quality).to.equal(2);
        });
    
        it('quality should never go below 0', () => {
            const gildedRose = new GildedRose([ new Item('foo', 0, 1) ]);
            const items = gildedRose.updateQuality();
            const item = items[0]
            expect(item.sellIn).to.equal(-1);
            expect(item.quality).to.equal(0);
        });
    })
});








