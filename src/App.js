import './App.css';
import { AVATAR_IMAGE_URL, EMPLOYEE_LABEL } from './common/constant'
import { useState } from 'react';

function App() {

  const formData = {
    username: "",
    employee_code: "",
    email: "",
    contact_no: "",
    dob: "",
    profile: "",
    joining_date: "",
    experience: "",
    status: "",
    gender: ""
  }

  const [responseBody, setResponseBody] = useState(formData)
  const inputChangeHandler = (event) => {
    const { name, value } = event.target
    setResponseBody({ ...responseBody, [name]: value }, () => { validateField(name, value) })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(responseBody)
  }

  const validateField = (fieldName, value) => {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      default:
        break;
    }
  }

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
      <div className='form-wrapper'>
        <h5 className="mb-3"> <b>ADD {EMPLOYEE_LABEL} </b></h5>
        <form onSubmit={onSubmitHandler}>
          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="username">Username</label>
              <div className="input-group">
                <input type="text" className="form-control" name="username" id="username" onChange={(e) => inputChangeHandler(e)} required />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="employee_code">Employee Code</label>
              <div className="input-group">
                <input type="text" className="form-control" name="employee_code" id="employee_code" onChange={(e) => inputChangeHandler(e)} required />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="email">Email</label>
              <div className="input-group">
                <input type="email" className="form-control" name="email" id="email" onChange={(e) => inputChangeHandler(e)} required />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="contact_no">Contact No</label>
              <div className="input-group">
                <input type="text" className="form-control" name="contact_no" id="contact_no" onChange={(e) => inputChangeHandler(e)} required />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="dob">Date Of Birth</label>
              <div className="input-group">
                <input type="date" className="form-control" name="dob" id="dob" onChange={(e) => inputChangeHandler(e)} required />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="profile">Profile Pic</label>
              <div className="input-group">
                <input type="file" className="form-control" name="profile" id="profile" onChange={(e) => inputChangeHandler(e)} required />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="joining_date">Joining Date</label>
              <div className="input-group">
                <input type="date" className="form-control" name="joining_date" id="joining_date" onChange={(e) => inputChangeHandler(e)} required />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="experience">Experience</label>
              <div className="input-group">
                <select className="form-control form-select" name="experience" id='experience' onSelect={(e) => inputChangeHandler(e)}>
                  <option selected="">Select Experience</option>
                  <option value="0_1">0 to 1 Year</option>
                  <option value="1_3">1 to 3 Year</option>
                  <option value="3_5">3 to 5 Year</option>
                  <option value="5_20">5+ Year</option>
                </select>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="status">Status</label>
              <div className="input-group">
                <select className="form-control form-select" name="status" id='status' onSelect={(e) => inputChangeHandler(e)}>
                  <option selected="">Select Status</option>
                  <option value="active">Active</option>
                  <option value="in_active">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="gender">Gender</label>
              <div className="input-group">
                <label className="form-label" htmlFor='male'>
                  <input type="radio" className="form-check-inline form-check-input" name="gender" value="male" onChange={(e) => inputChangeHandler(e)} />Male
                </label>
              </div>

              <div className="input-group">
                <label className="form-label" htmlFor='female'>
                  <input type="radio" className="form-check-inline form-check-input" name="gender" value="female" onChange={(e) => inputChangeHandler(e)} />Female
                </label>
              </div>
            </div>
          </div>

          <div className='button-wrapper'>
            <button type="type" className="btn btn-secondary btn-block me-2"> Cancle  </button>
            <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
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
