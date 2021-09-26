import React, { useState } from 'react'

const useForm = (initialInputFields) => {
  const [form, setForm] = useState(initialInputFields)

  const handleInputChange = (input) => {
    setForm({ ...form, [input.target.name]: input.target.value })
  }

  return { form, setForm, handleInputChange }
}

export default useForm
