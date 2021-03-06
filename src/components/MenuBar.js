function MenuBar({search}) {
    return (
        <div className="builder-conteiner">


            <nav
                className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
                <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                    <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                        <span className="font-semibold text-xl tracking-tight">Shopping Cart</span>
                    </div>
                    <div className="block lg:hidden ">
                        <button
                            id="nav"
                            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                    <div className="text-md font-bold text-blue-700 lg:flex-grow">
                        <a href="#responsive-header"
                            class="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                            Menu 1
                </a>
                        <a href="#responsive-header"
                            className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                            Menu 2
                </a>
                        <a href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                            Menu 3
                </a>
                    </div>

                    <div class="relative mr-6 my-2">
                        <input type="search" onChange={(e) => search(e)} class="bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..." />
                        <div class="absolute pin-r pin-t mt-3 mr-4 text-purple-lighter">

                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default MenuBar;