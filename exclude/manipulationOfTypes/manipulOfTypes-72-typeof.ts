let strOrNum: string | number;

let strOrNumTwo: typeof strOrNum;

const user = {
  name: 'Joe',
  age: 15,
};

type keyOfUser = keyof user;
type keyOfUserCorrect = keyof typeof user;

enum Direction {
  Up,
  Down,
}

type d = keyof typeof Direction;
