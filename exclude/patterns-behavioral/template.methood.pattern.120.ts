class Form {
  constructor(public name: string) {}
}

abstract class SaveForm<T> {
  public save(form: Form) {
    const res = this.fill(form);
    this.log(res);
    this.send(res);
  }

  protected abstract fill(form: Form): T;
  protected log(data: T): void {
    console.log(data);
  }

  protected abstract send(data: T): void;
}

class FirstAPI extends SaveForm<string> {
  protected fill(form: Form): string {
    return form.name;
  }

  protected send(data: string): void {
    console.log(`Sending ${data}`);
  }
}

class SecondAPI extends SaveForm<{ fio: string }> {
  protected fill(form: Form): { fio: string } {
    return { fio: form.name };
  }

  protected send(data: { fio: string }): void {
    console.log(`Sending ${data}`);
  }
}

const form1 = new FirstAPI();
form1.save(new Form('Name 1'));

const form2 = new SecondAPI();
form2.save(new Form('Name 1'));

// NOTE: console output
//
// Name 1
// Sending Name 1
// { fio: 'Name 1' }
// Sending [object Object]
