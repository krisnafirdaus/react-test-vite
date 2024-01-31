import {useState} from 'react'
import axios from 'axios'

const Login = () => {
	const [data, setData] = useState({
		email: '',
		password: ''
	})

	const handleChange = (e) => {
		const name = e.target.name
		const value = e.target.value

		setData({
			...data,
			[name]: value
		})
	}

	const handleSubmit = (e) => {
		axios.post('https://jsonplaceholder.typicode.com/users', data)
	}

	return (
		<div>
			<input placeholder='email' name="email" onChange={handleChange} />
			<input placeholder='password' name="password" onChange={handleChange} />
			<button className='bg-red-100' onClick={handleSubmit}>Submit</button>
		</div>
	)
}

export default Login