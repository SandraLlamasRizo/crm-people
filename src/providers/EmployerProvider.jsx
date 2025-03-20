import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//CUSTOM CONTEXTS ==> creo los contextos:
const EmployeesContext = createContext();
const OneEmployeeContext = createContext();
const UserContext = createContext();

//CUSTOM HOOKS ==> Los creo para acceder a los contextos fácilmente:
export function useEmployeesContext() {
    return useContext(EmployeesContext);
}
export function useOneEmployeeContext() {
    return useContext(OneEmployeeContext);
}
export function useUserContext() {
    return useContext(UserContext);
}

// CREO EL PROVIDER ==> para envolver la app y poder manejar con useState los datos:
function EmployerProvider({ children }) {
    //Estos son los estados globales para empleados y departamentos:
    const [employees, setEmployees] = useState([]);
    const [oneEmployee, setOneEmployee] = useState(null);
    const [user, setUser] = useState("Usuario");
    const token = localStorage.getItem('token');
    
    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        const config = {
            headers: {
                'Authorization': token
            }
        }
        try {
            const { data } = await axios.get('https://crm-empleados.onrender.com/api/empleados', config);
            setEmployees(data);
            // console.log(employees)
        } catch (error) {
            console.log("Error al cargar los empleados", error);
        } 
    }

    return <EmployeesContext.Provider value={[employees, setEmployees ]}>
        <UserContext.Provider value={[user, setUser]}>
            <OneEmployeeContext.Provider value={[oneEmployee, setOneEmployee ]}>
                {children}
            </OneEmployeeContext.Provider>
            </UserContext.Provider>
    </EmployeesContext.Provider>

    
    
}

export default EmployerProvider;