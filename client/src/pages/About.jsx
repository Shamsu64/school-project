const About = () => (
    <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-8">About Excellence Academy</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <p className="text-lg text-slate-600 mb-6 font-medium leading-relaxed">
                    Excellence Academy was founded with a singular vision: to provide a world-class education that empowers students to lead and inspire. 
                    From our humble beginnings with just 50 students, we have grown into a premier institution for Primary and Secondary education.
                </p>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
                <p className="text-slate-600 mb-8 font-medium">To foster a community of lifelong learners who are academically excellent, socially responsible, and ethically sound.</p>
                
                <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
                <p className="text-slate-600">To be the leading center of academic excellence and character development in the region.</p>
            </div>
            <div className="glass-card overflow-hidden">
                <img src="https://images.unsplash.com/photo-1544717297-fa157ef0961f?q=80&w=2070" className="w-full h-full object-cover" alt="School Interior" />
            </div>
        </div>
    </div>
);
export default About;
