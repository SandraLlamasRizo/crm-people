import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

//CUSTOM CONTEXTS ==> creo los contextos:
const EmployeesContext = createContext();

//CUSTOM HOOKS ==> Los creo para acceder a los contextos fácilmente:
export function useEmployeesContext() {
    return useContext(EmployeesContext);
}

// CREO EL PROVIDER ==> para envolver la app y poder manejar con useState los datos:
function EmployerProvider({ children }) {
    //Estos son los estados globales para empleados y departamentos:
    const [employees, setEmployees] = useState([]);
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
            console.log(data)
            setEmployees(data);
            console.log(employees)
        } catch (error) {
            console.log(error);
        }
    }



    
    
    return <EmployeesContext.Provider value={[employees, setEmployees ]}>
        {children}
    </EmployeesContext.Provider>

}

export default EmployerProvider;