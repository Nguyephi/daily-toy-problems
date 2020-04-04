
  // Calculate the highest product of three numbers
  /*
  o: int; product of the three highest int in array
  i: arr; integers
  c: at least o(n)
  e:

  [2, 5, 7, 3, 6, 9] => 378
  [-2, 3, 5, 6, 7, 9]
  [-10, 1, 3, 2, -10] => 300
  [-8, -6, -4, -1, 1, 2, 5]

  sort input arr
  if first and last are neg/pos => array is filled with pos int or neg int (get the highest three int)
  if above is true set the variables below as the last three int and get product and return
  Declare variables for the high as first index, med, low
  decalre negativeCount


  iterate through arrayOInts at second index
  compare highestes with current
  if highest is less than current
  highest = current
  else
  if med is null set med to current
  else compare med with current

  same with the lowest is current is less than med



  */

 function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) throw new Error;

  arrayOfInts.sort((a,b) => a - b);

  let max = null;
  let mid = null;
  let min = null;
  let negCount = 0;

  if ((arrayOfInts[0] > 0 && arrayOfInts[arrayOfInts.length - 1] > 0) || (arrayOfInts[0] < 0 && arrayOfInts[arrayOfInts.length - 1] < 0) || (arrayOfInts[0] < 0 && arrayOfInts[1] > 0)) {
    max = arrayOfInts[arrayOfInts.length - 1];
    mid = arrayOfInts[arrayOfInts.length - 2];
    min = arrayOfInts[arrayOfInts.length - 3];
    return max * mid * min;
  }

  // looop through sorted array
    // compare

  let leftSideProduct = arrayOfInts[arrayOfInts.length - 1] * arrayOfInts[arrayOfInts.length - 2] * arrayOfInts[arrayOfInts.length - 3];
  let rightSideProduct = arrayOfInts[0] * arrayOfInts[1] + arrayOfInts[2];
  let highestSet = leftSideProduct > rightSideProduct ? leftSideProduct : rightSideProduct
  let firstIdx = 0;
  let lastIdx = arrayOfInts.length -1

  while (min === null) {
    let first = arrayOfInts[firstIdx];
    let last = arrayOfInts[lastIdx];

    if (max === null) {
      if (Math.abs(first) > last) {
        max = first
        firstIdx++
        negCount++
      } else {
        max = last
        lastIdx--
      }
    }

    if (mid === null) {
      if (Math.abs(first) > last) {
        mid = first
        firstIdx++
        negCount++
      } else {
        mid = last
        lastIdx--
      }
    }

    if (min === null) {
      if (negCount === 2) {
        //two neg int makes a positive, we want positive int
        min = arrayOfInts[lastIdx]
      } else {
        // if one neg (as three neg is accounted for) take another neg int
        min = arrayOfInts[first]
      }
    }
  }

  let potential = max * mid * min

  return highestSet > potential ? highestSet : potential;
}