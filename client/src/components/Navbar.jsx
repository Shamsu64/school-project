import { Link } from 'react-router-dom';
import { Menu, X, School, User } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="glass-card sticky top-0 z-50 m-4 py-3 px-6 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                    <School className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
                    Excellence Academy
                </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 font-medium">
                <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
                <Link to="/academics" className="hover:text-blue-600 transition-colors">Academics</Link>
                <Link to="/admissions" className="hover:text-blue-600 transition-colors">Admissions</Link>
                <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>

            <div className="flex items-center space-x-4">
                <Link to="/login" className="hidden md:flex items-center space-x-1 btn-secondary">
                    <User size={18} />
                    <span>Portal Login</span>
                </Link>
                
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 right-0 glass-card m-4 p-6 flex flex-col space-y-4 md:hidden">
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/academics" onClick={() => setIsOpen(false)}>Academics</Link>
                    <Link to="/admissions" onClick={() => setIsOpen(false)}>Admissions</Link>
                    <Link to="/login" onClick={() => setIsOpen(false)} className="btn-primary text-center">Login</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
