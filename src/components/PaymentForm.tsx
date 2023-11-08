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
  const handleNumericInputChange = (
    fieldName: keyof PaymentData,
    value: string
  ) => {
    const numericValue = value.replace(/\D/g, ""); // Remove non-digit characters
    updateFields({ [fieldName]: numericValue });
  };

  return (
    <FormWrapper title="Payment Form">
      <label htmlFor="name">Name</label>
      <input
        className="text-black"
        autoFocus
        required
        type="text"
        value={name}
        id="name"
        onChange={(e) => updateFields({ name: e.target.value })}
      />

      <label htmlFor="cardNum">Card Number</label>
      <input
        className="text-black"
        required
        type="text"
        value={cardNum}
        placeholder="XXXX-XXXX-XXXX-XXXX"
        maxLength={16}
        minLength={16}
        id="cardNum"
        onChange={(e) => handleNumericInputChange("cardNum", e.target.value)}
      />

      <label htmlFor="expiryDate">Expiry Date</label>
      <input
        className="text-black"
        required
        type="text"
        value={expiryDate}
        placeholder="mm / yy"
        maxLength={4}
        minLength={4}
        id="expiryDate"
        onChange={(e) => handleNumericInputChange("expiryDate", e.target.value)}
      />

      <label htmlFor="cvc">CVC</label>
      <input
        className="text-black"
        required
        type="text"
        value={cvc}
        placeholder="000"
        maxLength={3}
        minLength={3}
        id="cvc"
        onChange={(e) => handleNumericInputChange("cvc", e.target.value)}
      />
    </FormWrapper>
  );
}
