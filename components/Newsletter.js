export default function Newsletter() {
  return (
    <div className="bg-light py-5">
      <div className="container text-center">
        <h2>Subscribe to our Newsletter</h2>
        <p className="text-muted mb-4">
          Get the latest updates on new arrivals, special offers, and weekly promotions.
        </p>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email address"
                aria-label="Recipient's email"
                suppressHydrationWarning
              />
              <button
                className="btn btn-dark"
                type="button"
                suppressHydrationWarning
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
