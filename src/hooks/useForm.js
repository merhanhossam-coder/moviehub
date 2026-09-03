import { useState } from 'react'
import axios from 'axios'

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  phone: '',
  message: '',
}

function validate(values) {
  const errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required'
  } else if (!/^[0-9+\s-]{7,15}$/.test(values.phone)) {
    errors.phone = 'Enter a valid phone number'
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required'
  }

  return errors
}

function useForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setSubmitSuccess(false)
    setSubmitError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitSuccess(false)
    setSubmitError(null)

    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', values)
      setSubmitSuccess(true)
      setValues(initialValues)
    } catch (error) {
      setSubmitError('Something went wrong while submitting the form. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    values,
    errors,
    isSubmitting,
    submitError,
    submitSuccess,
    handleChange,
    handleSubmit,
    resetForm,
  }
}

export default useForm
