let constant = {}

constant.PUBLIC_URL = `${process.env.PUBLIC_URL}`;
constant.AVATAR_IMAGE_URL = `${constant.PUBLIC_URL}/images/avatar/`;
constant.EMPLOYEE_LABEL = 'EMPLOYEE'

//RegEx
constant.EMAIL_REGEX = "^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$";
constant.EMP_CODE_REGEX = "^[A-Z]{1,1}-[0-9]{4,4}$"
constant.CONTACT_NUMBER_REGEX = "^[0-9]{10,10}$"

module.exports = constant