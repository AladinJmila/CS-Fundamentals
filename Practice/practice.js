const testStr = 'I am blue blabla bli blablabla';
const testStr = '';

function mostRepeatedCh(str) {
  if (typeof str !== 'string' || !str) throw new Error('Invalid input.');
  let counterObj = {};
  [...str].forEach(ch => {
    if (counterObj[ch]) counterObj[ch]++;
    else counterObj[ch] = 1;
  });

  return Object.keys(counterObj).reduce((a, b) =>
    counterObj[a] > counterObj[b] ? a : b
  );
}

console.log(mostRepeatedCh(testStr));
