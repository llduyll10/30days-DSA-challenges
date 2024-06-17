class HashSet {
    constructor(size = 10) {
        this.keyMap = new Array(size).fill(null).map(() => []);
    }

    _hash(key) {
        let total = 0;
        for(let i=0; i<key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.keyMap.length;
    }

    add(value) {
        let index = this._hash(value);
        let bucket = this.keyMap[index];
        if(!bucket.includes(value)) {
            bucket.push(value);
        }
    }

    contains(value) {
        let index = this._hash(value);
        let bucket = this.keyMap[index];
        return bucket.includes(value);
    }

    remove(value) {
        let index = this._hash(value);
        let bucket = this.keyMap[index];
        if(bucket.includes(value)) {
            bucket.splice(bucket.indexOf(value), 1);
        }
    }
}

// Driver code
let set = new HashSet(10);

set.add("a");
set.add("b");
set.add("c");
set.add("d");
set.add("e");
set.add("f");
set.add("g");

console.log(set.contains("a")); // true
console.log(set.contains("h")); // false
set.remove("a");
console.log(set.contains("a")); // false

console.log('set', set)