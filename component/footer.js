

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5 ">
      <div className="container-fluid ">
        <div className="row ">
          {/* Navigation Links */}
          <div className="col-sm p-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
            <li><a href="" className="text-light text-decoration-none">Home</a></li>
              <li><a href="" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="" className="text-light text-decoration-none">About us</a></li>
            </ul>
          </div>

          {/* Jokes Section */}
          <div className="col-sm p-4">
            <h5> Market Trends</h5>
            <ul className="list-unstyled">
              <li><a href="" className="text-light text-decoration-none">Bull Market</a></li>
              <li><a href="" className="text-light text-decoration-none">Bear Market</a></li>
              <li><a href="" className="text-light text-decoration-none">Sideways Market</a></li>
            </ul>
          </div>

          {/* Dohe Section */}
          <div className="col-sm p-4">
            <h5>Market Types</h5>
            <ul className="list-unstyled">
              <li><a href="" className="text-light text-decoration-none">Spot Market</a></li>
              <li><a href="" className="text-light text-decoration-none">Futures Market</a></li>
              <li><a href="" className="text-light text-decoration-none">Derivatives Market</a></li>
            </ul>
          </div>

        
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-3">
          <p className="mb-0">&copy; {new Date().getFullYear()} CryptoPulse . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  