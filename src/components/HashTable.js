/* eslint-disable no-underscore-dangle */
export default class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = 0;
  }

  set(key, value) {
    const index = (typeof (key[0]) === 'number') ? key[0] : key.charCodeAt(0) - 55;
    if (this.table[index]) {
      this.table[index].push(value);
    } else {
      this.table[index] = [value];
    }
    this.size += 1;
  }
}
