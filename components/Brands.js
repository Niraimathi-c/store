export default function Brands() {

  const brands = [
    "Nike",
    "Adidas",
    "Puma",
    "Levi's",
    "H&M",
    "US Polo"
  ];

  return (
    <div className="container my-5">

      <h2 className="text-center">
        Top Brands
      </h2>

      <div className="row mt-4">

        {brands.map((brand) => (

          <div
            className="col-md-2"
            key={brand}
          >
            <div className="card p-3 text-center">
              {brand}
            </div>
          </div>

        ))}

      </div>

    </div>
  );
}