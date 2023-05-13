import React from 'react'
import { formDataType } from './Form'

interface props {
  formData: formDataType,
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>
}

const PersonalInfo = (props: props) =>  {
  return (
    <div className='personal-info-container'>
        <input type = "text" placeholder='First Name...' value = {props.formData.firstName} onChange={(e) => props.setFormData(prev => ({...prev, firstName: e.target.value}))}/>
        <input type='text' placeholder='Last Name...' value = {props.formData.lastName} onChange={(e) => props.setFormData(prev => ({...prev, lastName: e.target.value}))}/>
        <input type = "number" placeholder='Age' value = {props.formData.age} onChange={(e) => props.setFormData(prev => ({...prev, age: e.target.value }))}/>
    </div>
  )
}

export default PersonalInfo