interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

class UserService implements IUserService {
  users: number = 1000;

  @Log // NOTE: comment/uncomment to see how decorator work
  getUsersInDatabase(): number {
    throw new Error('Errorrr');
  }
}

function Log(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<(...args: any[]) => any | void>,
) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);

  // NOTE: can use old methood in new:
  // const oldValue = descriptor.value // save original methood
  descriptor.value = () => {
    console.log('no error by methood decorator');
    // NOTE: there we can use original methood if we need
  };
}

console.log(new UserService().getUsersInDatabase());
