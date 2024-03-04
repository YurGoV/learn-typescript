interface ILogger {
  log(...args: string[]): void;
  error(...args: string[]): void;
}

class Logger42 implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }

  async error(...args: any[]): Promise<void> {
    // post on outer system
    console.log('post in outer system');
    throw new Error('Method not implemented.');
  }
}

interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

interface IDeletable {
  delete(): void;
}

class User42 implements IPayable, IDeletable {
  delete(): void {
    throw new Error('Method not implemented.');
  }

  pay(paymentId: number | string): void {
    // pay(paymentId: number): void {
    console.log('simple log');
  }

  price?: number;
}
