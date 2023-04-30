import { async } from 'q';
import { useState, useEffect } from 'react';

const useForm = (formData, callback, validate) => {

  const [values, setValues] = useState(formData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);                                                                                   

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    console.log("Inside handleSubmit ===>", values);
    //setErrors(validate(values));
    setIsSubmitting(true);
    
    const response = await fetch('http://localhost:5000/employee', {
      method: 'POST',
      headers: {
        'Content-Type': "application/x-www-form-urlencoded"
      },
      body: values,
    });

    // const response = await fetch('http://localhost:5000/demo', {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    // });
    console.log("After response ===>", response);
  };

  const demoHandleSubmit = async (event) => {
    if (event) event.preventDefault();
    console.log("Inside demoHandleSubmit");
    const response2 = await fetch('http://localhost:5000/demo', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log("After response2 ===>", response2);
  }

  const handleChange = (event) => {
    event.persist();
    const {name, value} = event.target
    console.log("Inside handleChange =====> ", name);
    setValues({ ...values, [name]: value });
    setErrors(validate(name, value));
  };

  return {
    handleChange,
    handleSubmit,
    demoHandleSubmit,
    values,
    errors,
  }
};

export {useForm} ;