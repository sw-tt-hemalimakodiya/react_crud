import { EMAIL_REGEX, EMP_CODE_REGEX, CONTACT_NUMBER_REGEX } from "./constant";
const demo = {
    username: {required: true},
    employee_code: {required: true, match: [EMP_CODE_REGEX, "Employee code should have this format (P-1234)"]},
    email: {required: true, match: [EMAIL_REGEX, "Please enter valid email"]},
    contact_no: {required: true, match: [CONTACT_NUMBER_REGEX, "Contact number should have minimum 10 digit"]},
    dob: {required: true},
    profile: {required: true},
    joining_date: {required: true},
    experience: {required: true},
    status: {required: true},
    gender: {required: true}
}
let errors = {};

const validate = (fieldName, value) => {
    
    let checkIsValid = demo[fieldName];
    if (checkIsValid.required && !value) {
        errors[fieldName] = `${fieldName} is required`
    } else if(checkIsValid.match && !value.match(checkIsValid.match[0])) {
        errors[fieldName] = checkIsValid.match[1]
    } else {
        errors[fieldName] = ''
    }

    console.log("Inside validate function ===>", errors);

    return errors;
}


export {
    validate
}