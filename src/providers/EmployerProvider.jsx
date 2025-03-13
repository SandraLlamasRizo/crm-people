import { createContext, useContext, useState } from "react";

//CUSTOM CONTEXTS ==> creo los contextos:
const EmployeesContext = createContext();
const DepartmentsContext = createContext();

//CUSTOM HOOKS ==> Los creo para acceder a los contextos fácilmente:
export function useEmployees() {
    return useContext(EmployeesContext);
}
export function useDepartments() {
    return useContext(DepartmentsContext);
}

// CREO EL PROVIDER ==> para envolver la app y poder manejar con useState los datos:
function EmployerProvider({ children }) {
    //Estos son los estados globales para empleados y departamentos:
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    
    return <EmployeesContext.Provider value={[employees, setEmployees ]}>
        <DepartmentsContext.Provider value={[departments, setDepartments]}>
            {children}
        </DepartmentsContext.Provider>
    </EmployeesContext.Provider>

}

export default EmployerProvider;