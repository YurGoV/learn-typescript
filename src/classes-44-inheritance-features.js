"use strict";
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistedPayment extends Payment {
    // NOTE: we can (or not) redefine constructor, or make it empty
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        //  new method 
    }
    // NOTE: we can override method
    // pay(date?: Date) {
    //   // this.status = 'paid'; // NOT GOOD
    //   super.pay();
    //   if (date) { this.paidAt = date; }
    // }
    // NEW in js - override:
    pay(date) {
        // this.status = 'paid'; // NOT GOOD
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
// new PersistedPayment().
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admin extends User {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
new Admin();
