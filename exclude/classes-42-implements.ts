interface ILogger {
  log(...args): void
  error(...args): void
}

class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }

  async error(...args: any[]): Promise<void> {
    // post on outer system
    await (console.log('post in outer system'));
    throw new Error('Method not implemented.');
  }

}

interface IPayable {
  pay(paymentId: number): void
  price?: number
}

interface IDeletable {
  delete(): void
}

class User implements IPayable, IDeletable {
  delete(): void {
    throw new Error('Method not implemented.');
  }

  pay(paymentId: number | string): void {
    throw new Error('Method not implemented.');
  }

  price?: number | undefined;

}
