const testString = 'Bok kako si danas';

function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

console.log(reverseWords(testString));
