import DepartmentCardLarge from "../components/DepartmentsCardLarge";

function Departments() {
    return (
        <>
            <div className="flex flex-wrap justify-between gap-6 pt-4 pb-6 px-6 mr-2">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <DepartmentCardLarge />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <DepartmentCardLarge />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <DepartmentCardLarge />
                </div>
            </div>

            <div>
                <a
                    href="/dashboard"
                    className="text-blue-500 no-underline hover:underline text-sm abslute flex flex-col items-end pr-4"
                >
                    Volver al Inicio
                </a>
            </div>
        </>
    );
}

export default Departments;
