import React from 'react'
import useForm from 'react-hook-form'
import * as yup from "yup"

const contactUsSchema = yup.object().shape({
    email: yup
            .string()
            .required()
            .email(),
    message: yup
                .string()
                .min(20)
})

function ContactUs(){
    const {handleSubmit, register, errors} = useForm({ validationSchema: contactUsSchema})
    const onSubmit = (data) => {
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>email</label>
            <input name="email" ref={register} />
            <label>message</label>
            <input name="message" type="textarea" ref={register} />
            <div style={{ color: 'red' }}>
                <pre>{Object.keys(errors).length > 0 && <label>Errors: {JSON.stringify(errors, null, 2)}</label>}</pre>

            </div>
            <button>Submit</button>
        </form>
    )
}

export default ContactUs