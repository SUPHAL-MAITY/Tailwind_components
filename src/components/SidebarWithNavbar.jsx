import React, { useState } from "react";

const SidebarWithNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleSidebarToggle = () => {
    console.log("button clicked");

    setIsSidebarOpen((prev) => !prev);
  };

 
  return (
    <>
      <div>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start rtl:justify-end">
                <button
                  onClick={handleSidebarToggle}
                  data-drawer-target="logo-sidebar"
                  data-drawer-toggle="logo-sidebar"
                  aria-controls="logo-sidebar"
                  type="button"
                  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                  </svg>
                </button>
                <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                  <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    class="h-8 me-3"
                    alt="FlowBite Logo"
                  />
                  <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                    Dashboard
                  </span>
                </a>
              </div>

              <div className="flex items-center">
                <div className="flex items-center ms-3">
                  {/* ////button htmlFor profile dropdown */}
                  <div>
                    <button
                     
                      type="button"
                      className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        class="w-8 h-8 rounded-full"
                        src="data:image/webp;base64,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"
                        alt="user photo"
                      />
                    </button>
                  </div>

                  
                 



                </div>
              </div>
            </div>
          </div>
        </nav>

        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }   bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar"`}
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 flex flex-col items-start font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-5">Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 18"
                  >
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span className="flex-1 ms-5 whitespace-nowrap">Kanban</span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="flex-1 ms-5 whitespace-nowrap">Inbox</span>
                  <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    3
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-5 whitespace-nowrap">Users</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1 ms-5 whitespace-nowrap">
                    Products
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                    />
                  </svg>
                  <span className="flex-1 ms-5 whitespace-nowrap">Sign In</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                  </svg>
                  <span className="flex-1 ms-5 whitespace-nowrap">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14"></div>

          {/* main content here */}

         

        </div>
      </div>
    </>
  );
};

export default SidebarWithNavbar;
