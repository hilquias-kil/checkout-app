type Option = {
  label: string;
  value: string;
};

type Props = {
  label: string;
  id: string;
  placeholder: string;
  options: Option[];
};

export function SelectField({ label, id, placeholder, options }: Props) {
  return (
    <div className="flex flex-col mb-8">
      <label htmlFor={id} className="text-xs text-[#666173]">
        {label}
      </label>
      <select
        id={id}
        name={id}
        defaultValue=""
        className="placeholder:text-[#C9C5D4] bg-white text-[#666173] text-base py-2 border-b-[1px] border-[#F4F3F6] w-full focus:border-gray-300 outline-none"
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
