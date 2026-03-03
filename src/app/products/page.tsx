import Link from 'next/link';

export default function Products() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Products
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Discover our innovative solutions designed to empower your business
          </p>
        </div>
        
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Yazzo Product Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Yazzo</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Our flagship product revolutionizing the industry
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">Yazzo</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              {/* Add product features */}
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Feature 1</span>
              </li>
            </ul>
            <Link href="/products/yazzo" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900">
              Learn More
            </Link>
          </div>

          {/* Yazzo App Product Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Yazzo App</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Mobile solution for modern businesses
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">App</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
              {/* Add app features */}
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Feature 1</span>
              </li>
            </ul>
            <Link href="/products/yazzo-app" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-blue-900">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}