type Props = {
  label: string;
  id: string;
  placeholder: string;
};

export function InputField({ label, id, placeholder }: Props) {
  return (
    <div className="flex flex-col mb-8">
      <label htmlFor={id} className="text-xs text-[#666173]">
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        className="placeholder:text-[#C9C5D4] text-[#666173] text-base py-2 border-b-[1px] border-[#F4F3F6] w-full focus:border-gray-300 outline-none"
      />
    </div>
  );
}
