let constant = {}

constant.PUBLIC_URL = `${process.env.PUBLIC_URL}`;
constant.AVATAR_IMAGE_URL = `${constant.PUBLIC_URL}/images/avatar/`;
constant.EMPLOYEE_LABEL = 'EMPLOYEE'

//RegEx
//constant.EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
constant.PASSWORD_REGEX = '';
constant.EMP_CODE_REGEX = '';

module.exports = constant