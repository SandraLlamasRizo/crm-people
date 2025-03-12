function Header() {
    
    return (<>
    
    <div className="m-4 grid grid-cols-3 md:grid-cols-2 md:ml-70">
  
        <form className="md:pl-10 col-span-2 md:col-span-1" role="search">
            <div className="flex items-center md:max-w-[412px] rounded-2xl px-3 border border-gray-300 hover:border-gray-500 bg-white">
                <span className="text-gray-500"><i className="bi bi-search"></i></span>
            <input 
                type="search" 
                className="form-input w-full p-2 rounded-full outline-none text-md"
                placeholder="Buscar empleado..." 
                aria-label="Search"
            />
            </div>
        </form>

        <div className=" text-right md:ml-auto md:pr-10">
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