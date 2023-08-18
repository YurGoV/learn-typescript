type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
  constructor(public items: string[]) { }
}
class Accordion {
  isOpened: boolean;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;


class ExtendedListClass extends List {
  first() {
    return this.items[0];
  }
}

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
  return class ExtendedListBack extends Base {
    first() {
      // this.
      return this.items[0];
    }
  };
}

class AccordionList {
  // isOpened: boolean;

  constructor(public items: string[]) { }
}

// const list = ExtendedList(List);
const list = ExtendedList(AccordionList);
const res = new list(['one', 'two']);
console.log(res.first());
// res.
