import Navigation from "../components/Navigation";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation*/}
      <Navigation />


      {/* 主要内容 */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* 英雄区域 */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            欢迎来到
            <span className="text-blue-600"> 9700km</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            我们是一个充满激情的开发团队，致力于创建有意义的项目和解决方案。
          </p>
        </div>

        {/* 团队特色 */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">💻</span>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">技术创新</h3>
              <p className="mt-2 text-gray-500">
                使用最新的技术栈，打造现代化的解决方案
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🤝</span>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">团队协作</h3>
              <p className="mt-2 text-gray-500">
                跨越距离的合作，共同实现目标
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">快速迭代</h3>
              <p className="mt-2 text-gray-500">
                从想法到实现，快速验证和迭代
              </p>
            </div>
          </div>
        </div>

        {/* 行动号召 */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            想了解更多？
          </h2>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200">
              查看项目
            </button>
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 px-6 rounded-lg transition duration-200">
              了解团队
            </button>
          </div>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 9700km studio. </p>
        </div>
      </footer>
    </div>
  );
}