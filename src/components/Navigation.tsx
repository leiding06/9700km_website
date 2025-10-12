"use client" //mark as client end use to be able to use the 'usePathname', otherwise, server components can't use that
import Image from 'next/image'

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

// A single nav part - like 'Members'
// NavLinkProps - TypeScript interface - help to check if the type href and children are using correct content.
//def a part NavLink, which can be used as a HTML Label <NavLink href="/home">Home</NavLink>
//isActive? --means this is optional
function NavLink({ href, children, isActive }: NavLinkProps & { isActive?: boolean }) {
  return (
    <a 
      href={href} 
      className={`font-medium transition-colors duration-200 ${
        isActive ? "text-neutral-400" : "text-white hover:text-neutral-400" //color change for active part
      }`}
    >
      {children}
    </a>
  );
}

// From Next Frame
import { usePathname } from 'next/navigation';

// For JS (ES Modules), if a part need to be use by another file, need export
export default function Navigation() {
  const pathname = usePathname();
  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/members", label: "MEMBER" },
    { href: "/projects", label: "PROJECTS" },
    
  ];

  return (
    // Make the nav bar locked on the top 
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-md z-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 这里是响应式flex，默认竖直（flex-col），sm及以上变水平（flex-row） */}
        <div className="flex flex-col sm:flex-row justify-between h-16 items-center">

          <div className="flex items-center">
            <Image 
              src="/LOGO_9700km_bk.png" 
              alt="9700km Logo" 
              width={80} 
              height={80} 
              priority
            />
          </div>
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.label} 
                href={item.href}
                isActive={pathname === item.href} //if the current nav part is active,pathname == item.href
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}