import { NavLink } from "react-router";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F4F9FD] text-gray-700">
        <header className="text-center px-6 flex-grow mt-20">
              <img src="./Logo_CRM.svg" alt="" className="w-32 md:w-40 mb-20 mx-auto"/>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Gestiona tu negocio con facilidad
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-80">
          Un CRM potente para optimizar tus ventas y mejorar la relación con tus clientes.
        </p>
        <div className="flex gap-4 w-full justify-center">
            <NavLink to={'/login'}>
                <button className="px-6 py-3 bg-white text-[#457FBF] font-semibold rounded-lg shadow-md hover:bg-gray-200 cursor-pointer transition">Iniciar Sesión</button>
          </NavLink>
            <NavLink to={'/register'}>
                <button className="px-6 py-3 bg-[#457FBF] text-white font-semibold rounded-lg shadow-md hover:bg-[#2664A9] cursor-pointer transition">Registrarse</button>
          </NavLink>
        </div>
    </header>
        <div className="relative bottom-0 w-full max-w-l md:max-w-2xl lg:max-w-4xl flex justify-center pb-10 md:pb-0">
            <img src="./LandingHero.svg" alt="CRM-HERO" className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl object-cover"/>
        </div>
    </div>
  );
}

export default LandingPage;

