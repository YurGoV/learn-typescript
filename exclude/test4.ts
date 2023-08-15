
interface IPayment4 {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus4 {
    Ssuccess = 'success',
    Sfailed = 'failed',
}

interface IPaymentRequest4 extends IPayment4 { }

interface IDataSuccess4 extends IPayment4 {
    databaseId: number;
}

interface IDataFailed4 {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess4 {
    status: PaymentStatus4.Ssuccess;
    data: IDataSuccess4;
}

interface IResponseFailed4 {
    status: PaymentStatus4.Sfailed;
    data: IDataFailed4;
}

type Res_test4 = IResponseSuccess4 | IResponseFailed4

function isResponseSuccessTest4tg(res: Res_test4): res is IResponseSuccess4 {
    return res.status === PaymentStatus4.Ssuccess
}

function getId_test4(res: Res_test4): number {
    if (isResponseSuccessTest4tg(res))
        { return res.data.databaseId } 
    else { throw new Error( res.data.errorMessage ) }
}
