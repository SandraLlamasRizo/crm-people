import { createContext, useContext, useState } from "react";

//CUSTOM CONTEXTS
const employeesContext = createContext();
const sectionsContext = createContext();

//CUSTOM HOOKS
export function useEmployeesContext() {
    return useContext(employeesContext);
}
export function useSectionsContext() {
    return useContext(sectionsContext);
}


function EmployerProvider({ children }) {
    const [employees, setEmployees] = useState([]);
    const [sections, setSections] = useState([]);
    
    return <employeesContext.Provider value={[employees, setEmployees ]}>
        <sectionsContext.Provider value={[sections, setSections]}>
            {children}
        </sectionsContext.Provider>
    </employeesContext.Provider>

}

export default EmployerProvider;