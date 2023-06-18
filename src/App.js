import './App.css';
import { AVATAR_IMAGE_URL, EMPLOYEE_LABEL, EMP_CODE_REGEX, CONTACT_NUMBER_REGEX } from './include/constant'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [formStatus, setFormStatus] = useState({showAlert:false, type:false, message:""});

  const formData = {
    username: "",
    employee_code: "",
    email: "",
    contact_no: "",
    dob: "",
    joining_date: "",
    experience: "",
    status: "",
    gender: ""
  }

  const schema = Yup.object({
    username: Yup.string().required("Username is required"),
    employee_code: Yup.string().required("Employee code is required").matches(EMP_CODE_REGEX, "Employee code should have this format (P-1234)"),
    email: Yup.string().required("Email is required").email("Please enter valid email address"),
    contact_no: Yup.string().required("Contact no is required").matches(CONTACT_NUMBER_REGEX, "Please enter valid phone number-10 digit"),
    dob: Yup.date().required("Birthdate is required").test('dob', 'Should be greater than 18', function (value, ctx) {
      const valid = (new Date()).getFullYear() - (new Date(value)).getFullYear() >= 18;
      return !valid ? ctx.createError() : valid; 
    }),
    joining_date: Yup.date().required("Joining date is required").min(Yup.ref('dob'), "Joining date should greater then Brithdate"),
    experience: Yup.string().required("Experience is required"),
    status: Yup.string().required("Status is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    handleReset,
    touched,
    values, // use this if you want controlled components
    errors,
    isValid
  } = useFormik({
    initialValues: formData,
    validationSchema: schema,
    onSubmit: async (values, {resetForm}) => {
      console.log(values);
      await axios.post('http://localhost:5000/employee', values).then((response)=>{
        if (response.status === 200) {
          setFormStatus({showAlert:true, type: true, message: "Employee added Successfully"})
          resetForm()
        }
      }).catch((error) => {
        setFormStatus({showAlert:true, type:false, message: error.response.data.message});
      });
      setTimeout(function () {
        setFormStatus({showAlert:false, type:false, message:""});
      }, 5000);
    },
    onReset: (values, { resetForm }) => resetForm()
  });
  
  

  return (
    <div className="container page-wrapper">
      <div className="table-title">
        <div className="row">
          <div className="col-sm-5">
            <h2>{EMPLOYEE_LABEL} <b>Management</b></h2>
          </div>
          <div className="col-sm-7">
            <a href="#" className="btn btn-secondary"><i className="material-icons">&#xE147;</i> <span>Add New User</span></a>
            <a href="#" className="btn btn-secondary"><i className="material-icons">&#xE24D;</i> <span>Export to Excel</span></a>
          </div>
        </div>
      </div>
      {formStatus.showAlert ? (
        <div className={"alert fade show mt-1 " + (formStatus.type ? "alert-success" : "alert-danger")} role="alert">
          {formStatus.message}
        </div>
      ) : null}
        
      <div className='form-wrapper'>
        <h5 className="mb-3"> <b>ADD {EMPLOYEE_LABEL} </b></h5>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="username">Username</label>
              <div className="input-group">
                <input type="text" 
                className="form-control" 
                name="username" 
                id="username" 
                value={values.username}
                onChange={handleChange} 
                onBlur={handleBlur} />
              </div>
              {errors.username && touched.username ? ( <p className="error-msg">{errors.username}</p> ): null}
            </div>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="employee_code">Employee Code</label>
              <div className="input-group">
                <input type="text" 
                className="form-control" 
                name="employee_code" 
                id="employee_code" 
                onChange={handleChange}
                onBlur={handleBlur}  />
              </div>
              {errors.employee_code && touched.employee_code ? ( <p className="error-msg">{errors.employee_code}</p> ): null}
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="email">Email</label>
              <div className="input-group">
                <input type="text" 
                className="form-control"
                name="email" 
                id="email" 
                onChange={handleChange}  
                onBlur={handleBlur} />
              </div>
              {errors.email && touched.email ? ( <p className="error-msg">{errors.email}</p> ) : null}
            </div>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="contact_no">Contact No</label>
              <div className="input-group">
                <input type="text" 
                className="form-control" 
                name="contact_no" 
                id="contact_no" 
                onChange={handleChange}
                onBlur={handleBlur}  />
              </div>
              {errors.contact_no && touched.contact_no ? ( <p className="error-msg">{errors.contact_no}</p> ) : null}
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="dob">Date Of Birth</label>
              <div className="input-group">
                <input type="date" 
                className="form-control" 
                name="dob" 
                id="dob" 
                onChange={handleChange} 
                onBlur={handleBlur} />
              </div>
              {errors.dob && touched.dob ? ( <p className="error-msg">{errors.dob}</p> ): null}
            </div>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="profile">Profile Pic</label>
              <div className="input-group">
                <input type="file"
                className="form-control" 
                name="profile" 
                id="profile" 
                onChange={handleChange} 
                onBlur={handleBlur} />
              </div>
              {errors.profile && touched.profile ? ( <p className="error-msg">{errors.profile}</p> ) : null}
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="joining_date">Joining Date</label>
              <div className="input-group">
                <input type="date" 
                className="form-control" 
                name="joining_date" 
                id="joining_date" 
                onChange={handleChange}  
                onBlur={handleBlur} />
              </div>
              {errors.joining_date && touched.joining_date ? ( <p className="error-msg">{errors.joining_date}</p> ) : null}
            </div>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="experience">Experience</label>
              <div className="input-group">
                <select className="form-control form-select" name="experience" id='experience' onChange={handleChange}>
                  <option>Select Experience</option>
                  <option value="0_1">0 to 1 Year</option>
                  <option value="1_3">1 to 3 Year</option>
                  <option value="3_5">3 to 5 Year</option>
                  <option value="5_20">5+ Year</option>
                </select>
              </div>
              {errors.experience && touched.experience ? ( <p className="error-msg">{errors.experience}</p> ) : null}
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="status">Status</label>
              <div className="input-group">
                <select className="form-control form-select" name="status" id='status' onChange={handleChange}>
                  <option>Select Status</option>
                  <option value="active">Active</option>
                  <option value="in_active">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              {errors.status && touched.status ? ( <p className="error-msg">{errors.status}</p> ) : null}
            </div>
            <div className="col-md-6 mb-2">
              <label className="form-label" htmlFor="gender">Gender</label>
              <div className="input-group">
                <label className="form-label" htmlFor='male'>
                  <input type="radio" 
                  className="form-check-inline form-check-input" 
                  name="gender" 
                  value="male" 
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  />Male
                </label>
              </div>

              <div className="input-group">
                <label className="form-label" htmlFor='female'>
                  <input type="radio" 
                  className="form-check-inline form-check-input" 
                  name="gender"
                  value="female" 
                  onChange={handleChange} 
                  onBlur={handleBlur}
                  />Female
                </label>
              </div>
              {errors.gender && touched.gender ? ( <p className="error-msg">{errors.gender}</p> ) : null}
            </div>
          </div>

          <div className='button-wrapper'>
            <button type="type" className="btn btn-secondary btn-block me-2" onClick={handleReset}> Clear  </button>
            <button type="submit" disabled={!isValid || (Object.keys(touched).length === 0 && touched.constructor === Object)} className="btn btn-primary btn-block"> Create Account  </button>
          </div>
        </form>
      </div>

      <div className="table-wrapper">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Date Created</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><a href="#"><img src={`${AVATAR_IMAGE_URL}1.jpg`} className="avatar" alt="Avatar" /> Michael Holz</a></td>
              <td>04/10/2013</td>
              <td>Admin</td>
              <td><span className="status text-success">&bull;</span> Active</td>
              <td>
                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td><a href="#"><img src={`${AVATAR_IMAGE_URL}2.jpg`} className="avatar" alt="Avatar" /> Paula Wilson</a></td>
              <td>05/08/2014</td>
              <td>Publisher</td>
              <td><span className="status text-success">&bull;</span> Active</td>
              <td>
                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td><a href="#"><img src={`${AVATAR_IMAGE_URL}3.jpg`} className="avatar" alt="Avatar" /> Antonio Moreno</a></td>
              <td>11/05/2015</td>
              <td>Publisher</td>
              <td><span className="status text-danger">&bull;</span> Suspended</td>
              <td>
                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td><a href="#"><img src={`${AVATAR_IMAGE_URL}4.jpg`} className="avatar" alt="Avatar" /> Mary Saveley</a></td>
              <td>06/09/2016</td>
              <td>Reviewer</td>
              <td><span className="status text-success">&bull;</span> Active</td>
              <td>
                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td><a href="#"><img src={`${AVATAR_IMAGE_URL}5.jpg`} className="avatar" alt="Avatar" /> Martin Sommer</a></td>
              <td>12/08/2017</td>
              <td>Moderator</td>
              <td><span className="status text-warning">&bull;</span> Inactive</td>
              <td>
                <a href="#" className="settings" title="Settings" data-toggle="tooltip"><i className="material-icons">&#xE8B8;</i></a>
                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE5C9;</i></a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="clearfix">
          <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
          <ul className="pagination">
            <li className="page-item disabled"><a href="#">Previous</a></li>
            <li className="page-item"><a href="#" className="page-link">1</a></li>
            <li className="page-item"><a href="#" className="page-link">2</a></li>
            <li className="page-item active"><a href="#" className="page-link">3</a></li>
            <li className="page-item"><a href="#" className="page-link">4</a></li>
            <li className="page-item"><a href="#" className="page-link">5</a></li>
            <li className="page-item"><a href="#" className="page-link">Next</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
