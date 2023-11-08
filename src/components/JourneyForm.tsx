import { useState,  useEffect } from "react";
import { FormWrapper } from "./FormWrapper";

type JourneyData = {
  selectedValue: string;
  tripNum: string;
};

type JourneyFormProps = {
  selectedValue: string;
  tripNum: string;
  updateFields: (fields: Partial<JourneyData>) => void;
};

export function JourneyForm({ selectedValue,tripNum, updateFields }: JourneyFormProps) {
  // const [selectedValue, setSelectedValue] = useState("");
  const [totalValue, setTotalValue] = useState<string | number | undefined>(0);

  // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedValue(event.target.value);
  //   updateFields({selectedValue})
  // };

  useEffect(() => {
    // This effect will be triggered whenever selectedValue or tripNum changes
     const calculateTotal = () => {
       let result;
       try {
         const str = selectedValue;
         if (str.trim() === "") {
           console.log("selectedValue is empty");
           result = 0;
         } else {
           const variableObject = JSON.parse(str);
           let numberOfJourneys = parseInt(tripNum, 10);

           if (isNaN(numberOfJourneys)) {
             numberOfJourneys = 0; // Default to 0 if numberOfJourneys is NaN
           }

           const multipliedObject: Record<string, number> = {};
           for (const key in variableObject) {
             if (Object.prototype.hasOwnProperty.call(variableObject, key)) {
               multipliedObject[key] = variableObject[key] * numberOfJourneys;
             }
           }

           const formattedData = Object.entries(multipliedObject)
             .filter(([currency, amount]) => amount > 0 && currency)
             .map(([currency, amount]) => `${amount} ${currency}`)
             .join(" ");

           console.log(formattedData);

           console.log(multipliedObject);
           result = formattedData;
         }
       } catch (error) {
         console.error("Invalid JSON data:", error);
         result = 0;
       }

       setTotalValue(result);
     };

    calculateTotal();
  }, [selectedValue, tripNum,]);




   return (
    <FormWrapper title="Select Journey Details">
      <label htmlFor="select">Select Journey</label>
      <select
        value={selectedValue}
        onChange={(e) => updateFields({ selectedValue: e.target.value })}
        name="options"
        className="bg-gray-50 border border-gray-300 text-black"
        required
        id="select" // Assign an ID to the select element
      >
        <option value="" disabled> Choose an option </option>
        <option value='{"Denarius": 0, "Sestertius": 0, "Dupondius": 0, "As": 1}'>
          Single person, light load
        </option>
        <option value='{"Denarius": 0, "Sestertius": 0, "Dupondius": 0, "As": 2}'>
          Single person, heavy load
        </option>
        <option value='{"Denarius": 0, "Sestertius": 0, "Dupondius": 1, "As": 1}'>
          Single person, hand-drawn cart
        </option>
        <option value='{"Denarius": 0, "Sestertius": 0, "Dupondius": 2, "As": 0}'>
          1 horse + rider
        </option>
        <option value='{"Denarius": 0, "Sestertius": 0, "Dupondius": 3, "As": 0}'>
          Horse-drawn cart, 1 horse
        </option>
        <option value='{"Denarius": 0, "Sestertius": 0, "Dupondius": 4, "As": 0}'>
          Horse-drawn cart, 2–3 horses
        </option>
        <option value='{"Denarius": 1, "Sestertius": 0, "Dupondius": 0, "As": 0}'>
          Horse-drawn cart, 4–5 horses
        </option>
        <option value='{"Denarius": 1, "Sestertius": 2, "Dupondius": 0, "As": 0}'>
          Horse-drawn cart, 6 horses
        </option>
      </select>
      <label htmlFor="tripNum">Number of Trips</label>
      <input
        required
        min={1}
        type="number"
        value={tripNum}
        onChange={(e) => updateFields({ tripNum: e.target.value })}
        className="text-black"
        id="tripNum"
      />
      <label htmlFor="total">Total</label>
      <input
        type="text"
        value={totalValue}
        className="text-black"
        disabled
        id="total"
      />
    </FormWrapper>
  );
}
