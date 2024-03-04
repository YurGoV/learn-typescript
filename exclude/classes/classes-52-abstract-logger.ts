abstract class Logger52 {
  abstract log(message: string): void;

  printDate(date: Date) {
    this.log(date.toString());
  }
}

class MyLogger52 extends Logger52 {
  log(message: string): void {
    console.log(message);
  }

  logWithDate(message: string) {
    this.printDate(new Date());
    this.log(message);
  }
}

const logger = new MyLogger52();
logger.logWithDate('my message');
