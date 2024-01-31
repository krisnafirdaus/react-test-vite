const CardData = ({name, phone, email, address}) => {
	return (
		<div className="bg-red-600 text-white rounded-md py-4">
			<h1>{name}</h1>
			<h2>{phone}</h2>
			<h3>{email}</h3>
			<h4>{address}</h4>
		</div>
	)
}

export default CardData