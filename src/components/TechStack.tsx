// components/TechStack.tsx (分类版本)
interface TechItem {
    name: string;
    icon: string;
    color: string;
    category: 'frontend' | 'backend' | 'gis' | 'tools' | 'database';
    }

    interface TechStackProps {
    techList?: TechItem[];
    showByCategory?: boolean;
    }

    const categorizedTechStack: TechItem[] = [
    // Frontend
    { name: 'React', icon: '/tech-icons/react.svg', color: 'bg-[#61DAFB]', category: 'frontend' },
    { name: 'Next.js', icon: '/tech-icons/nextdotjs.svg', color: 'bg-black', category: 'frontend' },
    
    { name: 'CSS3', icon: '/tech-icons/css.svg', color: 'bg-[#1572B6]', category: 'frontend' },
    { name: 'Tailwind CSS', icon: '/tech-icons/tailwindcss.svg', color: 'bg-[#06B6D4]', category: 'frontend' },
    { name: 'JavaScript', icon: '/tech-icons/javascript.svg', color: 'bg-[#F7DF1E]', category: 'frontend' },
    { name: 'TypeScript', icon: '/tech-icons/typescript.svg', color: 'bg-[#3178C6]', category: 'frontend' },

    // Backend
    { name: 'Python', icon: '/tech-icons/python.svg', color: 'bg-[#3776AB]', category: 'backend' },
    { name: 'Node.js', icon: '/tech-icons/nodedotjs.svg', color: 'bg-[#339933]', category: 'backend' },
    { name: 'Django', icon: '/tech-icons/django.svg', color: 'bg-[#092E20]', category: 'backend' },
    { name: 'Spring', icon: '/tech-icons/spring.svg', color: 'bg-[#6DB33F]', category: 'backend' },
    { name: 'C#', icon: '/tech-icons/csharp.svg', color: 'bg-[#239120]', category: 'backend' },

    // Database
    { name: 'PostgreSQL', icon: '/tech-icons/postgresql.svg', color: 'bg-[#4169E1]', category: 'database' },
    { name: 'MySQL', icon: '/tech-icons/mysql.svg', color: 'bg-[#4479A1]', category: 'database' },

    // GIS
    { name: 'QGIS', icon: '/tech-icons/qgis.svg', color: 'bg-[#589632]', category: 'gis' },
    { name: 'ArcGIS', icon: '/tech-icons/arcgis.svg', color: 'bg-[#2C7DBC]', category: 'gis' },
    { name: 'Google Earth Engine', icon: '/tech-icons/googleearthengine.svg', color: 'bg-[#4285F4]', category: 'gis' },

    // Tools
    { name: 'AWS', icon: '/tech-icons/AWS.png', color: 'bg-[#FF9900]', category: 'tools' },
    { name: 'Git', icon: '/tech-icons/git.svg', color: 'bg-[#F05032]', category: 'tools' },
    { name: 'GitHub', icon: '/tech-icons/github.svg', color: 'bg-[#181717]', category: 'tools' },
    { name: 'Linux', icon: '/tech-icons/linux.svg', color: 'bg-[#FCC624]', category: 'tools' }
    ];

    export default function TechStack({ techList = categorizedTechStack, showByCategory = false }: TechStackProps) {
    if (!showByCategory) {
        return (
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {techList.map((tech) => (
            <TechIcon key={tech.name} tech={tech} />
            ))}
        </div>
        );
    }

    const categories = {
        frontend: techList.filter(t => t.category === 'frontend'),
        backend: techList.filter(t => t.category === 'backend'),
        database: techList.filter(t => t.category === 'database'),
        gis: techList.filter(t => t.category === 'gis'),
        tools: techList.filter(t => t.category === 'tools')
    };

    return (
        <div className="space-y-10">
        {Object.entries(categories).map(([category, items]) => (
            items.length > 0 && (
            <div key={category}>
                <h3 className="text-xl font-semibold text-purple-400 mb-6 text-center capitalize">
                {category}
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
                {items.map((tech) => (
                    <TechIcon key={tech.name} tech={tech} />
                ))}
                </div>
            </div>
            )
        ))}
        </div>
    );
    }

    function TechIcon({ tech }: { tech: TechItem }) {
    return (
        <div className="group relative flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full ${tech.color} flex items-center justify-center p-2 
                        transition-all duration-300 group-hover:scale-120 group-hover:shadow-lg
                        group-hover:ring-2 group-hover:ring-white group-hover:ring-opacity-50`}>
            <img 
            src={tech.icon} 
            alt={tech.name}
            className="w-8 h-8 object-contain filter brightness-0 invert"
            />
        </div>
        <span className="text-sm text-white mt-2 text-center group-hover:text-purple-300 transition-colors">
            {tech.name}
        </span>
        </div>
    );
}