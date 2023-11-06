import { FormEvent, useState } from "react";
import { PaymentForm } from "./components/PaymentForm";
import { UserForm } from "./components/Journey";
import { useMultistepFrom } from "./useMultistepForm";
import "./index.css";

type FormData = {
  selectedValue: string;
  tripNum: string;
  name: string;
  cardNum: string;
  expiryDate: string;
  cvc: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  selectedValue: "",
  tripNum: "",
  name: "",
  cardNum: "",
  expiryDate: "",
  cvc: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepFrom([
      <UserForm {...data} updateFields={updateFields} />,
      <PaymentForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful account creation!");
  }
  return (
    <div className="max-w-4xl m-auto mt-8 overflow-auto  rounded-md text-white">
      <form
        onSubmit={onSubmit}
        className="bg-slate-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 "
      >
        <div className="mb-4">
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div>
          {!isFirstStep && (
            <button
              type="button"
              onClick={back}
              className="bg-pink-500 hover:bg-blue-700  font-bold py-2 px-4 rounded"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="bg-pink-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
          >
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
