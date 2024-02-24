interface IMiddleware {
  next(mid: IMiddleware): IMiddleware;

  handle(request: any): any;
}

abstract class AbstractMiddleware implements IMiddleware {
  private nextMiddleware: IMiddleware;

  next(mid: IMiddleware): IMiddleware {
    this.nextMiddleware = mid;
    return mid;
  }

  handle(request: any) {
    if (this.nextMiddleware) {
      return this.nextMiddleware.handle(request);
    }
    return;
  }
}

class AuthMiddleware extends AbstractMiddleware {
  override handle(request: any) {
    console.log('AuthMiddleware');
    if (request.userId === 1) {
      return super.handle(request);
    }
    return { error: 'you are not authorized' };
  }
}

class ValidateMiddleware extends AbstractMiddleware {
  override handle(request: any) {
    console.log('MalidateMiddleware');
    if (request.body) {
      return super.handle(request);
    }

    return { error: 'No body' };
  }
}

class Controller extends AbstractMiddleware {
  override handle(request: any) {
    console.log('Controller');

    return { success: request };
  }
}

const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();

auth.next(validate).next(controller);

console.log(
  auth.handle({
    userId: 3,
  }),
);

console.log(
  auth.handle({
    userId: 1,
  }),
);

console.log(
  auth.handle({
    userId: 1,
    body: 'I am Ok!',
  }),
);

// NOTE: console output:
//
// AuthMiddleware
// { error: 'you are not authorized' }
// AuthMiddleware
// MalidateMiddleware
// { error: 'No body' }
// AuthMiddleware
// MalidateMiddleware
// Controller
// { success: { userId: 1, body: 'I am Ok!' } }
