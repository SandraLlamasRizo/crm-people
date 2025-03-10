function Header() {
    
    return (<>
    
    <div className="my-2 mr-2 grid grid-cols-2 gap-4 md:ml-70">
  
        <form className="w-full md:w-auto p-4" role="search">
            <div className="flex items-center md:max-w-[412px] rounded-2xl px-3 border border-gray-300 hover:border-gray-500 bg-white">
                <span className="text-gray-500"><i className="bi bi-search"></i></span>
            <input 
                type="search" 
                className="form-input w-full p-2 rounded-full outline-none text-sm md:text-lg"
                placeholder="Buscar empleado..." 
                aria-label="Search"
            />
            </div>
        </form>

        <div className="text-center md:text-right md:ml-auto p-4 md:pr-10">
            <button type="button" className="btn btn-light rounded-xl px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 text-lg md:text-base">
                <span><i className="bi bi-person-circle"></i></span>
                <span className="hidden md:inline"> Nombre Usuario</span>
            </button>
        </div>
    </div>

    </>
        
    )
}

export default Header;