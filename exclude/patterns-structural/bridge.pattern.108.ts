interface IProvider {
  sendMessage(message: string): void;
  connect(config: unknown): void;
  disconnect(): void;
}

class TelegramProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }

  connect(config: string): void {
    console.log(config);
  }

  disconnect(): void {
    console.log('disconnetced TP');
  }
}

class WhatsUpProvider implements IProvider {
  sendMessage(message: string): void {
    console.log(message);
  }

  connect(config: string): void {
    console.log(config);
  }

  disconnect(): void {
    console.log('disconnetced WP');
  }
}

class NotificationSender {
  constructor(private provider: IProvider) {}

  send() {
    this.provider.connect('connect');
    this.provider.sendMessage('message');
    this.provider.disconnect();
  }
}

class DelayNotificationSender extends NotificationSender {
  // constructor(provider: IProvider) {
  //   super(provider);
  // }

  sendDelayed() {}
}

const sender = new NotificationSender(new TelegramProvider());
sender.send();
const sender2 = new NotificationSender(new WhatsUpProvider());
sender2.send();

// NOTE: console output:
//
// connect
// message
// disconnetced TP
// connect
// message
// disconnetced WP
