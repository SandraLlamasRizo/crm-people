import { createContext, useContext, useState } from "react";

//CUSTOM CONTEXTS
const employeesContext = createContext();
const departmentsContext = createContext();

//CUSTOM HOOKS
export function useEmployeesContext() {
    return useContext(employeesContext);
}
export function useDepartmentsContext() {
    return useContext(departmentsContext);
}


function EmployerProvider({ children }) {
    const [employees, setEmployees] = useState([]);
    const [departments, setDepartments] = useState([]);
    
    return <employeesContext.Provider value={[employees, setEmployees ]}>
        <departmentsContext.Provider value={[departments, setDepartments]}>
            {children}
        </departmentsContext.Provider>
    </employeesContext.Provider>

}

export default EmployerProvider;