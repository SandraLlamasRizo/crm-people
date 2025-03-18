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

    return <>
        <div className="mx-4 md:ml-76 md:mr-10">
            <h6 className="homeH6 text-gray-600">
                Hoy, {day} {month} {year}
                </h6>
            <h3 className="homeH3 p-4">Calendario</h3>
            <div className=" h-full w-full mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header con navegación entre meses */}
            <div className="flex justify-between items-center p-4 bg-[#457FBF] text-white">
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
            <div className="grid grid-cols-7 text-center p-2 h-[60vh] md:h-[60vh]">
                {generateCalendarDays().map((day, index) => (
                    <div
                        key={index}
                        className={`py-2 px-4 ${day ? 'cursor-pointer hover:bg-blue-100' : ''} ${!day ? 'bg-gray-100' : ''}`}
                    >
                        {day}
                    </div>
                ))}
            </div>
        </div>
        </div>
    </>
}

export default Calendar;