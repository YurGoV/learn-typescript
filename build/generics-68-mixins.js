"use strict";
class List {
    items;
    constructor(items) {
        this.items = items;
    }
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
function ExtendedList(Base) {
    return class ExtendedListBack extends Base {
        first() {
            return this.items[0];
        }
    };
}
const list = ExtendedList(List);
const res = new list(['one', 'two']);
console.log(res.first());
//# sourceMappingURL=generics-68-mixins.js.map