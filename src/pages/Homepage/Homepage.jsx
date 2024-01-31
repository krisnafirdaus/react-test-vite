import { useEffect, useState } from 'react'
import axios from 'axios'

const Homepage = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res => setData(res.data))
		.catch(err => console.log(err))
	}, [])

	return (
		<div>
			{data.map((item) => {
				console.log(item)
				return (
					<div>
						<h1>{item.name}</h1>
						<h2>{item.phone}</h2>
						<h3>{item.email}</h3>
					</div>
				)
			})}
		</div>
	)
} 

export default Homepage