import { useState } from 'react'
import Card from '../../components/card/index'
import './Detail.css'

const Detail = () => {
	const [angka, setAngka] = useState(0)

	const handleKurang = () => {
		if(angka > 0){
			setAngka(prev => prev - 1)
		}
	}

	return (
		<div>
			<Card />
			<button className="up pt-5" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => setAngka(prev => prev + 1)}>Click!!</button>
			<button onClick={handleKurang}>Kurang</button>
			<h1>{angka}</h1>
		</div>
	)
}

export default Detail