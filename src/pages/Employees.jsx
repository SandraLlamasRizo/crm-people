import EmployeeCardLarge from "../components/EmployeeCardLarge";

function Employees() {

    return <>
        <div>
            <h2>Employees(0)</h2>
            <div>
                <button>Nombre</button>
                <button>Apellidos</button>
                <button>Email</button>
            </div>
            <button></button>
        </div>
    <div>
      <EmployeeCardLarge/>
  </div>
    </>
    
}

export default Employees;