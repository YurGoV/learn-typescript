//NOTE: builded in generics
const num: Array<number> = [1, 2, 3];

async function test() {
  const a = await new Promise<number>((resolve, reject) => {
    resolve(1);
  });
}

// Record is builded in type, that tade geherics key/value
const check: Record<string, boolean> = {
  drive: true,
  kpp: true,
};

//NOTE: writing function with generic
function logMiddleware<T>(data: T): T {
  console.log(data);
  return (data);
}

const res = logMiddleware<number>(10);
const res2 = logMiddleware<string>(10);

// const getHalf<T>(data: T): T {
function getHalf<T>(data: Array<T>): Array<T> {
  const l = data.length / 2;
  return data.splice(0, l);
}

getHalf([1, 2, 3, 4]);
