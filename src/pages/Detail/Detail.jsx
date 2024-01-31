import { useState } from 'react'

const Detail = () => {
	const [angka, setAngka] = useState(0)

	return (
		<div>
			<button onClick={() => setAngka(prev => prev + 1)}>Click!!</button>
			<h1>{angka}</h1>
		</div>
	)
}

export default Detail