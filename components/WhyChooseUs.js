export default function WhyChooseUs() {

  const features = [
    "Fast Delivery",
    "Easy Returns",
    "Secure Payments",
    "Premium Brands"
  ];

  return (
    <div className="container my-5">

      <h2 className="text-center">
        Why Choose Us
      </h2>

      <div className="row mt-4">

        {features.map((item) => (

          <div
            className="col-md-3"
            key={item}
          >
            <div className="card p-3 text-center">
              {item}
            </div>
          </div>

        ))}

      </div>

    </div>
  );
}