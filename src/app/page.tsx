'use client';

import { useState } from 'react'; 
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import ConnectModal from "../components/ConnectModal";
import EmailModal from "../components/EmailModal";
// React component homepage
//app/page.tsx -> main page url
export default function HomePage() {
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  // This dict projects is temporary, for test only, we will need to setup a table on DB for store the project ideas, and mark 'Active' in field 'main_page' for it to display
  // 1. 从API端点获取数据
  //const response = await fetch('/api/projects?status=active');
  // 2. API后端查询数据库
  // SELECT * FROM projects WHERE main_page = 'Active'
  // 3. 返回JSON数据
  const projects = [
  {
    id: 1,
    title: "Advanced Mortgage Calculator",
    description: "Advanced mortgage calculator with inflation projection, showing how future payments compare to today's purchasing power.",
    image: "/mortgageCalculator.png",
    objectives: [
      "Real-time inflation-adjusted payment calculations",
      "Interactive amortization schedule visualization",
      "Comparative analysis of different mortgage plans",
      "Exportable financial reports"
    ]
  },
  {
    id: 2,
    title: "Kaito VS iRobot", 
    description: "A boy's one-sided war against a cleaning robot.",
    image: "/kaitoRobot.png",
    objectives: [
      "Create engaging character animations",
      "Develop adaptive AI behavior for the robot",
      "Design interactive environment elements",
      "Implement dynamic storytelling mechanics"
    ]
  },
  {
    id: 3,
    title: "Pixel Polygonizer",
    description: "Rapid feature detection and polygonization based on value thresholds (with QGIS or standalone). ",
    image: "/greyscalePolygonizer.png",
    objectives: [
      "Accurate value-threshold based feature detection",
      "Seamless QGIS integration",
      "High-performance polygonization algorithms",
      "ML-ready data export capabilities"
    ]
  }
  ];
  return (
    //Long className below is a practice of Tailwind CSS
    <div className="min-h-screen bg-black flex flex-col">
      
      {/* React component reference Navigation*/}
      <Navigation />

      {/*React JSX use HTML with JS/ts */}
      {/* Main Content - 添加 flex-grow 让内容区域撑满剩余空间 */}
      <main className="flex-grow max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-gray-200 sm:text-5xl md:text-6xl pt-8">
            Hello World! 
            
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-5xl">
            9700km is the distance between the first two members in this team, and where the team name came from. 
            We are childhood friends in Shanghai, but now one works in the UK and the other in Japan. 
            We aim to design, plan, and develop tools, websites, and games purely from our own curiosity and crafted for people we care about. 
          </p>
        </div>

    
        {/* Hide this because no enough project info-- 使用 ProjectCard 组件 
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                objectives={project.objectives}
              />
            ))}
        </div>
        </div>
    */}
            

        {/*Orginal pop up contact window- retired
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">
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
          */}
        {/* Contact Section */}
        
            <section id="contact" className="py-20 bg-black">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-white mb-12 drop-shadow-md">
                Get in Touch
                </h2>

                <form
                action="https://formspree.io/f/mdklylyq"
                method="POST"
                className="bg-gray-800/60 backdrop-blur-md border border-purple-600/30 rounded-2xl p-8 shadow-lg space-y-6"
                >
                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-purple-300 mb-2 font-medium">
                    Your Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-purple-500/40 text-white 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    placeholder="you@example.com"
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-purple-300 mb-2 font-medium">
                    Your Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-purple-500/40 text-white 
                                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                    placeholder="Write your message here..."
                    />
                </div>

                {/* Error message (HTML5 validation handles required fields) */}
                <p className="text-red-400 hidden peer-invalid:block">
                    Please fill all required fields.
                </p>

                {/* Submit button */}
                <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 
                            text-white font-semibold text-lg shadow-md 
                            hover:scale-105 hover:shadow-purple-600/50 transition-transform duration-300"
                >
                    Send Message
                </button>
                </form>
            </div>
            </section>

        
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