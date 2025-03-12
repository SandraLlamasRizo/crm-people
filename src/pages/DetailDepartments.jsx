import DepartmentDetailsEach from "../components/DepartmentDetailsEach";

function DetailDepartments() {
    return (
        <>
            <div>
                <DepartmentDetailsEach />
            </div>

            <div>
                <a
                    href="/departments"
                    className="no-underline hover:underline text-sm bottom-4 right-4 flex flex-col items-end pr-4" style={{ color: "#457FBF" }}
                >
                    Volver a departamentos
                </a>
            </div>
        </>
    );
}

export default DetailDepartments;
