import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Registr = () => {
  const { mode } = useSelector((state) => state.darkMode)
  const [myUser, SetMyUser] = useState({
    userName: '',
    password: '',
    email: '',
  })
  const history = useHistory()
  const handleChange = (e) => {
    SetMyUser({ ...myUser, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault()
    console.log(myUser)
    localStorage.setItem('User', JSON.stringify(myUser))
    history.push('/login')
  }
  return (
    <section className='login'
      style={{
        background: mode ? '#333' : 'white',
        color: mode ? '#C6E0E3' : 'black',
      }}
    >
      <div className='login_div'>
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Your name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="userName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Your email
            </label>
            <input
              type="email"
              className="form-control"
              onChange={handleChange}
              name="email"
              required
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
              required
              minLength={3}
              pattern="[0-9a-fA-F]{4,8}"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}

export default Registr
