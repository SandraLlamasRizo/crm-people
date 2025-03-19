import React, { useState } from 'react';
import { useEmployeesContext } from '../providers/EmployerProvider';

function CorreosEmpleados() {
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);  // Página actual
    const emailsPerPage = 6;  // Correos por página

    // Usamos el contexto de empleados
    const [employees] = useEmployeesContext(); // Obtener los empleados del contexto

    // Si los empleados no están cargados, puedes poner un mensaje de "cargando"
    if (!employees || employees.length === 0) {
        return <div>Cargando empleados...</div>;
    }

    // Función para generar un asunto y cuerpo aleatorio
    const generateRandomEmailContent = () => {
        const subjects = [
            'Consulta sobre el proyecto',
            'Urgente: Necesito información',
            'Confirmación de reunión',
            'Solicitud de ayuda',
            'Revisión de tareas pendientes'
        ];

        const bodies = [
            'Por favor, revisa los detalles adjuntos...',
            'Agradecería una pronta respuesta...',
            'Confirmación para el viernes...',
            '¿Puedes ayudarme con esto?',
            'No olvides la reunión de mañana'
        ];

        const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
        const randomBody = bodies[Math.floor(Math.random() * bodies.length)];

        return {
            subject: randomSubject,
            body: randomBody,
        };
    };

    // Generamos los correos
    const emails = employees.map((employee) => ({
        id: employee._id,
        from: employee.email,
        subject: generateRandomEmailContent().subject,
        date: new Date().toLocaleDateString(),
        preview: generateRandomEmailContent().body,  // Aquí mostramos una parte del cuerpo
    }));

    // Lógica para la paginación
    const indexOfLastEmail = currentPage * emailsPerPage;
    const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
    const currentEmails = emails.slice(indexOfFirstEmail, indexOfLastEmail);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSelectEmail = (email) => {
        setSelectedEmail(email);
    };

    // Calcular el número total de páginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(emails.length / emailsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex flex-col md:ml-70">
            {/* Título */}
            <h1 className="homeH3 mb-4 ml-4">
                Correo
            </h1>
            <div className="flex flex-col">
                <div className="bg-[#457FBF] text-white p-4 shadow-md rounded-2xl mb-3 ml-4 mr-3">
                    <h2 className="text-xl font-bold">Bandeja de Entrada</h2>
                </div>

                {/* Vista de Detalles del Correo */}
                <div className=" p-6 bg-white shadow-md rounded-lg mx-auto sm:mx-4 my-4 ">
                    {selectedEmail ? (
                        <>
                            <h2 className="text-2xl font-semibold text-gray-800">{selectedEmail.subject}</h2>
                            <p className="mt-2 text-lg font-medium text-gray-700">{selectedEmail.from}</p>
                            <p className="text-sm text-gray-500">{selectedEmail.date}</p>
                            <p className="mt-4 text-gray-600">{selectedEmail.preview}</p> {/* Cuerpo del correo */}
                        </>
                    ) : (
                        <p className="text-center text-gray-500">Selecciona un correo para ver los detalles</p>
                    )}
                </div>

                {/* Email List */}
                <div className="w-full sm:w-full p-4 overflow-y-auto bg-white shadow-md rounded-lg mx-auto sm:mx-4 my-4">
                    {currentEmails.map((email) => (
                        <div
                            key={email.id}
                            className="p-4 mb-4 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
                            onClick={() => handleSelectEmail(email)}
                        >
                            <div className="flex justify-between items-center">
                                <p className="font-semibold text-gray-800">{email.from}</p>
                                <p className="text-sm text-gray-500">{email.date}</p>
                            </div>
                            <p className="text-gray-700 mt-2">{email.subject}</p>
                            <p className="text-sm text-gray-500 mt-1">{email.preview}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-6 space-x-2">
                    {pageNumbers.map((number) => (
                        <button
                            key={number}
                            onClick={() => paginate(number)}
                            className={`px-6 py-3 text-sm font-semibold rounded-full transition-all duration-200 ease-in-out 
                                ${currentPage === number
                                    ? 'bg-[#457FBF] text-white opacity-100'
                                    : 'bg-[#47A7BD] text-white opacity-50 hover:bg-[#47A7BD] hover:opacity-100'} 
                                hover:scale-105 shadow-md`}
                        >
                            {number}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CorreosEmpleados;
