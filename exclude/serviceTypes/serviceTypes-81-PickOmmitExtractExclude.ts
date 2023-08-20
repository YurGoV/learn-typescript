interface PaymentPersisted {
  id: number
  sum: number
  from: string
  to: string
}

type Payment = Omit<PaymentPersisted, 'id'>;
type PaymentRequisits = Pick<PaymentPersisted, 'from' | 'to'>;

type ExtractEx = Extract<'from' | 'to' | Payment, string>;
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>;
