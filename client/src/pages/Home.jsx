import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center bg-slate-900">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img 
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070" 
                        alt="School Building" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Nurturing Minds, <br />
                        <span className="text-blue-500"> Shaping Futures</span>
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
                    >
                        At Excellence Academy, we empower students to reach their full potential through 
                        innovative learning, character development, and academic rigor.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
                    >
                        <Link to="/admissions" className="btn-primary flex items-center space-x-2 py-4 px-8">
                            <span>Apply Now</span>
                            <ArrowRight size={20} />
                        </Link>
                        <Link to="/about" className="btn-secondary py-4 px-8 border border-white/20 bg-white/10 text-white backdrop-blur-sm">
                            Learn More
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center text-center p-8 glass-card bg-blue-50">
                            <div className="bg-blue-600 p-4 rounded-full text-white mb-6">
                                <Users size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-900 mb-2">1,500+</h3>
                            <p className="text-slate-600 font-medium">Students Enrolled</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 glass-card bg-amber-50">
                            <div className="bg-amber-500 p-4 rounded-full text-white mb-6">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-900 mb-2">45+</h3>
                            <p className="text-slate-600 font-medium">Expert Educators</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-8 glass-card bg-emerald-50">
                            <div className="bg-emerald-500 p-4 rounded-full text-white mb-6">
                                <Trophy size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-slate-900 mb-2">98%</h3>
                            <p className="text-slate-600 font-medium">Success Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Info (Primary, JSS, SSS) */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Academic Structure</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Comprehensive learning paths designed for every stage of development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Primary', 'Junior Secondary', 'Senior Secondary'].map((level, idx) => (
                            <div key={idx} className="glass-card overflow-hidden group">
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={`https://images.unsplash.com/photo-${idx === 0 ? '1503676260728-1c00da094a0b' : idx === 1 ? '1427504494785-3a9ca7044f45' : '1509062522246-3755977927d7'}?q=80&w=2070`} 
                                        alt={level}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{level}</h3>
                                    <p className="text-slate-600 mb-6">
                                        Innovative curriculum focused on building a strong foundation for lifelong learning.
                                    </p>
                                    <Link to="/academics" className="text-blue-600 font-semibold flex items-center space-x-2">
                                        <span>View Details</span>
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
