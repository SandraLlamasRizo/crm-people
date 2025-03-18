import { NavLink } from "react-router";

function LandingPage() {
    return (
        <div className="h-screen grid grid-rows-[2fr_1fr] lg:grid-rows-2 overflow-hidden gap-4 bg-[#F4F9FD] text-gray-700">
            <header className="flex flex-col items-center justify-center text-center md:pt-5 px-5 md:px-10 my-auto z-10 min-h-0 flex-grow">
                <img src="./Logo_CRM.svg" alt="" className="w-32 md:w-40 lg:w-48 mb-6" />
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Gestiona tu negocio con facilidad
                </h1>
                <p className="text-lg md:text-xl mb-6 opacity-80">
                    Un CRM potente para optimizar tus ventas y mejorar la relación con tus clientes.
                </p>
                <div className="flex gap-4 w-full justify-center">
                    <NavLink to={'/login'}>
                        <button className="buttonSecundario">Iniciar Sesión</button>
                    </NavLink>
                    <NavLink to={'/register'}>
                        <button className="buttonPrincipal">Registrarse</button>
                    </NavLink>
                </div>
            </header>
            <div className="h-full flex items-end justify-center px-4 md:px-0 min-h-0 flex-grow">
                <img src="./LandingHero.svg" alt="CRM-HERO" className="h-full max-w-lg md:max-w-2xl lg:max-w-6xl max-h-[45vh] md:max-h-[50vh] lg:max-h-[40vh] object-contain" />
            </div>
        </div>
    );
}

export default LandingPage;

