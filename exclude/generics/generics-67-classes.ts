class Resp<D, E>{
    data?: D
    error?: E

    constructor(data?: D, error?: E) {
        if (data) { this.data = data }
        if (error) { this.error = error }
    }
}

const res = new Resp<string, number>('ldldld')
res.error

// inheritance
// class HTTPResp extends Resp<D, E> {// 1. Cannot find name 'D'. 2. Cannot find name 'E'. 
class HTTPResp extends Resp<string, number> {// no error
    code: number

    setCode(code: number) {
        this.code = code
    }
}
const res2 = new HTTPResp()
res2.
