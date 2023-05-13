import React, {useState} from 'react'
import { formDataType } from './Form'

interface props {
    formData: formDataType,
    setFormData: React.Dispatch<React.SetStateAction<formDataType>>
}

const SignupInfo = (props: props) => {
  return (
    <div className = "sign-up-container">
        <input type = "email" placeholder= 'Example@gmail.com' value = {props.formData.email} onChange={(e) => {props.setFormData(prev => ({...prev, email: e.target.value}))}}/>
        <input type = "password" placeholder= 'Set Password' value = {props.formData.password}  onChange={(e) => {props.setFormData(prev => ({...prev, password: e.target.value}))}}/>
        <input type = "password" placeholder= 'Confirm Password' value = {props.formData.confirmPassword} onChange={(e) => props.setFormData(prev => ({...prev, confirmPassword: e.target.value}))}/>
    </div>
  )
}

export default SignupInfo
