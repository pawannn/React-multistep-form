import React from 'react'
import { formDataType } from './Form'

interface props {
  formData: formDataType,
  setFormData: React.Dispatch<React.SetStateAction<formDataType>>
}

const OtherInfo = (props: props) =>  {
  return (
    <div className='other-info-container'>
        <input type = "text" placeholder='Country' value={props.formData.country} onChange={(e) => {props.setFormData(prev => ({...prev, country: e.target.value}))}} />
        <input type = "text" placeholder='Nationality' value = {props.formData.nationality} onChange={(e) => {props.setFormData(prev => ({...prev, nationality: e.target.value}))}}/>
    </div>
  )
}

export default OtherInfo
