const ProductCard = ({ data }) => {
	return (
		<div>
			{data.map((products, id) => (
				<div key={id}>
					<img src={products.image} style={{ width: "50px" }} />
					<p>{products.price}</p>
					<h3>{products.title}</h3>
				</div>
			))}
		</div>
	);
};

export default ProductCard;
