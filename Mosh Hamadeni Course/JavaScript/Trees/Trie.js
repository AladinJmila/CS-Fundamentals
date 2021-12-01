class TrieArray {
  Node = class {
    children = new Array(26);
    isEndOfWord = false;
    constructor(value) {
      this.value = value;
    }
  };

  root = new this.Node(' ');

  insertAla = word => {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let index = word[i].charCodeAt(0) - 'a'.charCodeAt(0);
      if (
        !current.children[index] ||
        current.children[index].value !== word[i]
      ) {
        current.children[index] = new this.Node(word[i]);
      }
      current = current.children[index];
      if (i === word.length - 1) {
        current.isEndOfWord = true;
      }
    }
  };

  insertMosh = word => {
    let current = this.root;
    for (let ch of word) {
      let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
      if (!current.children[index]) {
        current.children[index] = new this.Node(ch);
      }
      current = current.children[index];
    }
    current.isEndOfWord = true;
  };
}

class TrieHash {
  Node = class {
    children = {};
    isEndOfWord = false;
    constructor(value) {
      this.value = value;
    }
  };

  root = new this.Node(' ');

  insertMosh = word => {
    let current = this.root;
    for (let ch of word) {
      if (!current.children[ch]) {
        current.children[ch] = new this.Node(ch);
      }
      current = current.children[ch];
    }
    current.isEndOfWord = true;
  };
}

const trie = new TrieHash();
trie.insertMosh('cat');
trie.insertMosh('calf');
