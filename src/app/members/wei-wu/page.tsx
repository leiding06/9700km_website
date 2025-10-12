import Navigation from '../../../components/Navigation';
export default function WeiWuResume(){
    return(
        <div className="min-h-screen bg-black flex flex-col  ">
            {/* React component reference Navigation*/}
            <Navigation />
            <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
            <div className="w-full min-h-[100vh] flex justify-center items-center">
            <a
                href="https://www.linkedin.com/in/%E5%94%AF-%E5%91%89-462a82371?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpCwAGwfbRYed%2BCID%2B1Gnqw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 text-base font-semibold text-white bg-white/10 border border-white rounded-lg hover:bg-white/40 hover:text-black transition"
            >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.22 107.3 0 83 0 53.9A53.29 53.29 0 0153.68 0a53.22 53.22 0 0153.56 53.9c0 29-24.22 53.4-53.4 53.4zM447.84 448h-92.4V302.4c0-34.7-12.45-58.4-43.53-58.4-23.74 0-37.91 16-44.18 31.4-2.27 5.6-2.84 13.4-2.84 21.3V448h-92.48s1.24-236.5 0-261h92.48v37c12.29-19 34.3-46.2 83.5-46.2 60.88 0 106.72 39.6 106.72 124.7V448z"/>
                </svg>
                Contact Wei on Linkedin
            </a>
            </div>



            </main>
            <footer className="fixed bottom-0 left-0 w-full bg-black text-white py-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p>&copy; 2025 9700km studio.  All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}