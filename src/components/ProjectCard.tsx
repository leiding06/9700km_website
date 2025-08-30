// components/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
    id: number;
    title: string;
    description: string;
    image: string;
    objectives?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
    title, 
    description, 
    image,
    objectives = []
}) => {
    return (
        <div className="group w-full h-96 relative"> 
            {/* 简化翻转容器 - 移除复杂样式 */}
            <div className="relative w-full h-full transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                
                {/* The first side */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                    <div className="h-48 bg-gray-200 relative">
                        <Image 
                            src={image} 
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>
                    
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-600">
                            {description}
                        </p>
                    </div>
                </div>

            </div>

            {/* turning side */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-black rounded-xl shadow-lg overflow-hidden h-full p-6 flex flex-col justify-center">
                    <h4 className="text-lg font-semibold text-purple-400 mb-4">
                        Project Objectives
                    </h4>
                    <ul className="space-y-2">
                        {objectives.map((objective, index) => (
                            <li key={index} className="text-purple-200 text-sm flex items-start">
                                <span className="text-purple-400 mr-2">•</span>
                                {objective}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;