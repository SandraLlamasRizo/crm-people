function Header() {
    
    return (<>
    
    <div className="mt-8 mr-2 grid grid-cols-2 gap-4">
  
  <form className="mt-8 md:mt-0 w-full md:w-auto mb-2 md:mb-0 md:ml-4" role="search">
    <div className="flex items-center md:max-w-[412px] rounded-full px-3 border border-gray-300 hover:border-gray-500">
      <span className="text-gray-500"><i className="bi bi-search"></i></span>
      <input 
        type="search" 
        className="form-input w-full p-2 rounded-full outline-none text-lg md:text-base"
        placeholder="Buscar empleado..." 
        aria-label="Search"
      />
    </div>
  </form>


  <div className="mt-8 md:mt-0 text-center md:text-right md:ml-auto">
    <button 
      type="button" 
      className="btn btn-light rounded-full px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 text-lg md:text-base">
      <span><i className="bi bi-person-circle"></i></span>
      <span className="hidden md:inline"> Nombre Usuario</span>
    </button>
  </div>
</div>

    </>
        
    )
}

export default Header;