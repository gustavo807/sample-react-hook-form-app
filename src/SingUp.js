import React, {useEffect} from 'react'
import useForm from 'react-hook-form'

const Input = ({ label, register, options}) => (
    <>
        <label>{label}</label>
        <input name={label} ref={register(options)}/>
    </>
)

function SingUp(){
    const {register, handleSubmit, errors} = useForm()
    const onSubmit = (values) => {
        console.log(values)
    }

    useEffect(()=>{
        console.log('useEffect')
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="firstname" register={register} options={{required: true, minLength: 3}} />
            { errors.firstname && errors.firstname.type === "required" && (<p>This is required</p>)}
            { errors.firstname && errors.firstname.type === "minLength" && (<p>This field required min length of 3</p>)}

            <Input label="lastname" register={register} options={{required: true, minLength: 3}} />
            { errors.lastname && (<p>This is required</p>) }

            <select name="gender" ref={register({required: true})}>
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            { errors.gender && (<p>This is required</p>)}

            <Input label="city" register={register} options={ {required: true, minLength: 3} } />
            { errors.city && errors.city.type === "required" && (<p>This is required</p>)}
            { errors.city && errors.city.type === "minLength" && (<p>This field required min length of 3</p>)}


            <button type="submit">Submit</button>
        </form>
    )
}

export default SingUp