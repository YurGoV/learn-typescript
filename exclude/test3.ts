// with union & inherit
enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IPayment {
    sum: number,
    from: number,
    to: number
}

interface IPaymentRequest extends IPayment {
}

interface IDataSuccess extends IPayment {
    databaseId: number,
}
interface IDataFailed {
    errorMessage: string,
    errorCode: number
}

interface IResponseSuccess {
    status: PaymentStatus.Success,
    data: IDataSuccess
}
interface IResponceFailed {
    status: PaymentStatus.Failed,
    data: IDataFailed
}

function get (req: IPaymentRequest) : IResponseSuccess | IResponceFailed {

}
