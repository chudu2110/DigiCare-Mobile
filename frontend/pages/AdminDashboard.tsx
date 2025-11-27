import React, { useEffect, useState, useRef } from 'react';
import { ADMIN_STATS_DATA, MODULE_COMPLETION_DATA, USER_DISTRIBUTION_DATA, ICONS } from '../constants';

export const AdminDashboard: React.FC = () => {
    const StatCard: React.FC<{ title: string; targetValue: number; change: number; icon: React.ReactNode; iconColor?: string; isPercent?: boolean; onValueChange?: (v: number) => void; }> = ({ title, targetValue, change, icon, iconColor = 'text-slate-600 dark:text-slate-200', isPercent = false, onValueChange }) => {
        const [val, setVal] = useState(0);
        const startedRef = useRef(false);
        useEffect(() => {
            startedRef.current = false;
            setVal(0);
            let int: number | undefined;
            let step = 0;
            const steps = 30;
            const frameMs = 16;
            int = window.setInterval(() => {
                step++;
                const p = Math.min(step / steps, 1);
                const next = Math.round(targetValue * p);
                setVal(next);
                onValueChange && onValueChange(next);
                if (p >= 1 && int) {
                    clearInterval(int);
                    startedRef.current = true;
                }
            }, frameMs);
            return () => { if (int) clearInterval(int); };
        }, [targetValue]);

        useEffect(() => {
            let to: number | undefined;
            const schedule = () => {
                const delay = (Math.floor(Math.random() * 3) + 2) * 1000;
                to = window.setTimeout(() => {
                    if (!startedRef.current) { schedule(); return; }
                    setVal(prev => {
                        const deltaMag = Math.floor(Math.random() * 10);
                        const deltaSign = Math.random() < 0.5 ? -1 : 1;
                        let n = prev + deltaSign * deltaMag;
                        if (isPercent) n = Math.max(0, Math.min(100, n)); else n = Math.max(0, n);
                        onValueChange && onValueChange(n);
                        return n;
                    });
                    schedule();
                }, delay);
            };
            schedule();
            return () => { if (to) clearTimeout(to); };
        }, [isPercent, onValueChange]);

        const display = isPercent ? `${val}%` : val.toLocaleString('vi-VN');
        return (
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg shadow-slate-900/5 dark:shadow-[0_0_18px_rgba(15,23,42,0.35)] border border-slate-200 dark:border-slate-700 transform-gpu transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{title}</p>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 ring-1 ring-slate-200 dark:ring-white/10 ${iconColor}`}>{icon}</div>
                </div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{display}</p>
                <div className={`flex items-center mt-1 text-sm font-semibold ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {change >= 0 ? '▲' : '▼'} {Math.abs(change)}% so với tháng trước
                </div>
            </div>
        );
    };

    

    return (
        <div className="space-y-8">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Bảng điều khiển Admin</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Tổng số học sinh" targetValue={ADMIN_STATS_DATA.totalStudents.value} change={ADMIN_STATS_DATA.totalStudents.change} icon={ICONS.user} iconColor="text-cyan-500" />
                <StatCard title="Tổng số phụ huynh" targetValue={ADMIN_STATS_DATA.totalParents.value} change={ADMIN_STATS_DATA.totalParents.change} icon={ICONS.userGroup} iconColor="text-accent-purple" />
                <StatCard title="Tỷ lệ hoàn thành" targetValue={ADMIN_STATS_DATA.completionRate.value} change={ADMIN_STATS_DATA.completionRate.change} icon={ICONS.checkCircle} iconColor="text-accent-orange" isPercent />
                <StatCard title="Mức độ tương tác" targetValue={ADMIN_STATS_DATA.engagementRate.value} change={ADMIN_STATS_DATA.engagementRate.change} icon={ICONS.activity} iconColor="text-indigo-500" isPercent />
            </div>
            <div className="grid lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg shadow-slate-900/5 dark:shadow-[0_0_18px_rgba(15,23,42,0.35)] border border-slate-200 dark:border-slate-700 transform-gpu transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Tiến độ hoàn thành Module</h3>
                    <div className="space-y-4">
                        {MODULE_COMPLETION_DATA.map(module => (
                            <div key={module.id}>
                                <div className="flex justify-between text-sm font-semibold text-slate-600 dark:text-slate-300 mb-1">
                                    <span>{module.title}</span>
                                    <span>{module.completion}%</span>
                                </div>
                                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                                    <div className="bg-cyan-500 h-2.5 rounded-full" style={{ width: `${module.completion}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg shadow-slate-900/5 dark:shadow-[0_0_18px_rgba(15,23,42,0.35)] border border-slate-200 dark:border-slate-700 transform-gpu transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-xl">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Phân bổ người dùng</h3>
                    <div className="space-y-3">
                         {USER_DISTRIBUTION_DATA.map((item, index) => {
                             const colors = ['bg-cyan-500', 'bg-accent-purple', 'bg-accent-orange'];
                             const total = USER_DISTRIBUTION_DATA.reduce((sum, i) => sum + i.count, 0);
                             const percentage = ((item.count / total) * 100).toFixed(1);
                             return (
                                 <div key={item.role}>
                                    <div className="flex justify-between font-semibold text-slate-800 dark:text-slate-300">
                                        <span>{item.role}</span>
                                        <span>{item.count.toLocaleString('vi-VN')}</span>
                                    </div>
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mt-1">
                                         <div className={`${colors[index % colors.length]} h-2.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
                                    </div>
                                </div>
                            )
                         })}
                    </div>
                </div>
            </div>
        </div>
    );
};
