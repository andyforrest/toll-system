import { FormWrapper } from "./FormWrapper";

type PaymentData = {
  name: string;
  cardNum: string;
  expiryDate: string;
  cvc: string;
};

type PaymentFormProps = PaymentData & {
    name: string;
    cardNum: string;
    expiryDate: string;
    cvc: string;
  updateFields: (fields: Partial<PaymentData>) => void;
};

export function PaymentForm({
  name,
  cardNum,
  expiryDate,
  cvc,
  updateFields,
}: PaymentFormProps) {
  return (
    <FormWrapper title="Payment Form">
      <label>Name</label>
      <input
        className="text-black"
        autoFocus
        required
        type="text"
        value={name}
        onChange={(e) => updateFields({ name: e.target.value })}
      />
      <label>Card Number</label>
      <input
        className="text-black"
        required
        type="number"
        value={cardNum}
        placeholder="XXXX-XXXX-XXXX-XXXX"
        maxLength={16}
        minLength={16}
        onChange={(e) => updateFields({ cardNum: e.target.value })}
      />
      <label>Expiry Date</label>
      <input
        className="text-black"
        required
        type="text"
        value={expiryDate}
        placeholder="mm / yy"
        maxLength={4}
        minLength={4}
        onChange={(e) => updateFields({ expiryDate: e.target.value })}
      />
      <label>CVC</label>
      <input
        className="text-black"
        required
        type="text"
        value={cvc}
        placeholder="000"
        maxLength={3}
        minLength={3}
        onChange={(e) => updateFields({ cvc: e.target.value })}
      />
    </FormWrapper>
  );
}