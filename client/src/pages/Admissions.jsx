import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, User, MapPin, Book } from 'lucide-react';

const Admissions = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        address: '',
        targetClass: '',
        previousSchool: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send to backend
        console.log(formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-12 text-center max-w-xl"
                >
                    <div className="bg-emerald-100 text-emerald-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">Application Received!</h2>
                    <p className="text-slate-600 text-lg mb-8">
                        Thank you for your interest in Excellence Academy. Our admissions team will review your application and contact you via email at <strong>{formData.email}</strong> within 3-5 business days.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary">
                        Back to Home
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Online Admission Application</h1>
                    <p className="text-slate-600">Start your journey with us today. Fill out the form below to apply.</p>
                </div>

                <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Student Details */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold flex items-center space-x-2 text-blue-600">
                                <User size={20} />
                                <span>Student Information</span>
                            </h3>
                            
                            <div className="space-y-4">
                                <input 
                                    name="firstName"
                                    placeholder="First Name"
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                />
                                <input 
                                    name="lastName"
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                />
                                <input 
                                    name="dateOfBirth"
                                    type="date"
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                />
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-bold flex items-center space-x-2 text-blue-600">
                                <MapPin size={20} />
                                <span>Contact Information</span>
                            </h3>
                            
                            <div className="space-y-4">
                                <input 
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                />
                                <input 
                                    name="phone"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    className="input-field"
                                    required
                                />
                                <textarea 
                                    name="address"
                                    placeholder="Residential Address"
                                    onChange={handleChange}
                                    className="input-field h-24"
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <hr className="border-slate-200" />

                    {/* Academic Details */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold flex items-center space-x-2 text-blue-600">
                            <Book size={20} />
                            <span>Academic Selection</span>
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <select 
                                name="targetClass" 
                                onChange={handleChange}
                                className="input-field"
                                required
                            >
                                <option value="">Select Level Applying For</option>
                                <option value="Nursery">Nursery / Primary</option>
                                <option value="JSS1">Junior Secondary (JSS1)</option>
                                <option value="JSS2">Junior Secondary (JSS2)</option>
                                <option value="JSS3">Junior Secondary (JSS3)</option>
                                <option value="SSS1">Senior Secondary (SSS1)</option>
                                <option value="SSS2">Senior Secondary (SSS2)</option>
                                <option value="SSS3">Senior Secondary (SSS3)</option>
                            </select>
                            <input 
                                name="previousSchool"
                                placeholder="Previous School Attended"
                                onChange={handleChange}
                                className="input-field"
                            />
                        </div>
                    </div>

                    <div className="pt-6">
                        <button type="submit" className="btn-primary w-full py-4 text-lg flex items-center justify-center space-x-3">
                            <FileText size={20} />
                            <span>Submit Application</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admissions;
