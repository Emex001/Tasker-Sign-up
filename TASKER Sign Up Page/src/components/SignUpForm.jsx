import React from 'react'
import FormInput from './FormInput'
import GoogleSignUpButton from './GoogleSignUpButton'
import '../styles/SignUpForm.css'

const SignUpForm = ({ 
  formData, 
  errors, 
  isLoading, 
  onInputChange, 
  onSubmit, 
  onGoogleSignUp 
}) => {
  return (
    <form className="signup-form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <FormInput
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={onInputChange}
          error={errors.firstName}
          placeholder="Enter your first name"
          required
        />
        
        <FormInput
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={onInputChange}
          error={errors.lastName}
          placeholder="Enter your last name"
          required
        />
      </div>
      
      <FormInput
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={onInputChange}
        error={errors.email}
        placeholder="Enter your email address"
        required
      />
      
      <FormInput
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={onInputChange}
        error={errors.password}
        placeholder="Create a strong password"
        required
      />
      
      <div className="form-actions">
        <button 
          type="submit" 
          className="submit-btn"
          disabled={isLoading}
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </button>
        
        <div className="divider">
          <span className="divider-text">or</span>
        </div>
        
        <GoogleSignUpButton 
          onClick={onGoogleSignUp}
          isLoading={isLoading}
        />
      </div>
      
      <div className="terms-section">
        <p className="terms-text">
          By creating an account, you agree to our 
          <a href="/terms" className="terms-link">Terms of Service</a> and 
          <a href="/privacy" className="terms-link">Privacy Policy</a>
        </p>
      </div>
    </form>
  )
}

export default SignUpForm
