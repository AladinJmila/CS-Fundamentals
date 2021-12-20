const testString = 'Bok, kako si danas';
// const testString = '     ';
// const testString = '';
// const testString = null;

function countVowels(str) {
  // O(n)
  if (typeof str !== 'string') return 0;
  const vowels = 'aeiou';
  let counter = 0;

  [...str.toLowerCase()].forEach(ch => {
    // O(n)
    if (vowels.indexOf(ch) !== -1) counter++;
  });

  return counter;
}
