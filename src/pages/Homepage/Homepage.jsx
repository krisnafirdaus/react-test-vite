import { useEffect, useState } from 'react'
import axios from 'axios'
import CardData from '../../components/card-data/CardData'

const Homepage = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(res => setData(res.data))
		.catch(err => alert(err))
	}, [])

	return (
		<div className='grid grid-cols-4 gap-4'>
			{data.map((item) => {
				return (
					<CardData
						name={item.name}
						phone={item.phone}
						email={item.email}
						address={item.address.street}
					/>
				)
			})}
		</div>
	)
} 

export default Homepage