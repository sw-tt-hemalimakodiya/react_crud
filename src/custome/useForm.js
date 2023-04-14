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

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    console.log("Inside handleSubmit ===>", values);
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    event.persist();
    const {name, value} = event.target
    setValues({ ...values, [name]: value });
    setErrors(validate(name, value));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
};

export {useForm} ;