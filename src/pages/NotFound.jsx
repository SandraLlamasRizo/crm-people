function NotFound() {
    return (
        <div className="bg-gray-100 text-[#47A7BD] min-h-screen flex items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-6xl md:text-8xl font-bold">404</h1>
                <p className="text-lg md:text-2xl font-medium mt-4">¡Ups! Página no encontrada</p>
                <p className="mt-4 mb-6 text-gray-600">
                    La página que estás buscando no existe o ha sido eliminada.
                </p>
                <div className="flex justify-center space-x-4">
                    <a
                        href="/"
                        className="bg-white text-gray-500 font-semibold rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition"
                    >
                        <i className="bi bi-house-door mr-2"></i>
                        Go Home
                    </a>
                    <a
                        href="/"
                        className="bg-white text-gray-500 font-semibold rounded-full px-6 py-3 shadow-md hover:bg-gray-200 transition"
                    >
                        <i className="bi bi-envelope me-2"></i>
                        Contacto
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
