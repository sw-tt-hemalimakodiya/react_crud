import { EMAIL_REGEX, EMP_CODE_REGEX, PASSWORD_REGEX } from "./constant";

const requiredFieldValidation = (fieldName, value) => {
    return value ? '' : `${fieldName} is required`;
}

const regExValidation = (value, regEx) => {
    return value.match(regEx);
}

const validate = (fieldName, value) => {
    let errors = {};
    
    switch (fieldName) {
        case 'email':
            
            if (!value) {
                errors.email = 'Email address is required';
            } else if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                console.log("invalid email=====");
                errors.email = 'Email address is invalid';
            }
            break;
        case 'password':
            if (!value) {
                errors.password = 'Password is required';
            } else if (value.length < 8) {
                errors.password = 'Password must be 8 or more characters';
            }
            break;
        default:
            break;
    }

    console.log("Inside validate function ===>", errors);

    return errors;
}


export {
    validate
}