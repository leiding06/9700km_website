'use client';
import React, { useState, useRef, useEffect } from "react";
interface ResumeNavigationProps {
    personName: string;
    backUrl?: string;
}

/**
 * A navigation bar for resume pages with section navigation.
 * @param {{ personName: string, backUrl?: string }} props
 * @prop {string} personName - The name of the person whose resume is being viewed.
 * @prop {string} [backUrl=/] - The URL to go back to when the back button is clicked.
 */

export default function ResumeNavigation({ 
    personName, 
    backUrl = "/" 
    }: ResumeNavigationProps) {
    
    // Move to section
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        }
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    // 点击外部自动关闭
    useEffect(() => {
        if (!isMenuOpen) return;

        const handleClick = (e: MouseEvent | TouchEvent) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(e.target as Node) &&
            buttonRef.current &&
            !buttonRef.current.contains(e.target as Node)
        ) {
            setIsMenuOpen(false);
        }
        };

        document.addEventListener("mousedown", handleClick);
        document.addEventListener("touchstart", handleClick);

        return () => {
        document.removeEventListener("mousedown", handleClick);
        document.removeEventListener("touchstart", handleClick);
        };
    }, [isMenuOpen]);
    return (
        <nav className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-40 backdrop-blur-sm "> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-15">
            
            {/* Left corner: back to home */}
            <div className="flex items-center space-x-6">
                <a
                href={backUrl}
                className="group flex items-center space-x-2 text-gray-300 hover:text-white  transition-colors"
                >
                <div className="w-10 h-10 bg-purple-600 rounded-full hover:outline flex items-center justify-center group-hover:bg-purple-700 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <span className="font-medium">9700 Home</span>
                </a>
                
                <div className="h-8 w-px bg-gray-600"></div>
                
                <div>
                <p className="text-sm text-gray-400">Viewing Resume</p>
                <p className="text-white font-semibold">{personName}</p>
                </div>
            </div>

            {/* 汉堡包按钮与菜单：全尺寸都显示 */}
            <div className="relative">
            <button
                ref={buttonRef}
                className="focus:outline-none"
                onClick={() => setIsMenuOpen(v => !v)}
                aria-label="Open menu"
                >
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
                </button>
                {isMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute right-0 top-12 w-52 bg-black border border-gray-700 rounded-xl shadow-lg py-2 z-50 flex flex-col"
                >
                <button className="px-4 py-2 text-left text-gray-100 hover:bg-purple-600 rounded transition" onClick={() => scrollToSection("tech-stack")}>
                    Tech-Stack
                </button>
                <button className="px-4 py-2 text-left text-gray-100 hover:bg-purple-600 rounded transition" onClick={() => scrollToSection("current")}>
                    Current
                </button>
                <button className="px-4 py-2 text-left text-gray-100 hover:bg-purple-600 rounded transition" onClick={() => scrollToSection("projects")}>
                    Projects
                </button>
                <button className="px-4 py-2 text-left text-gray-100 hover:bg-purple-600 rounded transition" onClick={() => scrollToSection("puzzle")}>
                    Puzzle
                </button>
                <button className="px-4 py-2 text-left text-gray-100 hover:bg-purple-600 rounded transition" onClick={() => scrollToSection("about")}>
                    More about me
                </button>
                <button className="px-4 py-2 text-left text-gray-100 hover:bg-purple-600 rounded transition" onClick={() => scrollToSection("contact")}>
                    Get in Touch
                </button>
                </div>
            )}
            </div>
        </div>
        </div>
        </nav>
    );
}