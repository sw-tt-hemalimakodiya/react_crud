import { useState, useEffect } from 'react';
import { EMAIL_REGEX, EMP_CODE_REGEX, CONTACT_NUMBER_REGEX } from "../include/constant";



// const validate = (fieldName, value) => {

//   let checkIsValid = demo[fieldName];
//   if (checkIsValid.required && !value) {
//     errors[fieldName] = `${fieldName} is required`
//   } else if (checkIsValid.match && !value.match(checkIsValid.match[0])) {
//     errors[fieldName] = checkIsValid.match[1]
//   } else {
//     errors[fieldName] = ''
//   }

//   console.log("Inside validate function ===>", errors);

//   return errors;
// }

const useForm = (callback, validate) => {

  //const [values, setValues] = useState(formMetadata);
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
    const { name, value } = event.target;

    //setErrors({ ...validate(name, value) });
    //formMetadata[name].value = value;
    setValues({ formMetadata });
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

export { useForm };