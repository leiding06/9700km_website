import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
// React component homepage
//app/page.tsx -> main page url
export default function HomePage() {
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
    description: "Advanced mortgage calculator with inflation projection, showing how future payments compare to today's purchasing power. Make informed financial decisions with real-value insights.",
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
    <div className="min-h-screen bg-gray-800 flex flex-col">
      
      {/* React component reference Navigation*/}
      <Navigation />

      {/*React JSX use HTML with JS/ts */}
      {/* Main Content - 添加 flex-grow 让内容区域撑满剩余空间 */}
      <main className="flex-grow max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-200 sm:text-5xl md:text-6xl pt-8">
            Hello World! 
            
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-8 md:text-xl md:max-w-5xl">
            
            The journey is starting this very moment. Please see ongoing project below...
          </p>
        </div>

    
        {/* 使用 ProjectCard 组件 */}
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

            

        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">
            More?
          </h2>
          <div className="space-x-4">
            <button className="bg-purple-700 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200">
              Connect with us
            </button>
            <button className="border border-purple-600 text-purple-600 hover:bg-gray-700 font-bold py-2 px-6 rounded-lg transition duration-200">
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
    </div>
  );
}