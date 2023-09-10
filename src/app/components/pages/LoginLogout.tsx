import React, {  useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';

function LoginLogout() {
  const user = {
    userName: 'Miri',
    password: 'M123',
    admin:'admin',
  }

  const { mode } = useSelector((state) => state.darkMode)
  const [myUser, SetMyUser] = useState({
    userName: '',
    password: '',
  })

  const handleChange = (e) => {
    SetMyUser({ ...myUser, [e.target.name]: e.target.value })
  }

  const history = useHistory()

  const userFromRegister = JSON.parse(localStorage.getItem('User'))

  const submitForm = (e) => {
    e.preventDefault()
    console.log(myUser)

    if (user.userName == myUser.userName && user.password == myUser.password) {
      localStorage.setItem('Admin', JSON.stringify(user))
      history.push('/hesabim')
      window.location.reload()
    } else if (userFromRegister.userName === myUser.userName && userFromRegister.password == myUser.password) {
      history.push('/hesabim')
      console.log('fdsfdfsd')
      window.location.reload()
    } else {
      alert('Name və ya Password səhvdir')
    }
  }
  return (
    <>
    <section className='login' style={{background: mode ? '#333' : 'white',
      color: mode ? '#C6E0E3' : 'black'}}>
      <div className='login_div' style={{background: mode ? '#333' : 'white',
      color: mode ? '#C6E0E3' : 'black'}}>
        <form onSubmit={submitForm}>
          <div className="mb-5">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Your name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="userName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={handleChange}
              name="password"
              minLength={3}
            />
          </div>
          <button type="submit" className="btn btn-primary m-2">
            Submit
          </button>
          <NavLink type="submit" className="btn btn-primary m-2" to="/register">
            Dont you have an account
          </NavLink>
        </form>
        </div>
      </section>
    </>
  )
}
export default LoginLogout
