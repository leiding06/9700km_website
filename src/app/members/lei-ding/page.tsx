import ResumeNavigation from '../../../components/NavigationResume';
import CustomCursor from '../../../components/CustomCursor'; 

export default function LeiDingResume() {
    return (
        <div className="min-h-screen bg-gray-800">
        <CustomCursor/>
        <ResumeNavigation personName="Lei Ding" />
        
        <main className="pt-20"> 
            <section id="aboutMe" className="py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 
                className="text-4xl font-bold text-white mb-6 text-center"
                style={{ textShadow: "2px 2px 4px rgba(255, 12, 214, 0.6)" }}
                >
                Hi, I’m Lei
                </h1>

                <p className="text-xl mt-4 text-center">
                <span className="text-purple-300 font-semibold">Full-stack developer</span>
                <span className="text-gray-300"> with a passion for turning ideas into functional applications</span>
                </p>

                <p className="text-xl mt-4 text-center">
                <span className="text-purple-300 font-semibold">GIS specialist</span>
                <span className="text-gray-300"> exploring the stories hidden in spatial data and automate GIS workflow</span>
                </p>

                <p className="text-xl mt-4 text-center">
                <span className="text-purple-300 font-semibold">Problem-solver</span>
                <span className="text-gray-300"> at heart, whether math, code algorithms or real-world challenges</span>
                </p>

                
            </div>
            </section>



            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Projects</h2>
                {/* 项目内容 */}
            </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">More About Me</h2>
                <p className="text-xl mt-6 text-gray-300 text-center">
                And if you ask me about my hobbies, I might tell you about shipwrecks and in-danger coastal archaeology.
                And I love math (yes, let the stereotypes roll).
                I also hit gym 4-5 times a week and love to play silly video games (a dynamic nerd?).
                </p>
                {/* 个人介绍内容 */}
            </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
                {/* 联系信息 */}
            </div>
        </section>

            </main>
            <footer className="fixed bottom-0 left-0 w-full bg-black text-white py-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>&copy; 2025 9700km studio.  All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}