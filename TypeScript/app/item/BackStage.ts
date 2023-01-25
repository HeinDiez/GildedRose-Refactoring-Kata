import { Item } from './item';

function checkSellIn (item) {

  if (item.sellIn <= 0) {
    return 0
  }

  if (item.sellIn <= 5) {
    return item.quality += 3
  }

  if (item.sellIn <= 10) {
    return item.quality += 2
  }

  return item.quality += 1
}

export const updateBackStage = (item) :Item => {

  const quality = checkSellIn(item);

  item.quality = item.quality < 50 ? quality : 50;

  item.sellIn -= 1;
  
  return item;
}