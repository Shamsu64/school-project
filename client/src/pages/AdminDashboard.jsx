import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Users, GraduationCap, UserCheck, DollarSign, Bell, Settings, LayoutDashboard } from 'lucide-react';
import axios from 'axios';

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const [stats, setStats] = useState({
        totalStudents: 0,
        totalTeachers: 0,
        pendingAdmissions: 0,
        totalRevenue: 0
    });

    useEffect(() => {
        // Fetch stats from backend in real app
        setStats({
            totalStudents: 1240,
            totalTeachers: 85,
            pendingAdmissions: 12,
            totalRevenue: 2500000
        });
    }, []);

    const SidebarItem = ({ icon: Icon, label, active }) => (
        <div className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'}`}>
            <Icon size={20} />
            <span className="font-medium">{label}</span>
        </div>
    );

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside className="w-68 glass-card m-4 hidden lg:block p-6">
                <div className="mb-10 px-2">
                    <h2 className="text-xl font-bold text-slate-800">Admin Panel</h2>
                    <p className="text-xs text-slate-500">Excellence Academy SMS</p>
                </div>

                <nav className="space-y-2">
                    <SidebarItem icon={LayoutDashboard} label="Overview" active />
                    <SidebarItem icon={GraduationCap} label="Students" />
                    <SidebarItem icon={Users} label="Teachers" />
                    <SidebarItem icon={UserCheck} label="Admissions" />
                    <SidebarItem icon={DollarSign} label="Payments" />
                    <SidebarItem icon={Bell} label="Announcements" />
                    <SidebarItem icon={Settings} label="System Config" />
                </nav>

                <div className="absolute bottom-10 left-6 right-6">
                    <button onClick={logout} className="w-full btn-secondary text-red-600 hover:bg-red-50">
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8">
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Dashboard Overview</h1>
                        <p className="text-slate-500">Welcome back, {user?.firstName}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="p-2 glass-card rounded-full relative">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>
                        <div className="flex items-center space-x-3">
                            <div className="text-right">
                                <p className="text-sm font-bold">{user?.firstName} {user?.lastName}</p>
                                <p className="text-xs text-slate-500 uppercase tracking-wider">{user?.role}</p>
                            </div>
                            <img src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" className="w-10 h-10 rounded-full" alt="Avatar" />
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    {[
                        { label: 'Total Students', value: stats.totalStudents, icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-100' },
                        { label: 'Total Teachers', value: stats.totalTeachers, icon: Users, color: 'text-purple-600', bg: 'bg-purple-100' },
                        { label: 'Admissions', value: stats.pendingAdmissions, icon: UserCheck, color: 'text-orange-600', bg: 'bg-orange-100' },
                        { label: 'Revenue', value: `₦${stats.totalRevenue.toLocaleString()}`, icon: DollarSign, color: 'text-emerald-600', bg: 'bg-emerald-100' }
                    ].map((item, i) => (
                        <div key={i} className="glass-card p-6 flex items-center space-x-4">
                            <div className={`${item.bg} ${item.color} p-4 rounded-2xl`}>
                                <item.icon size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">{item.label}</p>
                                <p className="text-2xl font-bold text-slate-900">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activity / Table placeholder */}
                <div className="glass-card p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-bold text-slate-900">Recent Student Admissions</h3>
                        <button className="text-blue-600 font-medium hover:underline text-sm">View All</button>
                    </div>
                    
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="text-xs uppercase text-slate-400 border-b">
                                <tr>
                                    <th className="pb-4 font-bold">Student Name</th>
                                    <th className="pb-4 font-bold">Class</th>
                                    <th className="pb-4 font-bold">Date Joined</th>
                                    <th className="pb-4 font-bold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {[
                                    { name: 'John Doe', class: 'SSS 1', date: '2023-11-20', status: 'Active' },
                                    { name: 'Jane Smith', class: 'JSS 3', date: '2023-11-19', status: 'Active' },
                                    { name: 'David Wilson', class: 'PR 5', date: '2023-11-18', status: 'Pending' },
                                    { name: 'Mary Johnson', class: 'SSS 2', date: '2023-11-17', status: 'Active' }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-slate-50/50">
                                        <td className="py-4 font-medium">{row.name}</td>
                                        <td className="py-4 text-slate-600">{row.class}</td>
                                        <td className="py-4 text-slate-600">{row.date}</td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
