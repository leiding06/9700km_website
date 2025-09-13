import ResumeNavigation from '../../../components/NavigationResume';
import CustomCursor from '../../../components/CustomCursor'; 
import ProjectCard from "../../../components/ProjectCard";

export default function LeiDingResume() {
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

           {/* Current Role */}
            <section
                id="current"
                className="relative py-20 min-h-[400px] bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/GIS.png')" }}
                >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
                
            <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Current Position</h2>
        
        
            <div className="mb-12">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-purple-400">Senior GIS Officer & Team Lead & Developer</h3>
                    <span className="text-gray-400">02/2024 – Present</span>
                </div>
                <p className="text-gray-300 mb-2">Headland Archaeology · Leading GIS innovation in archaeology</p>
                <p className="text-gray-300 mb-2"> Headland Archaeology is the UK’s leading, privately-owned provider of heritage services to the development and construction sectors.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <h4 className="text-purple-300 font-semibold mb-2">Technical Leadership</h4>
                        <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Lead GIS team on major UK infrastructure projects</li>
                            <li>• Developed 10+ QGIS plugins & 50+ automation scripts</li>
                            <li>• Developed automated reporting dashboards linking excavation data to GIS databases, improving data transparency for project teams and stakeholders.</li>
                        </ul>
                    </div>
                    
                    <div className="bg-gray-900 p-4 rounded-lg">
                        <h4 className="text-purple-300 font-semibold mb-2">🛠 Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">QGIS</span>
                            <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Python</span>
                            <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">PostgreSQL</span>
                            <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">AWS</span>
                            <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Esri Family</span>
                            <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">HTML&CSS</span>
                            <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">JS & TS</span>
                            <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Agisoft Metashape</span>
                            <span className="bg-purple-600 px-2 py-1 rounded text-xs text-white">Blender</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </section>
            

            <section id="projects" className="py-20 bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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