function Header() {
    
    return (
        <div className="container d-flex flex-wrap justify-content-center ">
        <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
          <div className="input-group rounded-pill px-3">
            <span className="input-group-text"><i class="bi bi-search"></i></span>
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
        </div>
        </form>

        <div class="text-end">
          <button type="button" className="btn btn-light rounded-pill px-3"><span><i class="bi bi-person-circle"></i></span> Nombre Usuario </button>
        </div>
        </div>
    )
}

export default Header;