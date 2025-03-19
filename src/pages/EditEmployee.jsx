import { useNavigate, useParams } from "react-router";
import { useEmployeesContext } from "../providers/EmployerProvider";
import { useEffect, useState } from "react";
import EmployeeDetailEach from "../components/EmployeeDetailEach";
import axios from "axios";

function EditEmployee() {
    const { employeeId } = useParams();
    const [employees] = useEmployeesContext();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    // console.log("useParams() employeeId:", employeeId);

    // console.log("Employee ID desde useParams:", employeeId);
    // console.log("Lista de empleados en contexto:", employees);

    // Tenemos que buscar al empleado de la lista general:
    // const employee = employees.find(empleado => empleado._id === employeeId);

    // Los datos para el formulario que vamos a modificar son y aparecen vacios:

    const [formData, setFormData] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        departamento: "",
        salario: "",
        observaciones: "",
    })

    //Ahora nos traemos los datos del empleado:

    useEffect(() => {
        if (!employeeId) {
            console.error("No se proporcionó un ID de empleado");
            return;
        }

        const employeeFound = employees.find(emp => emp._id === employeeId);

        if (!employeeFound) {
            console.error("Empleado no encontrado en la base de datos");
            return;
        }
        console.log("Empleado encontrado:", employeeFound);

        setFormData({
            nombre: employeeFound.nombre || "",
            apellidos: employeeFound.apellidos || "",
            email: employeeFound.email || "",
            telefono: employeeFound.telefono || "",
            departamento: employeeFound.departamento || "",
            salario: employeeFound.salario || "",
            observaciones: employeeFound.observaciones || "",
        });
    }, [employeeId, employees]);
    
    // Los cambios del formulario los manejamos ahora:

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    };

    // Como ya están los datos modificados los volvemos a mandar a la Api actualizados:

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`https://crm-empleados.onrender.com/api/empleados/:${employeeId}`, formData, {
                headers: { 'Authorization': token }
            });
                alert("El empleado se ha actualizado correctamente");
            // Vamos a la card del empleado para ver su ficha actualizada:
            navigate(`/employees/${employeeId}`);
        } catch (error) {
            console.error("Error en la actualización del empleado", error);
        }
    }

    return (
        <div className="container flex justify-center">
            <div className="w-full max-w-4xl">
                <h2 className="text-center text-3xl font-medium text-[#457FBF]">Editar empleado</h2>

                {/* Pasamos el employeeId como prop al componente EmployeeDetailEach para que aparezca la card del empleado actual que queremos modificar: */}
                <div className=" ">
                    <EmployeeDetailEach employeeId={employeeId} showActions={false} />
                </div>
                
                {/* Y a continuación ya está el formulario para editar: */}
                <p className=" mb-5 mt-6 text-sm font-extralight  text-gray-500"> INFORMACIÓN PERSONAL:</p>

                <form onSubmit={handleSubmit} >
                    {/* Información Personal */}
                    <div className="mb-3">
                        <label className="block text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]" placeholder="Introducir nombre"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700">Apellidos</label>
                        <input
                            type="text"
                            name="apellidos"
                            value={formData.apellidos}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                            placeholder="Introducir apellidos"
                            required

                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700">Correo electrónico</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                            placeholder="Introducir correo electrónico"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700">Teléfono</label>
                        <input
                            type="number"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                            placeholder=""
                            required
                        />
                    </div>

                    <hr className="border-gray-300 mb-5 mt-6" />

                    {/* Departamento */}
                    <p className=" mb-5 mt-6 text-sm font-extralight  text-gray-500"> INFORMACIÓN LABORAL:</p>
                    <div className="mb-3">
                        <label className="block text-gray-700">Departamento</label>
                        <select
                            name="departamento"
                            value={formData.departamento}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                            required
                        >
                            <option value="">Selecciona el departamento</option>
                            <option value="direccion">Dirección</option>
                            <option value="desarrollo">Desarrollo</option>
                            <option value="diseno">Diseño</option>
                            <option value="recursos humanos">Recursos Humanos</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700">Salario</label>
                        <input
                            type="number"
                            name="salario"
                            value={formData.salario}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                            accept="image/*"
                            placeholder="€"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block text-gray-700">Observaciones</label>
                        <textarea
                            name="observaciones"
                            value={formData.observaciones}
                            onChange={handleChange}
                            id="auto-textarea"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#47A7BD]"
                            placeholder="Introduce texto..."
                            maxLength={500}
                        ></textarea>

                        <div className="text-right text-sm text-gray-500">{formData.observaciones.length}/500</div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="buttonPrincipal buttonPrincipal:hover">
                            Guardar cambios
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditEmployee;