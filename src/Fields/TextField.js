import React from 'react'

function TextField({ input, label, type, meta: { touched, error } }) {
  return (
    <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} label={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
  )
}

export default TextField
