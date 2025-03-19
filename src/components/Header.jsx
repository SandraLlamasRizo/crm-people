import { useForm } from "react-hook-form";
import { useEmployeesContext, useOneEmployeeContext } from "../providers/EmployerProvider";
import SearchEmployeeCard from "./SearchEmployeeCard";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Header() {
    const [employees] = useEmployeesContext();
    const { watch, register, setValue } = useForm();
    const searchValue = watch("search", "");
    const [filteredEmployees, setFilteredEmployees] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);
    const username = localStorage.getItem('username');
    const [, setOneEmployee] = useOneEmployeeContext();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    //Cerrar drop down si clickas fuera
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])
    
    // Filtrar empleados cuando cambia el input
    useEffect(() => {
    if (searchValue.trim() === "") {
      setShowResults(false);
      setFilteredEmployees([]);
      return;
    }

        const filtered = employees.filter((emp) => {
            return (
                emp.nombre.toLowerCase().includes(searchValue.toLowerCase()) ||
                emp.apellidos.toLowerCase().includes(searchValue.toLowerCase()) ||
                emp.email.toLowerCase().includes(searchValue.toLowerCase())
                        
            )
        });
    setFilteredEmployees(filtered);
    setShowResults(true);
     
    }, [searchValue, employees]);

    function handleEmployeeClick(id) {
        setShowResults(false); 
        setValue('search', '');
        fetchOneEmployee(id)
    }

    const fetchOneEmployee = async (id) => {
        const config = {
            headers: {
                'Authorization': token
            }
        }
        try {
            const { data } = await axios.get(`https://crm-empleados.onrender.com/api/empleados/${id}`, config);
            console.log("Datos recibidos desde la API:", data)
            setOneEmployee(data);
            navigate(`/dashboard/employees/${id}`)
            // console.log(employees)
        } catch (error) {
            console.log("Error al cargar los empleados", error);
        }
        }

    
    return (<>
    
    <div className=" m-4 grid grid-cols-3 md:grid-cols-2 md:ml-70">
  
        <form className="relative md:pl-10 col-span-2 md:col-span-1" role="search">
            <div className="flex items-center md:max-w-[412px] rounded-2xl px-3 border border-gray-300 hover:border-gray-500 bg-white">
                <span className="text-gray-500"><i className="bi bi-search"></i></span>
            <input 
                type="search" 
                className="form-input w-full p-2 rounded-full outline-none text-md"
                placeholder="Buscar empleado..." 
                aria-label="Search"
                {...register ('search')}  
            />
            </div>
            </form>
            
            {showResults && <div className="absolute inset-0 md:inset-20 w-full h-screen bg-[#ffffff84] mr-8">
                <div ref={searchRef}  className="bg-white p-6 rounded-lg shadow-xl max-w-[390px] md:max-w-[600px] relative top-35 md:top-0 left-5 md:left-60 z-60">
                {filteredEmployees.length > 0 ? (
                    <ul>
                        {filteredEmployees.map((empl, index) => (
                            <li className="cursor-pointer" onClick={() => handleEmployeeClick(empl._id)}>
                                <SearchEmployeeCard empleado={empl } key={index}/>
                            </li>
                        ))}
                        
                    </ul>
                ) : (<p className="p-2 text-gray-500">No se encontraron empleados</p>)
                }
                </div>
            </div>}

        <div className=" text-right md:ml-auto md:pr-10">
            <button type="button" className="btn btn-light rounded-xl px-4 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 text-lg md:text-base">
                <span><i className="bi bi-person-circle"></i></span>
                <span className="hidden md:inline"> {username}</span>
            </button>
        </div>
    </div>

    </>
        
    )
}

export default Header;