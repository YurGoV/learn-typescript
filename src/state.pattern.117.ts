class DocumentItem {
  public text: string;

  private state: DocumentItemState;

  constructor() {
    this.setState(new DraftDocumentItemState());
  }

  getState() {
    return this.state;
  }

  setState(state: DocumentItemState) {
    this.state = state;
    this.state.setContext(this);
  }

  publishDoc() {
    this.state.publish();
  }

  deleteDoc() {
    this.state.delete();
  }
}

abstract class DocumentItemState {
  public name: string;

  public item: DocumentItem;

  public setContext(item: DocumentItem) {
    this.item = item;
  }

  public abstract publish(): void;
  public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'DraftDobument';
  }

  public publish(): void {
    console.log(`to site sended text ${this.item.text}`);
    this.item.setState(new PublishDocumentItemState());
  }

  public delete(): void {
    console.log('Document deleted');
  }
}

class PublishDocumentItemState extends DocumentItemState {
  constructor() {
    super();
    this.name = 'PublishDobument';
  }

  public publish(): void {
    console.log('Can`t publish published document');
  }

  public delete(): void {
    console.log('Removed from publication');
    this.item.setState(new DraftDocumentItemState());
  }
}

const item = new DocumentItem();
item.text = 'My post!';
console.log(item.getState());
item.publishDoc();
console.log(item.getState());
item.publishDoc();
item.deleteDoc();
console.log(item.getState());

// NOTE: console output:
//
// <ref *1> DraftDocumentItemState {
//   name: 'DraftDobument',
//   item: DocumentItem { text: 'My post!', state: [Circular *1] }
// }
// to site sended text My post!
// <ref *1> PublishDocumentItemState {
//   name: 'PublishDobument',
//   item: DocumentItem { text: 'My post!', state: [Circular *1] }
// }
// Can`t publish published document
// Removed from publication
// <ref *1> DraftDocumentItemState {
//   name: 'DraftDobument',
//   item: DocumentItem { text: 'My post!', state: [Circular *1] }
// }
