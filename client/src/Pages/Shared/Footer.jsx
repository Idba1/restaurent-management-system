import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#1B2430] text-white text-center md:text-left py-10 px-6 md:px-12">
                    <h3 className="text-lg font-semibold uppercase">Contact Us</h3>
                    <p className="mt-2">123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p className="mt-2">Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>

                <div className="bg-[#121926] text-white text-center py-10 px-6 md:px-12">
                    <h3 className="text-lg font-semibold uppercase">Follow Us</h3>
                    <p className="mt-2">Join us on social media</p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="text-xl hover:text-gray-400">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#" className="text-xl hover:text-gray-400">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-xl hover:text-gray-400">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-black text-white text-center py-4 text-sm">
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;