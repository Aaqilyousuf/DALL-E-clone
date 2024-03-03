import React from "react";

const FormField = ({
  labelName,
  name,
  prompt,
  type,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm text-gray-900 font-medium"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs rounded-[5px] py-1 px-2 text-black bg-[#ECECF1]"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] foucs:border-[#4649ff] outline-none block w-full p-3"
      />
    </div>
  );
};

export default FormField;
