'use client';

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

    return (
        <nav className="fixed top-0 left-0 right-0  bk-navy shadow-md z-50  z-40 backdrop-blur-sm "> 
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

            {/* Right corner: resume nav */}
            <div className="flex items-center space-x-6">

                <button
                onClick={() => scrollToSection('tech-stack')}
                className="text-gray-300 hover:text-white hover:outline hover:outline-2 hover:outline-purple-400 hover:outline-offset-2 transition-colors font-medium text-md"
                >
                Tech-Stack
                </button>

                <button
                onClick={() => scrollToSection('current')}
                className="text-gray-300 hover:text-white hover:outline hover:outline-2 hover:outline-purple-400 hover:outline-offset-2 transition-colors font-medium text-"
                >
                Current
                </button>

                <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white hover:outline hover:outline-2 hover:outline-purple-400 hover:outline-offset-2 transition-colors font-medium text-md"
                >
                Projects
                </button>
                
                <button
                onClick={() => scrollToSection('puzzle')}
                className="text-gray-300 hover:text-white hover:outline hover:outline-2 hover:outline-purple-400 hover:outline-offset-2 transition-colors font-medium text-md"
                >
                Puzzle
                </button>
                
                <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white hover:outline hover:outline-2 hover:outline-purple-400 hover:outline-offset-2 transition-colors font-medium text-md"
                >
                More about me
                </button>

                {/* 可选：添加一个醒目的行动按钮 */}
                <button
                onClick={() => scrollToSection('contact')}
                className="bg-grey-600 hover:bg-purple-700  text-white text-italic px-4 py-2 rounded-lg text-md font-medium transition-colors"
                >
                Get in Touch
                </button>
            </div>
            </div>
        </div>
        </nav>
    );
}