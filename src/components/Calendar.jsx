import { useEffect, useState } from "react";

function Calendar() {
    
    const [currentDate, setCurrentDate] = useState(new Date());

    const getCurrentDay = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString('default', { month: 'long' });
        const year = today.getFullYear();
        return { day, month, year };
    };


    // Helper Functions to navigate between months
    const handlePrevMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.setMonth(prevDate.getMonth() - 1)));
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.setMonth(prevDate.getMonth() + 1)));
    };

    // Get the first day of the current month
    const getFirstDayOfMonth = () => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    };

    // Get the total number of days in the current month
    const getTotalDaysInMonth = () => {
        return new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    };

    // Generate an array of days to display in the calendar
    const generateCalendarDays = () => {
        const daysInMonth = getTotalDaysInMonth();
        const firstDay = getFirstDayOfMonth();
        const days = [];

        // Fill in the empty slots before the 1st day
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Fill in the days of the current month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }

        return days;
    };

    const { day, month, year } = getCurrentDay();

    const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

    //encontrar current Day index:
    const currentDayIndex = generateCalendarDays().indexOf(day);

    return <>
        <div className="mx-4 md:ml-76 md:mr-10 p-4 h-[85vh]">
            <h6 className="homeH6 text-gray-600">
                Hoy, {day} {month} {year}
                </h6>
            <h3 className="homeH3 p-4">Agenda</h3>
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 transition-discrete ">
                <div className=" h-full w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header con navegación entre meses */}
                    <div className="flex justify-between items-center p-4 bg-[#457FBF] text-white ">
                        <button onClick={handlePrevMonth} className="text-lg">←</button>
                        <span className="text-xl font-semibold">
                            {month} {currentDate.getFullYear()}
                        </span>
                        <button onClick={handleNextMonth} className="text-lg">→</button>
                    </div>
                {/* Días de la semana */}
                    <div className="grid grid-cols-7 text-center bg-gray-100 p-2">
                        {weekdays.map((day, index) => (
                            <div key={index} className="text-sm font-semibold text-gray-700">{day}</div>
                        ))}
                    </div>
                {/* Días del mes */}
                    <div className="grid grid-cols-7 text-center p-2 h-[90%] text-gray-600">
                        {generateCalendarDays().map((day, index) => (
                            <div
                                key={index} className={`py-2 px-4 ${day ? 'cursor-pointer hover:bg-blue-100' : ''} ${!day ? 'bg-gray-100' : ''}
                                ${day === currentDate.getDate() ? 'bg-[#457FBF] text-white ' : ''}`}
                                >
                                {day}
                            </div>
                        ))}
                    </div>
                </div>
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
                                <li className="text-sm text-gray-600 p-2">En 10 dias - Proyecto X</li>
                                <li className="text-sm text-gray-600 p-2">En 2 meses - Proyecto Y</li>
                            </ul>
                        </div>
                        <div className="w-full mb-8">
                            <h5 className="w-full text-center bg-gray-100 p-2 text-sm font-semibold text-gray-700">Tareas</h5>
                            <ul className="my-2 ml-5 pl-4 list-disc ">
                                <li className="text-sm text-gray-600 p-2">Terminar funcionalidad Header</li>
                                <li className="text-sm text-gray-600 p-2">Añadir estilos boton </li>
                                <li className="text-sm text-gray-600 p-2">Comprobar peticiones API</li>
                            </ul>
                            <button className="flex mt-4 buttonPrincipal mx-auto w-auto">Añadir tarea</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Calendar;