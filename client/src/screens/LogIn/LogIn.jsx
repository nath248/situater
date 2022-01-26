import './LogIn.css'
import { useState } from 'react'
import { logIn } from '../../services/users'
import { useNavigate } from 'react-router-dom'

function LogIn(props) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    email: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const onLogIn = async (event) => {
    event.preventDefault()
    const { setUser } = props
    try {
      const user = await logIn(form)
      setUser(user)
      navigate('/')
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        email: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Log In</button>
    }
  }

  const { username, password } = form

  return (
    <div className='log-in-main'>
      <div className='log-in-helper-text'>
        <h1>Log In for exclusive access!</h1>
        <p>Don't have an account with us? No worries, <span className='underline'>Sign Up</span> here to not miss out!</p>
      </div>
      <div className='log-in-form'>
        <form onSubmit={onLogIn}>
          <label>Username</label>
          <input required name="username" value={username} placeholder='Enter Username' onChange={handleChange}/>
          <label>Password</label>
          <input required name="password" value={password} placeholder='Enter Password' onChange={handleChange} />
          {renderError()}
        </form>
      </div>
    </div>
  )
}

export default LogIn;