import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 absolute bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-white text-lg font-medium mb-4 relative after:block after:w-12 after:h-1 after:bg-pink-500 after:mt-2">Company</h4>
          <ul>
            <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Affiliate Program</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-medium mb-4 relative after:block after:w-12 after:h-1 after:bg-pink-500 after:mt-2">Get Help</h4>
          <ul>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Bus Status</a></li>
            <li><a href="#" className="hover:text-white transition">Payment Options</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-medium mb-4 relative after:block after:w-12 after:h-1 after:bg-pink-500 after:mt-2">Rides</h4>
          <ul>
            <li><a href="#" className="hover:text-white transition">Trips</a></li>
            <li><a href="#" className="hover:text-white transition">Luxury Rides</a></li>
            <li><a href="#" className="hover:text-white transition">Visit Cities</a></li>
            <li><a href="#" className="hover:text-white transition">Best Rides</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-medium mb-4 relative after:block after:w-12 after:h-1 after:bg-pink-500 after:mt-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white hover:bg-white hover:text-gray-900 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white hover:bg-white hover:text-gray-900 transition">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white hover:bg-white hover:text-gray-900 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 rounded-full text-white hover:bg-white hover:text-gray-900 transition">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
