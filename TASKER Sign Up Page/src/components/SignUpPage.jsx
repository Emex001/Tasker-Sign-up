import React, { useState } from 'react'
import Header from './Header'
import SignUpForm from './SignUpForm'
import '../styles/SignUpPage.css'

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Sign up data:', formData)
      alert('Account created successfully!')
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      })
    } catch (error) {
      console.error('Sign up error:', error)
      alert('Failed to create account. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = () => {
    setIsLoading(true)
    
    try {
      // Simulate Google OAuth
      setTimeout(() => {
        console.log('Google sign up initiated')
        alert('Google sign up would be handled here')
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Google sign up error:', error)
      alert('Failed to sign up with Google. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="signup-page">
      <Header />
      <main className="signup-main">
        <section className="signup-container">
          <div className="signup-content">
            <header className="signup-header">
              <h1 className="signup-title">Create Your Account</h1>
              <p className="signup-subtitle">Join TASKER and start managing your projects efficiently</p>
            </header>
            
            <SignUpForm
              formData={formData}
              errors={errors}
              isLoading={isLoading}
              onInputChange={handleInputChange}
              onSubmit={handleSubmit}
              onGoogleSignUp={handleGoogleSignUp}
            />
            
            <footer className="signup-footer">
              <p className="login-link">
                Already have an account? 
                <a href="/login" className="login-link-text">Sign in</a>
              </p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}

export default SignUpPage
