import { TextInputCompTypes } from "../types";

export default function TextInput({
  string,
  inputType,
  placeholder,
  error,
  onUpdate,
}: TextInputCompTypes) {
  return (
    <>
      <input
        type={inputType}
        placeholder={placeholder}
        className="block w-full bg-[#F1F1F2] text-gray-800 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none"
        value={string || ""}
        onChange={(e) => onUpdate(e.target.value)}
        autoComplete="off"
      />

      <div className="text-red-500 text-[14px] font-semibold">
        {error ? error : ""}
      </div>
    </>
  );
}
