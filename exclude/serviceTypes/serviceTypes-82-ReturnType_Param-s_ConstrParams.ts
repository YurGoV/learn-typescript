class User {
  constructor(public id: number, public name: string) {}
}

function getData(id: number): User {
  return new User(id, 'Joe');
}

type RetTp = ReturnType< typeof getData >;
type RetTp2 = ReturnType< () => void>;
type RetTp3 = ReturnType<<T> () => T>;// unknown
type RetTp4 = ReturnType<<T extends string> () => T>;// string
type ParTp = Parameters<typeof getData>;
// type ParTp = Parameters<typeof getData>[0];

type ConstrPar = ConstructorParameters<typeof User>;
