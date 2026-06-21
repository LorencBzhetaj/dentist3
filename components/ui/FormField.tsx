import { cn } from "@/lib/utils";
import { forwardRef, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseProps {
  label: string;
  error?: string;
  className?: string;
  id: string;
}

type InputProps = BaseProps & Omit<InputHTMLAttributes<HTMLInputElement>, "id"> & { as?: "input" };
type SelectProps = BaseProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> & { as: "select"; children: React.ReactNode };
type TextareaProps = BaseProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> & { as: "textarea" };

type FormFieldProps = InputProps | SelectProps | TextareaProps;

const inputClass = "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0d1b2a] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition-shadow bg-white";

export const FormField = forwardRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, FormFieldProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1.5", className)}>
        <label htmlFor={id} className="text-sm font-medium text-[#0d1b2a]">
          {label}
        </label>
        {props.as === "select" ? (
          <select
            id={id}
            ref={ref as React.Ref<HTMLSelectElement>}
            className={cn(inputClass, error && "border-red-400 focus:ring-red-400")}
            {...(props as Omit<SelectHTMLAttributes<HTMLSelectElement>, "id">)}
          >
            {(props as SelectProps).children}
          </select>
        ) : props.as === "textarea" ? (
          <textarea
            id={id}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={4}
            className={cn(inputClass, "resize-none", error && "border-red-400 focus:ring-red-400")}
            {...(props as Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id">)}
          />
        ) : (
          <input
            id={id}
            ref={ref as React.Ref<HTMLInputElement>}
            className={cn(inputClass, error && "border-red-400 focus:ring-red-400")}
            {...(props as Omit<InputHTMLAttributes<HTMLInputElement>, "id">)}
          />
        )}
        {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
      </div>
    );
  }
);
FormField.displayName = "FormField";
