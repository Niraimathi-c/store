export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>Fashion Store</h5>
            <p className="text-muted">
              Discover the latest trends in clothing, shoes, and accessories for Men, Women, and Kids.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Men</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Women</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Kids</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Brands</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5>Contact</h5>
            <p className="text-muted mb-1">📍 Chennai, Tamil Nadu</p>
            <p className="text-muted mb-1">📞 +91 9876543210</p>
            <p className="text-muted mb-1">📧 support@fashionstore.com</p>
          </div>
        </div>
        <hr className="bg-secondary" />
        <div className="text-center text-muted">
          <p className="mb-0">&copy; {new Date().getFullYear()} Fashion Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
