import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="text-center text-4xl m-0 mb-8">{title}</h2>
      <div className="flex justify-center items-center">
        <div className="grid gap-x-4 gap-y-2 justify-start grid-cols-[auto_minmax(auto,400px)] text-2xl">
          {children}
        </div>
      </div>
    </>
  );
}
