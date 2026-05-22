import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-20">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <h3 className="text-white text-xl font-bold mb-6">Excellence Academy</h3>
                    <p className="text-slate-400 leading-relaxed">
                        Nurturing the leaders of tomorrow through holistic education and academic excellence since 1995.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-4">
                        <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                        <li><a href="/admissions" className="hover:text-blue-400 transition-colors">Admissions</a></li>
                        <li><a href="/gallery" className="hover:text-blue-400 transition-colors">Gallery</a></li>
                        <li><a href="/news" className="hover:text-blue-400 transition-colors">News & Events</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                            <MapPin size={18} className="text-blue-500" />
                            <span>123 Academic Drive, Lagos, Nigeria</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Phone size={18} className="text-blue-500" />
                            <span>+234 800 123 4567</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <Mail size={18} className="text-blue-500" />
                            <span>info@excellence.edu.ng</span>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-6">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-all"><Facebook size={20} /></a>
                        <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-400 transition-all"><Twitter size={20} /></a>
                        <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-pink-600 transition-all"><Instagram size={20} /></a>
                        <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-700 transition-all"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>
            
            <div className="container mx-auto px-6 border-t border-slate-800 mt-16 pt-8 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Excellence Academy. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
