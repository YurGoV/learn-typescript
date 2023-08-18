abstract class Logger {
  abstract log(message: string): void; 

  printDate(date: Date) {
    this.log(date.toString());
  }
}

class RealLogger extends Logger {
  log(m: string) {
    console.log(m);
  }

  logWithDate(m: string) {
    this.printDate(new Date());
    this.log(m);
  }
}

const rl = new RealLogger();
// console.log()
rl.logWithDate('test log string');
