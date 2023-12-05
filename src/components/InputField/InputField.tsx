import InputMask from "react-input-mask";
import { ErrorMessage } from "../ErrorMessage";

type Props = {
  label: string;
  id: string;
  placeholder: string;
  mask: string;
  error: any;
  inputmode?:
    | "numeric"
    | "search"
    | "text"
    | "email"
    | "tel"
    | "url"
    | "none"
    | "decimal"
    | undefined;
};

export function InputField({
  label,
  id,
  placeholder,
  mask,
  error,
  inputmode = "numeric",
}: Props) {
  return (
    <div className="flex flex-col mb-8">
      <label htmlFor={id} className="text-xs text-[#666173]">
        {label}
      </label>
      <InputMask
        type="text"
        id={id}
        name={id}
        placeholder={placeholder}
        mask={mask}
        inputMode={inputmode}
        maskPlaceholder=" "
        className="placeholder:text-[#C9C5D4] text-[#666173] text-base py-2 border-b-[1px] border-[#F4F3F6] w-full focus:border-gray-300 outline-none"
      />
      {error((e: any) => (
        <ErrorMessage message={e.message} />
      ))}
    </div>
  );
}
