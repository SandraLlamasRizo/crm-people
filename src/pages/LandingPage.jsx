import { NavLink } from "react-router";

function LandingPage() {
    return (
        <div className="h-screen flex flex-col items-center align-middle justify-end bg-[#F4F9FD] text-gray-700">
            <header className="text-center px-5 md:px-10 my-auto">
                <img src="./Logo_CRM.svg" alt="" className="w-40 md:w-50 my-auto mx-auto" />
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
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
            <div className="relative bottom-0 w-full max-w-l md:max-w-4xl flex justify-center">
                <img src="./LandingHero.svg" alt="CRM-HERO" className="w-full max-w-lg md:max-w-4xl  object-cover" />
            </div>
        </div>
    );
}

export default LandingPage;

