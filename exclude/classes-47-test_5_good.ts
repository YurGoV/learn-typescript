// interface IDeliveryToHome {
//   date: Date,
//   address: string
// }
// interface IDeliveryToMahazine {
//   date: Date,
//   id: number
// }
// type Product = { id: number, name: string, price: number };

class Product {
  id: number;

  name: string;

  price: number;
}

class Delivery {
  date: Date;
}
class DeliveryToHome extends Delivery {
  address: string;

  constructor(d: Date, address: string) {
    super();
    this.date = d;
    this.address = address;
  }
}
class DeliveryToMahazine extends Delivery {
  id: number;

  date: Date = new Date;

  constructor(id: number) {
    super();
    this.id = id;
  }
}

type Deliverys = DeliveryToHome | DeliveryToMahazine;

class Cart {
  products: Product[] = [];

  delivery: Deliverys;

  addProduct(p: Product) {
    this.products.push(p);
  }

  deleteProduct(id: number): boolean {
    if (!this.products.find(product => product.id === id)) return false;
    this.products = this.products.filter(p => p.id !== id);
    return true;
  }

  countCartTotalPrice(): number {
    const totalPrice = this.products.reduce((previousValue, product) => {
      return previousValue + product.price;
    }, 0);
    return totalPrice;
  }

  // setDelivery(d: IDeliveryToHome | IDeliveryToMahazine | false) {
  setDelivery(d: DeliveryToHome | DeliveryToMahazine) {
    this.delivery = d;
  }

  cardCheckout(): boolean {
    return this.products?.length > 0 && this.delivery ? true : false;
  }

}

const test = new Cart();
console.log(test.delivery);
console.log(test.cardCheckout());
test.setDelivery({ date: new Date(), id: 3 });
console.log(test.cardCheckout());
test.addProduct({ id: 3, name: 'butter', price: 200 });
test.addProduct({ id: 43, name: 'milk', price: 150 });
test.addProduct({ id: 8, name: 'sugar', price: 100 });
console.log( test.countCartTotalPrice() );
test.deleteProduct(8);
console.log( test.countCartTotalPrice() );
console.log(test.cardCheckout());
