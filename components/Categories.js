export default function Categories() {

  const categories = [
    "Men",
    "Women",
    "Kids",
    "Footwear",
    "Accessories",
    "Watches"
  ];

  return (
    <div className="container my-5">

      <h2 className="text-center">
        Shop By Category
      </h2>

      <div className="row mt-4">

        {categories.map((item) => (

          <div
            className="col-md-4 mb-3"
            key={item}
          >
            <div className="card p-4 text-center shadow-sm">
              <h5>{item}</h5>
            </div>
          </div>

        ))}

      </div>

    </div>
  );
}