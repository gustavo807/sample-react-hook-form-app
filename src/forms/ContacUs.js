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
                .min(20),
    address: yup
                .string()
})

function ContactUs(){
    const {handleSubmit, register, errors, watch} = useForm({ validationSchema: contactUsSchema})
    const watchAddInfo = watch("addInfo", false)
    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset() // standard reset after form submit
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>email</label>
            <input name="email" ref={register} />
            <label>message</label>
            <input name="message" type="textarea" ref={register} />

            <label>Additional Information?</label>
            <input name="addInfo" type="checkbox" ref={register} />
            { watchAddInfo && (<input name="address" ref={register} />)}

            <div style={{ color: 'red' }}>
                <pre>{Object.keys(errors).length > 0 && <label>Errors: {JSON.stringify(errors, null, 2)}</label>}</pre>

            </div>
            <button>Submit</button>
        </form>
    )
}

export default ContactUs