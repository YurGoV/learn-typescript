interface IDeliveryToHome {
  date: Date,
  address: string
}
interface IDeliveryToMahazine {
  date: Date,
  id: number
}
type Product = { id: number, name: string, price: number };

class Cart {
  products: Product[];

  // delivery: IDeliveryToMahazine | IDeliveryToHome | false = false;
  delivery: IDeliveryToMahazine | IDeliveryToHome ;

  constructor() {
    this.products = [];
  }

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
  setDelivery(d: IDeliveryToHome | IDeliveryToMahazine) {
    this.delivery = d;
  }

  cardCheckout(): boolean {
    return this.products?.length > 0 && this.delivery !== undefined;
  }

}

const test = new Cart();
console.log(test.delivery);
console.log(test.cardCheckout());
test.setDelivery({ date: new Date(), id: 3 });
console.log(test.cardCheckout());
test.addProduct({ id: 3, name: 'butter', price: 239 });
console.log(test.cardCheckout());
