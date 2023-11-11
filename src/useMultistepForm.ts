import { ReactElement, useState } from "react";

export function useMultistepFrom(steps: ReactElement[]) {
  const [currentStepIndex, setCurrectStepIndex] = useState(0);

  function next() {
    setCurrectStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrectStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(i: number) {
    setCurrectStepIndex(i);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    next,
    back,
    goTo
  };
}
