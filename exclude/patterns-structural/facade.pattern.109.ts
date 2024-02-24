class Notify {
  send(template: string, to: string) {
    console.log(`Send ${template}: ${to}`);
  }
}

class Log {
  log(message: string) {
    console.log(message);
  }
}

class Template {
  private templates = [{ name: 'other', template: '<h1>Html template!</h1>' }];

  getByName(name: string) {
    return this.templates.find((t) => t.name === name);
  }
}

class NotificationFacade {
  private notify: Notify;

  private logger: Log;

  private template: Template;

  constructor() {
    this.notify = new Notify();
    this.template = new Template();
    this.logger = new Log();
  }

  send(to: string, templateName: string) {
    const data = this.template.getByName(templateName);

    if (!data) {
      this.logger.log('Template not found');
      return;
    }
    this.notify.send(data.template, to);
    this.logger.log('Template Sended');
  }
}

const s = new NotificationFacade();
s.send('me@i.ua', 'other');

// NOTE: console output:
//
// Send <h1>Html template!</h1>: me@i.ua
// Template Sended
