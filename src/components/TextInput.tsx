import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  label?: string;
  disabled?: boolean;
  type: string;
  error?: string;
  icon?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  disabled = false,
  type,
  error,
  icon,
}) => {
  return (
    <div className="input-container">
      {label && <label>{label}</label>}
      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default TextInput;
