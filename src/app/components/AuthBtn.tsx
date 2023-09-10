import { FaUser } from 'react-icons/fa'
import { NavLink, useHistory } from 'react-router-dom'

const authBtn = () => {
  const authUser = () => {
    const data = localStorage.getItem('User')
    if (data) return true
    else return false
  }

  const authAdmin = () => {
    const data = localStorage.getItem('Admin')
    if (data) return true
    else return false
  }

  const User = JSON.parse(localStorage.getItem('User'))
  const Admin = JSON.parse(localStorage.getItem('Admin'))

  const logOutUser = () => {
    localStorage.removeItem('User')
    history.push('/')
    window.location.reload()
  }
  const history = useHistory()
  const logOutAdmin = () => {
    localStorage.removeItem('Admin')
    history.push('/')
    window.location.reload()
  }

  const auth = () => {
    if (authUser()) {
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {User.userName}
          </button>
          <ul className="dropdown-menu">
            <li style={{ color: 'black' }} onClick={logOutUser}>Log Out</li>
          </ul>
        </div>
      )
    } else if (authAdmin()) {
      return (
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {Admin.userName}
          </button>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to='/hesabim'>
                Dashboard
              </NavLink>
            </li>
            <li style={{ color: 'black',width:'80px' }} onClick={logOutAdmin}>
              Log Out
            </li>
          </ul>
        </div>
      )
    } else {
      return (
        <NavLink to="/login">
          {' '}
          <FaUser className="header_user" />{' '}
        </NavLink>
      )
    }
  }

  return <div>{auth()}</div>
}

export default authBtn
