interface User {
  name: string
  age?: number
  email: string
}

type Part = Partial<User>;
const p: Part = {};//carefull

type Req = Required<User>;
type RedOnl = Readonly<User>;
type ReqAndRedOnl = Required<Readonly<User>>;
