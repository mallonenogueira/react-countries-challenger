import React from "react";

import "./style.scss";

export default function InputSearch({
  placeholder,
  className,
  value,
  onChange,
}: {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className={`input-search ${className || ""}`}>
      <i className="fas fa-search input-search__icon"></i>
      <input
        placeholder={placeholder}
        className="input-search__element"
        onChange={onChange}
        value={value}
      />
    </label>
  );
}
