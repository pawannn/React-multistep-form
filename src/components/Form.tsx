import { useState } from "react"
import SignupInfo from "./SignupInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
// import * as yup from 'yup';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from "@hookform/resolvers/yup"

export interface formDataType {
    email: string,
    password: string,
    confirmPassword: string,
    firstName: string,
    lastName: string, 
    age: string,
    country: string,
    nationality: string,
}

const Form = () => {

    // const schema = yup.object().shape({
    //     email: yup.string().email('Invalid email').required('Email is required'),
    //     password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
    //     confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
    //     firstName: yup.string().required('First Name is required'),
    //     lastName: yup.string().required('Last Name is required'),
    //     age: yup.string().required('Age is required'),
    //     country: yup.string().required('Country is required'),
    //     nationality: yup.string().required('Nationality is required'),

    // })

    // const {register ,handleSubmit} = useForm({
    //     resolver: yupResolver(schema)
    // })

    const [formData, setFormData] = useState<formDataType>({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        age: "",
        country: "",
        nationality: "",
    });

    const [page, setPage] = useState<number>(0);
    const pageTitle: string[] = ['Sign up', 'Personal Info', 'Other Info'];

    const displayPage = () => {
        if(page === 0){
            return <SignupInfo formData={formData} setFormData={setFormData} />
        } else if(page === 1){
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        } else if(page === 2){
            return <OtherInfo formData={formData} setFormData={setFormData} />
        } else {
            return <h2>WRONG PAGE</h2>
        }
    }

    const onSubmit = () => {
        alert("Data Saved, Look at console")
        console.log(formData);
        //validation
        //upload to server or Do something
    }

    return(
        <div className="form">
            <div className="progressbar">
                <div style = {{width : page == 0 ? "33.3%" : page == 1 ? "66.6%" : "100%"}}></div>
            </div>
            <div className = "form-container">
                <div className="header">
                    <h1>{ pageTitle[page] }</h1>
                </div>
                <div className="body">
                    {displayPage()}
                </div>
                <div className="footer">
                    <button disabled = {page === 0} onClick={() => {setPage(prev => prev - 1)}}>Prev</button>
                    <button onClick={() => {
                        {page === pageTitle.length - 1 ?  onSubmit() : setPage(prev => prev + 1)}
                    }}>{page === pageTitle.length - 1 ? "Submit" : "Next"}</button>
                </div>
            </div>
        </div>
    )
}

export default Form