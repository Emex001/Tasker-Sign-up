import React, { useState } from 'react'
import '../styles/FormInput.css'

const FormInput = ({ 
  label, 
  type, 
  name, 
  value, 
  onChange, 
  error, 
  placeholder, 
  required 
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const inputType = type === 'password' && showPassword ? 'text' : type

  return (
    <div className="form-input-container">
      <label className="form-label" htmlFor={name}>
        {label}
        {required && <span className="required-asterisk">*</span>}
      </label>
      
      <div className={`input-wrapper ${error ? 'error' : ''} ${isFocused ? 'focused' : ''}`}>
        <input
          id={name}
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="form-input"
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        
        {type === 'password' && (
          <button
            type="button"
            className="password-toggle"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
      </div>
      
      {error && (
        <span id={`${name}-error`} className="error-message" role="alert">
          {error}
        </span>
      )}
    </div>
  )
}

export default FormInput
