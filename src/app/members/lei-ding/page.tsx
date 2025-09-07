import ResumeNavigation from '../../../components/NavigationResume';
import CustomCursor from '../../../components/CustomCursor'; 

export default function LeiDingResume() {
    return (
        <div className="min-h-screen bg-gray-800">
        <CustomCursor/>
        <ResumeNavigation personName="Lei Ding" />
        
        <main className="pt-20"> 
            <section id="aboutMe" className="py-20 bg-black">
            <div className="max-w-4xl mx-auto text-center">
                <h1 
                className="text-2xl font-bold text-gray-300 mb-6 text-center"
                style={{ textShadow: "2px 2px 4px rgba(39, 2, 64, 0.6)" }}
                >
                Hi, I’m Lei
                </h1>

                <p className="text-md mt-4 text-center">
                <span className="text-purple-300 font-semibold">Full-stack developer</span>
                <span className="text-gray-300"> with a passion for turning ideas into functional applications</span>
                </p>

                <p className="text-md mt-4 text-center">
                <span className="text-purple-300 font-semibold">GIS specialist</span>
                <span className="text-gray-300"> exploring the stories hidden in spatial data and automate GIS workflow</span>
                </p>

                <p className="text-md mt-4 text-center">
                <span className="text-purple-300 font-semibold">Problem-solver</span>
                <span className="text-gray-300"> at heart, whether math, code algorithms or broken door hedges</span>
                </p>

                
            </div>
            </section>



            <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
                
                {/* 项目卡片容器 - 使用网格布局 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* 项目卡片 1 */}
                    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src="/images/project1.jpg" alt="项目 1 的图片" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">项目标题 1</h3>
                            <p className="text-gray-400">
                                这里是项目的简短描述。这个项目主要关注于... (例如：构建一个用户友好的待办事项清单应用，使用 React 和 Tailwind CSS)。
                            </p>
                        </div>
                    </div>

                    {/* 项目卡片 2 */}
                    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src="/images/project2.jpg" alt="项目 2 的图片" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">项目标题 2</h3>
                            <p className="text-gray-400">
                                这个项目的描述。它可能是一个 GIS 数据可视化工具，展示了... (例如：城市人口密度变化)。
                            </p>
                        </div>
                    </div>
                    
                    {/* 项目卡片 3 */}
                    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src="/images/project3.jpg" alt="项目 3 的图片" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">项目标题 3</h3>
                            <p className="text-gray-400">
                                这是第三个项目的描述。也许它是一个使用 Python 脚本自动化... (例如：数据抓取和分析) 的工作。
                            </p>
                        </div>
                    </div>
                    
                    {/* 项目卡片 4 */}
                    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                        <img src="/images/project4.jpg" alt="项目 4 的图片" className="w-full h-48 object-cover"/>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white mb-2">项目标题 4</h3>
                            <p className="text-gray-400">
                                最后一个项目的描述。它可能是一个关于... (例如：水下考古数据) 的网站。
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">More About Me</h2>
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
        </div>
    )
}