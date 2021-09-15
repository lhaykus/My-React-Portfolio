/*import React, {useState} from 'react'

const useForm = (initialValues) => {

    const [values, setValues] = useState(initialValues);

    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }


    return {

        values,
        setValues,
        handleInputChange
    }
}



export default function Form(props) {
    return (
        <form>
            {props.children}
            
        </form>
    )
}


export default useForm;
*/