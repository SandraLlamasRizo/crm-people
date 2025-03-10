import React from 'react';

function Footer() {
    return (
        <div className='container-footer '>
            <footer className="bottom-0 w-full text-gray-500 bg-[#F4F9FD]">
                <div className="mx-auto flex flex-wrap items-center justify-center md:justify-between gap-4">
                    <p className="text-sm text-center md:text-left">
                        <span className="font-light">  Copyright © 2025 · CRM People®</span>
                    </p>
                    <nav className="font-light text-sm text-center md:text-left space-x-4">
                        <a href="#" className="hover:underline">| AVISO LEGAL</a>
                        <a href="#" className="hover:underline">| POLÍTICA DE PRIVACIDAD</a>
                        <a href="#" className="hover:underline">| COOKIES</a>
                        <a href="#" className="hover:underline">| FAQs</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer;




// export function Footer() {
//     return (
//         <footer className="py-4 bg-gray-900 text-white">
//             <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:justify-between">
//                 <p className="text-sm text-center md:text-left">
//                     &copy; {new Date().getFullYear()} - Hecho con
//                     <span className="inline-block text-red-500 mx-1">❤️</span>
//                     por <span className="font-bold">Tu Marca</span>
//                 </p>
//                 <nav>
//                     <ul className="flex flex-wrap justify-center gap-4 text-sm md:justify-end">
//                         <li>
//                             <a href="#" className="hover:text-blue-400 transition-colors">Inicio</a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-blue-400 transition-colors">Nosotros</a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-blue-400 transition-colors">Blog</a>
//                         </li>
//                         <li>
//                             <a href="#" className="hover:text-blue-400 transition-colors">Contacto</a>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
{/* <ul className="container mx-auto text-center">
                <li className="text-xs sm:text-sm font-light tracking-wide">Copyright © 2025 ·  CRM people®</li>
                <li className="text-xs sm:text-sm font-light tracking-wide">AVISO LEGAL | POLÍTICA DE PRIVACIDAD | COOKIES | FAQs</li>
            </ul> */}