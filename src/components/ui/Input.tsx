interface InputProps {
  title?: string;
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputProps> = ({
  title,
  name,
  placeholder,
  value,
  type,
  disabled,
  onChange,
  className
}) => {
  return (
    <div className="">
      {title && (
        <label
          className="block font-sansRegular text-[16px] text-[#201950]  mb-2"
          htmlFor={name}
        >
          {title}
        </label>
      )}{' '}
      <input
        id={name}
        disabled={disabled}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className={`${className} rounded-md min-w-[20rem] max-h-[3rem] w-full py-3 text-black placeholder:text-[#647995] placeholder:text-[16px] border-[1px] md:border-[#D4D4D4]  border-gray-500 bg-slate-200 md:bg-white leading-tight focus:outline-none px-2 focus:shadow-outline
      `}
      />
    </div>
  );
};

export default Input;