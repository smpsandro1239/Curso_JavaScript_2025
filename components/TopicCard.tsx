
import React from 'react';

interface TopicCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-slate-800/50 rounded-xl shadow-lg ring-1 ring-white/5 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/10">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="flex-shrink-0 bg-slate-700 p-3 rounded-full mr-4 text-cyan-400">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-slate-100">{title}</h3>
        </div>
        <div className="text-slate-300 space-y-4 prose prose-invert prose-sm md:prose-base max-w-none prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-100 prose-code:text-emerald-300 prose-code:before:content-[''] prose-code:after:content-[''] prose-code:font-mono prose-code:bg-slate-700/50 prose-code:p-1 prose-code:rounded-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
