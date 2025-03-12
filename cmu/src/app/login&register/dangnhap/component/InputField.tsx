import React from "react";
interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  name:string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField;
