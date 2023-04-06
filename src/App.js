import './App.css';
import { AVATAR_IMAGE_URL } from './common/constant'

function App() {
  return (
    <div className="App bg-light">
      <div className="container">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-5">
                <h2>User <b>Management</b></h2>
              </div>
              <div className="col-sm-7">
                <a href="#" className="btn btn-secondary"><i className="material-icons">&#xE147;</i> <span>Add New User</span></a>
                <a href="#" className="btn btn-secondary"><i className="material-icons">&#xE24D;</i> <span>Export to Excel</span></a>
              </div>
            </div>
          </div>

          <form>
            <div className="form-control input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
              </div>
              <input name="" className="form-control" placeholder="Full name" type="text"/>
            </div>
            <div className="form-control input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
              </div>
              <input name="" className="form-control" placeholder="Email address" type="email"/>
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
              </div>
              <select className="custom-select" style={{maxWidth: 120}}>
                <option selected="">+971</option>
                <option value="1">+972</option>
                <option value="2">+198</option>
                <option value="3">+701</option>
              </select>
              <input name="" className="form-control" placeholder="Phone number" type="text"/>
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-building"></i> </span>
              </div>
              <select className="form-control">
                <option selected=""> Select job type</option>
                <option>Designer</option>
                <option>Manager</option>
                <option>Accaunting</option>
              </select>
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
              </div>
              <input className="form-control" placeholder="Create password" type="password"/>
            </div> 
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
              </div>
              <input className="form-control" placeholder="Repeat password" type="password"/>
            </div> 
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
            </div> 
            <p className="text-center">Have an account? <a href="">Log In</a> </p>
          </form>
          <hr />
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
    </div>
  );
}

export default App;
