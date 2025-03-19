import EmployeeDetailEach from "../components/EmployeeDetailEach";



function DetailEmployee() {

    return (
        <>

            <div className="mx-6 md:ml-70 my-8">
                <EmployeeDetailEach />

            </div>
            <div>
                <a
                    href="/dashboard/employees"
                    className="no-underlinetext-sm abslute flex flex-col items-end pr-4 mr-4 font-normal text-[#47A7BD] hover:underline"
                >
                    Volver a los empleados
                </a>
            </div>
        </>
    )
}

export default DetailEmployee;