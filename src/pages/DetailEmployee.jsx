import { useEffect } from "react";
import EmployeeDetailEach from "../components/EmployeeDetailEach";



function DetailEmployee() {

    useEffect(() => {
    window.scrollTo(0, 0); 
    }, []);

    return (
        <>
            <div>
                <a
                    href="/dashboard/employees"
                    className="no-underline text-sm flex flex-col items-end  mt-6 pr-4 mr-4 font-normal text-[#47A7BD] hover:underline"
                >
                    Volver a los empleados
                </a>
            </div>

            <div className="mx-6 md:ml-70 my-4">
                <EmployeeDetailEach />

            </div>
            
        </>
    )
}

export default DetailEmployee;