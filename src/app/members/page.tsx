// app/members/page.tsx
'use client';

import Navigation from '../../components/Navigation';
import { useState } from 'react';
import ConnectModal from "../../components/ConnectModal";
import EmailModal from "../../components/EmailModal";
import Image from "next/image";
interface TeamMember {
    name: string;
    role: string;
    linkedin: string;
    image?: string;
    bio?: string;
    slug?:string;
    category: 'core' | 'contributor';
    }

export default function MembersPage() {
    const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
    const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
    const teamMembers: TeamMember[] = [
        // Core Team
        {
        name: "Lei Ding (UK)",
        role: "Co-Founder & Full-stack Developer",
        linkedin: "https://linkedin.com/in/lei-ding-92117b1b9",
        image:"/ld_profile.png",
        category: 'core',
        slug:"lei-ding",
        },
        {
        name: "Wei Wu (JP)", 
        role: "Co-Founder & Could Engineer",
        linkedin: "https://linkedin.com/in/唯-呉-462a82371",
        category: 'core',
        image:"/ww_profile.jpg",
        slug:"wei-wu",
        },
        
        // Contributors
        {
        name: "Richard Markos",
        role: "Contributor of the Advanced Mortgage Calculator",
        linkedin: "#",
        category: 'contributor',
        image:"/rm_profile.png",
        bio: "Richard provided expert guidance in developing our Advanced Mortgage Calculator by analyzing open-web solutions and identifying key market gaps. He provide important insights that correlate housing prices with inflation, enabling realistic payment projections. His contributions include inflation-adjusted calculations, property value trend analysis, and user-centric features that address long-term financial planning needs beyond basic payment estimates."
        }
    ];

    const coreTeam = teamMembers.filter(member => member.category === 'core');
    const contributors = teamMembers.filter(member => member.category === 'contributor');

    return (
        //Long className below is a practice of Tailwind CSS
        <div className="min-h-screen bg-black flex flex-col  ">
            {/* React component reference Navigation*/}
            <Navigation />
            <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
            {/* Core Team Section */}
            <section className="py-20  ">
                <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-white mb-4">Core Team</h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    {coreTeam.map((member, index) => (
                    <div key={index} className="bg-black rounded-2xl p-8 border-2 border-transparent transition-colors bg-[url('/bk2.jpg')] hover:border-purple-600  group"  
                    onClick={() => window.location.href = `/members/${member.slug}`}>
                        
                        <div className="text-center">
                        {/* Avatar */}
                        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden bg-purple-600 flex items-center justify-center">
                            {member.image ? (
                                <Image
                                src={member.image}
                                alt={member.name}
                                width={128}   
                                height={128}
                                className="w-full h-full object-cover"
                                />
                            ) : (
                                <span className="text-white text-3xl font-bold">
                                {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            )}
                            </div>
                        
                        <h2 className="text-2xl font-semibold text-white mb-2">{member.name}</h2>
                        <p className="text-purple-400 text-lg mb-4">{member.role}</p>
                        <p className="text-gray-300 mb-6 leading-relaxed">{member.bio}</p>
                        
                        <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-full group-hover:translate-y-0">
                            <span className="font-semibold">Click to know more</span>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Contributors Section */}
            <section className="py-20">
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Contributors & Consultants</h2>
                <p className="text-purple-50 text-xl">Who help us grow</p>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    {contributors.map((member, index) => (
                        <div
                        key={index}
                        className="border-1 border-white-600 rounded-2xl p-8 hover:bg-purple-750 transition-colors "
                        >

                            {/* Split left and right side */}
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            
                            {/* Left side: Avatar + name/role */}

                            <div className="flex-shrink-0 text-center flex flex-col items-center md:items-start ">
                            <div className="w-32 h-32 rounded-full overflow-hidden  flex items-center justify-center ">
                                {member.image ? (
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                    />
                                ) : (
                                <span className="text-white text-3xl font-bold">
                                    {member.name.split(" ").map((n) => n[0]).join("")}
                                </span>
                                )}
                            </div>
                            <h3 className=" font-semibold text-white mt-4">{member.name}</h3>
                            <p className="text-purple-300 ">{member.role}</p>
                            </div>

                            {/* Right side: Bio */}
                            <div className="flex-1 flex items-center">
                                <div className="border-l-4 border-purple-400 pl-6 py-15"> 
                                    <div className="flex-1 text-purple-100 leading-relaxed">
                                    <p>{member.bio}</p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            </section>

            <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-200 mb-4">
                Want to know more?
            </h2>
            <div className="space-x-4">
                <button 
                onClick={() => setIsConnectModalOpen(true)} 
                className="bg-purple-700 text-white font-bold py-2.5 px-6 rounded-lg 
                        transition-all duration-300 
                        hover:bg-transparent hover:border-2 hover:border-purple-600 
                        hover:text-purple-600 hover:scale-105 transform">
                Connect with us
                </button>
                <button 
                onClick={() => setIsEmailModalOpen(true)}
                className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-gray-900 font-bold py-2 px-6 rounded-xl transition-all duration-300 hover:scale-105">
                Email for an idea
                </button>
            </div>
            </div>

            
        </main>

        
        
        <footer className="fixed bottom-0 left-0 w-full bg-black text-white py-1">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 9700km studio.  All rights reserved.</p>
            </div>
        </footer>
        <ConnectModal 
            isOpen={isConnectModalOpen} 
            onClose={() => setIsConnectModalOpen(false)} 
            />
        <EmailModal 
            isOpen={isEmailModalOpen} 
            onClose={() => setIsEmailModalOpen(false)} 
        />
        </div>
    );
    }