export default function isPlayable(hand) {
  let suitedness = new Set();
  let numValues = [];
  let pocketPair = false;
  let freqCounter = {}
  // console.log(hand)

  // Use Set to get single/double suited, check for 3 of a Kind
  for (let card of hand) {
    suitedness.add(card.suit);
    if (!freqCounter[card.value]) {
      freqCounter[card.value] = 1;
      numValues.push(card.numValue);
    } else {
      freqCounter[card.value]++;
      numValues.push(card.numValue);
      pocketPair = true;
      if (freqCounter[card.value] >= 3) {
        console.log('3 of a kind');
        return false;
      }
    }
  }
  // Check for Aces
  if (pocketPair === true) {
    let counter = 0;
    for (let value of numValues) {
      if (value === 14) {
        counter++
      }
    } if (counter === 2) {
      console.log('Aces')
      return true
    }
  }

  // Check for connectedness
  if (pocketPair === false) {
    if (Math.max(...numValues) - Math.min(...numValues) < 6) {
      console.log('Connected', Math.max(...numValues), Math.min(...numValues), Math.max(...numValues) - Math.min(...numValues))
      return true;
    }
  }

  if (pocketPair === true) {
    if (Math.max(...numValues) - Math.min(...numValues) <= 4) {
      console.log('Connected with a pair', Math.max(...numValues), Math.min(...numValues))
      return true;
    }
  }

  // Double suited Kings and Queens
  if (freqCounter['K'] === 2 || freqCounter['Q'] === 2) {
    if (suitedness.length === 2) {
      console.log('Double suited kings or queens', freqCounter)
      return true
    }
  }

  console.log('Rags');
  return false
}
