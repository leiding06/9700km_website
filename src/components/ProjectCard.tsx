// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    objectives?: string[];
    link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
    title, 
    description, 
    image,
    objectives = [],
    link
}) => {
    return (
        <div className="group w-full h-96 relative">
            {/* 正面 */}
            <div className="relative w-full h-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                <div className="rounded-xl overflow-hidden h-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-black/40">
                    <div className="h-60 relative">
                        <Image 
                            src={image} 
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                            className="object-cover opacity-90"
                        />
                        {/* 图片底部渐变过渡 */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                    </div>
                </div>
            </div>

            {/* 背面 */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="rounded-xl overflow-hidden h-full border border-purple-500/30 bg-black/60 backdrop-blur-md shadow-lg shadow-purple-900/20 p-6 flex flex-col justify-center">
                    <h4 className="text-base font-semibold text-purple-300 mb-4 tracking-wide uppercase text-sm">
                        Project Objectives
                    </h4>
                    <ul className="space-y-2 flex-1">
                        {objectives.map((objective, index) => (
                            <li key={index} className="text-gray-300 text-sm flex items-start gap-2">
                                <span className="text-purple-400 mt-0.5">▸</span>
                                {objective}
                            </li>
                        ))}
                    </ul>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 px-4 py-2 border border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 text-purple-300 hover:text-white text-sm font-medium rounded-lg text-center transition-all duration-200"
                        >
                            View Project Page
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;