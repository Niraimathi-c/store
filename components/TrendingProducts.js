export default function TrendingProducts() {

  const products = [
    {
      name: "Nike Sneakers",
      price: "₹1999"
    },
    {
      name: "Denim Jacket",
      price: "₹1499"
    },
    {
      name: "Casual T-Shirt",
      price: "₹499"
    }
  ];

  return (
    <div className="container my-5">

      <h2 className="text-center">
        Trending Products
      </h2>

      <div className="row">

        {products.map((product) => (

          <div
            className="col-md-4"
            key={product.name}
          >
            <div className="card shadow">

              <div
                className="bg-secondary"
                style={{
                  height:"220px"
                }}
              />

              <div className="card-body">

                <h5>{product.name}</h5>

                <p>{product.price}</p>

                <button
                  className="btn btn-primary w-100"
                  suppressHydrationWarning
                >
                  Add To Cart
                </button>

              </div>

            </div>
          </div>

        ))}

      </div>

    </div>
  );
}