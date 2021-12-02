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

  contains(word) {
    let current = this.root;
    for (let ch of word) {
      if (!current.children[ch]) return false;
      current = current.children[ch];
    }
    return current.isEndOfWord;
  }

  traverse(root = this.root) {
    for (let child of Object.values(root.children)) {
      this.traverse(child);
    }
    console.log(root.value);
  }

  remove(word, root = this.root, index = 0) {
    if (index === word.length) {
      root.isEndOfWord = false;
      return;
    }

    let ch = word[index];
    let child = root.children[ch];
    if (!child) return;

    this.remove(word, child, index + 1);

    if (!this.hasChildren(child) && !child.isEndOfWord) {
      delete root.children[ch];
    }
  }

  hasChildren(node) {
    return Object.keys(node.children).length !== 0;
  }

  findWords(prefix) {
    let lastNode = this.findLastNodeOf(prefix);
    let words = [];
    this.findWordsRec(lastNode, prefix, words);

    return words;
  }

  findWordsRec(root, prefix, words) {
    if (!root) return;

    if (root.isEndOfWord) {
      words.push(prefix);
    }

    for (let child of Object.values(root.children)) {
      this.findWordsRec(child, prefix + child.value, words);
    }
  }

  findLastNodeOf(prefix) {
    if (!prefix) return null;

    let current = this.root;
    for (let ch of prefix) {
      let child = current.children[ch];
      if (!child) return null;
      current = child;
    }
    return current;
  }
}

const trie = new TrieHash();
trie.insertMosh('car');
trie.insertMosh('card');
trie.insertMosh('care');
trie.insertMosh('careful');
trie.insertMosh('egg');
console.log(trie.findWords());
