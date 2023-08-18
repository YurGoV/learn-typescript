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

//NOTE: new code

const split: <T>(data: Array<T>) => Array<T> = getHalf;


interface ILogLine<T> {
  timeStamp: Date,
  data: T
}
//OR
type ILogLineType<T> = {
  timeStamp: Date,
  data: T
};

const logLine: ILogLine<{ a: number }> = {
// const logLine: ILogLineType<{ a: number }> = {
  timeStamp: new Date(),
  data: {
    a: 2,
  },
};
