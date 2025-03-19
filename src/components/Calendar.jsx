import { useEffect, useState } from "react";

function Calendar() {
    const [showModalTarea, setModalTarea] = useState(false);

    const handleTarea = () => {
        setModalTarea(true)
    }

    const handleCloseTarea = () => {
        setModalTarea(false)
    }

    const [currentDate, setCurrentDate] = useState(new Date());

    const getCurrentDay = () => {
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'long' });
        const year = currentDate.getFullYear();
        return { day, month, year };
    };

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    const getFirstDayOfMonth = () => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    };

    const getTotalDaysInMonth = () => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    };

    const generateCalendarDays = () => {
        const daysInMonth = getTotalDaysInMonth();
        const firstDay = getFirstDayOfMonth();
        const days = [];

        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }

        return days;
    };

    const { day, month, year } = getCurrentDay();

    const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    return (
        <>
            {showModalTarea && (
                <div className="fixed inset-0 flex items-center justify-center  bg-[#F4F9FD] bg-opacity-20 z-50">
                    <div className=" bg-white p-6 rounded-lg shadow-lg text-center m-30">
                        <h1 className="text-xl font-bold mb-2">Esto es solo un prototipo</h1>
                        <p className="text-gray-700 mb-4">No se pueden añadir tareas, pulsa para volver a Calendar</p>
                        <button onClick={handleCloseTarea} className="buttonPrincipal w-full">PULSA AQUI</button>
                    </div>
                    
                </div>
            )}
        <div className="mx-4 md:ml-76 md:mr-10">
            <h6 className="homeH6 text-gray-600 p-4 pb-0">
                Hoy, {new Date().getDate()} {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}
            </h6>
            <h3 className="homeH3 p-4">Agenda</h3>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 md:gap-6">
                <div className="h-full w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Header con navegación entre meses */}
                    <div className="flex justify-between items-center p-4 bg-[#457FBF] text-white">
                        <button onClick={handlePrevMonth} className="text-lg hover:cursor-pointer">←</button>
                        <span className="text-xl font-semibold">
                            {month} {year}
                        </span>
                        <button onClick={handleNextMonth} className="text-lg hover:cursor-pointer">→</button>
                    </div>

                    {/* Días de la semana */}
                    <div className="grid grid-cols-7 text-center bg-gray-100 p-2 overflow-y-auto ">
                        {weekdays.map((day, index) => (
                            <div key={index} className="text-sm font-semibold text-gray-700">{day}</div>
                        ))}
                    </div>

                    {/* Días del mes */}
                    <div className="grid grid-cols-7 text-center p-2 md:h-[60vh]">
                        {generateCalendarDays().map((day, index) => (
                            <div
                                key={index}
                                className={`py-2 px-4 ${day ? 'cursor-pointer hover:bg-blue-100' : ''
                                    } ${!day ? 'bg-gray-100' : ''
                                    } ${day === currentDate.getDate() ? 'bg-[#457FBF] text-white' : ''
                                    }`}
                            >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Eventos */}
                <div className="h-full w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex flex-col justify-center items-center ">
                        <h4 className="w-full text-center p-4 text-xl font-semibold bg-[#457FBF] text-white">Eventos</h4>
                        <div className="w-full mb-8">
                            <h5 className="w-full text-center bg-gray-100 p-2 text-sm font-semibold text-gray-700">Reuniones</h5>
                            <ul className="my-2 pl-4">
                                <li className="text-sm text-gray-600 p-2">8:15h: Proyecto crm-people</li>
                                <li className="text-sm text-gray-600 p-2">10:00h: Cliente</li>
                                <li className="text-sm text-gray-600 p-2">21:00h: Presentación Proyecto crm-people</li>
                            </ul>
                        </div>
                        <div className="w-full mb-8">
                            <h5 className="w-full text-center bg-gray-100 p-2 text-sm font-semibold text-gray-700">Deadlines</h5>
                            <ul className="my-2 pl-4">
                                <li className="text-sm text-gray-600 p-2">Hoy! Proyecto crm-people</li>
                                <li className="text-sm text-gray-600 p-2">En 10 días - Proyecto X</li>
                                <li className="text-sm text-gray-600 p-2">En 2 meses - Proyecto Y</li>
                            </ul>
                        </div>
                        <div className="w-full mb-8">
                            <h5 className="w-full text-center bg-gray-100 p-2 text-sm font-semibold text-gray-700">Tareas</h5>
                            <ul className="my-2 ml-5 pl-4 list-disc">
                                <li className="text-sm text-gray-600 p-2">Terminar funcionalidad Header</li>
                                <li className="text-sm text-gray-600 p-2">Añadir estilos botón</li>
                                <li className="text-sm text-gray-600 p-2">Comprobar peticiones API</li>
                            </ul>
                            <button onClick={handleTarea} className="flex mt-4 buttonPrincipal mx-auto w-auto">Añadir tarea</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </> );
}

export default Calendar;
