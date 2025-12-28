import type { ComponentPropsWithoutRef } from "react";

type BaseFormFieldProps = {
  label: string;
  id: string;
  name: string;
};

type InputFormFieldProps = BaseFormFieldProps &
  ComponentPropsWithoutRef<"input"> & {
    rows?: never;
  };

type TextareaFormFieldProps = BaseFormFieldProps &
  ComponentPropsWithoutRef<"textarea"> & {
    rows: number;
  };

type FormFieldProps = InputFormFieldProps | TextareaFormFieldProps;

export function FormField({
  label,
  id,
  name,
  rows,
  className,
  ...inputProps
}: FormFieldProps) {
  const inputClassName =
    "block w-full rounded-md bg-input px-3.5 py-2 text-base text-foreground outline-1 -outline-offset-1 outline-border placeholder:text-muted-foreground focus:outline-2 focus:-outline-offset-2 focus:outline-ring dark:bg-input dark:text-foreground dark:outline-border dark:placeholder:text-muted-foreground dark:focus:outline-ring";

  return (
    <div className="sm:col-span-2">
      <label
        htmlFor={id}
        className="block text-sm/6 font-semibold text-foreground"
      >
        {label}
      </label>
      <div className="mt-2.5">
        {rows ? (
          <textarea
            id={id}
            name={name}
            rows={rows}
            className={`${inputClassName} ${className || ""}`}
            defaultValue={""}
            {...(inputProps as ComponentPropsWithoutRef<"textarea">)}
          />
        ) : (
          <input
            id={id}
            name={name}
            className={`${inputClassName} ${className || ""}`}
            {...(inputProps as ComponentPropsWithoutRef<"input">)}
          />
        )}
      </div>
    </div>
  );
}
