import { useState, useEffect } from 'react';

const useForm = (formInputs, callback, validate) => {

  const [values, setValues] = useState(formInputs);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);                                                                                   

  const handleSubmit = async (event) => {
    if (event) event.preventDefault();
    let formData = new FormData();
    for (var key in values) {
      formData.append(key, values[key]);
    }
    formData.append("file", file)
    
    setIsSubmitting(true);
    
    const response = await fetch('http://localhost:5000/employee', {
      method: 'POST',
      body: formData,
    });
  };

  const handleChange = (event) => {
    event.persist();
    const {name, value} = event.target;
    setErrors({...validate(name, value)});
    setValues({...values, [name]: value});
  };

  const handleFileUpload = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  }

  return {
    handleChange,
    handleSubmit,
    handleFileUpload,
    values,
    errors
  }
};

export {useForm} ;