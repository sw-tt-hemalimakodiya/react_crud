import './App.css';
import { AVATAR_IMAGE_URL, EMPLOYEE_LABEL } from './common/constant'

function App() {
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
        <form>
          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Username</label>
              <div className="input-group">
                <input type="text" className="form-control" id="name" required />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Employee Code</label>
              <div className="input-group">
                <input type="text" className="form-control" id="employee_code" required />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Email</label>
              <div className="input-group">
                <input type="email" className="form-control" id="email" required />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Contact No</label>
              <div className="input-group">
                <input type="text" className="form-control" id="contact_no" required />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Date Of Birth</label>
              <div className="input-group">
                <input type="date" className="form-control" id="dob" required />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Profile Pic</label>
              <div className="input-group">
                <input type="file" className="form-control" id="profile" required />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Joining Date</label>
              <div className="input-group">
                <input type="date" className="form-control" id="joining_date" required />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Experience</label>
              <div className="input-group">
                <input type="text" className="form-control" id="gender" required />
              </div>
            </div>
          </div>

          <div className='row'>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Status</label>
              <div className="input-group">
                <input type="text" className="form-control" id="status" required />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label" htmlFor="name">Gender</label>
              <div className="input-group">
                <input type="text" className="form-control" id="gender" required />
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
