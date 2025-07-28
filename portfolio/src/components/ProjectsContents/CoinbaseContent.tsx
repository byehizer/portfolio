"use client";

import { FaGithub } from "react-icons/fa";
import { SiTrello } from "react-icons/si";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiStripe,
  SiSendgrid,
  SiDocker,
} from "react-icons/si";
import { FiUpload } from "react-icons/fi";

export default function CoinbaseContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-4xl font-poppins text-[#ffffff]">
        Descripción general
      </h2>
      <p className="text-white font-inter">
        <strong>Coinbase</strong> es una plataforma de e-commerce enfocada en la
        venta de billetes antiguos. Fue desarrollada completamente desde cero,
        cubriendo tanto el frontend como el backend, con énfasis en una
        arquitectura limpia, modular y escalable. El sistema permite agregar
        productos al carrito, seleccionar métodos de pago (Stripe, Zelle o
        Venmo), subir comprobantes, y recibir confirmaciones vía correo
        electrónico con SendGrid. También cuenta con un panel administrativo
        protegido mediante autenticación JWT.
      </p>

      <h2 className="text-4xl font-poppins text-[#ffffff]">
        Proceso de desarrollo
      </h2>
      <p className="text-white font-inter">
        Este proyecto fue mi principal enfoque durante varios meses. Me encargué
        de todo el ciclo de desarrollo: diseño de base de datos, definición de
        rutas y controladores, desarrollo del frontend con React y Tailwind,
        integración de Stripe, Multer, y SendGrid, además del despliegue local
        con Docker. También documenté las funcionalidades en un tablero de
        Trello y dejé planificadas las mejoras futuras.
      </p>

      <h2 className="text-4xl font-poppins text-[#ffffff]">
        Arquitectura y diseño
      </h2>
      <ul className="list-disc list-inside text-white space-y-2 font-inter">
        <li>
          <strong>Clean Architecture:</strong> separación en capas: controller,
          service y repository para facilitar pruebas, mantenibilidad y
          escalabilidad.
        </li>
        <li>
          <strong>Patrón MVC:</strong> el backend sigue el modelo
          Vista-Controlador para separar responsabilidades.
        </li>
        <li>
          <strong>Middlewares personalizados:</strong> manejo centralizado de
          errores, validación de tokens y autenticación de administrador.
        </li>
        <li>
          <strong>Context API:</strong> utilizado en el frontend para manejar el
          estado global (como el proyecto seleccionado).
        </li>
        <li>
          <strong>Validaciones y seguridad:</strong> control sobre subida de
          comprobantes y uso de JWT.
        </li>
      </ul>

      <h2 className="text-4xl font-poppins text-[#ffffff]">
        Tecnologías utilizadas
      </h2>
      <ul className="list-disc list-inside text-white space-y-2 font-inter">
        <li>
          <strong>Frontend:</strong> React.js, Tailwind CSS.
        </li>
        <li>
          <strong>Backend:</strong> Node.js con Express.
        </li>
        <li>
          <strong>Base de datos:</strong> PostgreSQL con Prisma ORM.
        </li>
        <li>
          <strong>Autenticación:</strong> JWT.
        </li>
        <li>
          <strong>Pasarela de pagos:</strong> Stripe (incluyendo Apple Pay y
          Google Pay).
        </li>
        <li>
          <strong>Correo:</strong> SendGrid para confirmación de pedidos.
        </li>
        <li>
          <strong>Subida de archivos:</strong> Multer (pensado para migrar a
          Google Cloud Storage).
        </li>
        <li>
          <strong>Desarrollo local:</strong> Docker para entornos aislados.
        </li>
      </ul>
     <section className="mt-10 bg-white/5 p-6 rounded-xl">
  <h3 className="text-2xl font-poppins text-white text-center mb-4">
    Stack Tecnológico
  </h3>
  <div className="flex flex-wrap justify-center gap-6 text-white text-4xl">
    {/* Íconos individuales */}
    <SiReact title="React.js" className="hover:text-[#61DBFB] transition-colors" />
    <SiTailwindcss title="Tailwind CSS" className="hover:text-[#38B2AC] transition-colors" />
    <SiNodedotjs title="Node.js" className="hover:text-[#68A063] transition-colors" />
    <SiExpress title="Express.js" className="hover:text-[#ffffff] transition-colors" />
    <SiPostgresql title="PostgreSQL" className="hover:text-[#336791] transition-colors" />
    <SiPrisma title="Prisma ORM" className="hover:text-[#0C344B] transition-colors" />
    <SiJsonwebtokens title="JWT" className="hover:text-[#f7df1e] transition-colors" />
    <SiStripe title="Stripe" className="hover:text-[#635BFF] transition-colors" />
    <SiSendgrid title="SendGrid" className="hover:text-[#00B1B3] transition-colors" />
    <FiUpload title="Multer (upload)" className="hover:text-[#EAB308] transition-colors" />
    <SiDocker title="Docker" className="hover:text-[#0db7ed] transition-colors" />
  </div>
</section>


      <h2 className="text-4xl font-poppins text-[#ffffff]">
        Estado actual y mejoras pendientes
      </h2>
      <ul className="list-disc list-inside text-white space-y-2 font-inter">
        <li>
          Proyecto funcional y robusto, listo para producción a pequeña escala.
        </li>
        <li>
          Falta implementar búsqueda indexada desde backend (actualmente en
          frontend).
        </li>
        <li>Agregar documentación Swagger/OpenAPI.</li>
        <li>
          Incluir pruebas automatizadas para endpoints y procesos críticos.
        </li>
        <li>
          Subida de imágenes a la nube (pendiente migración desde almacenamiento
          local).
        </li>
      </ul>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <a
          href="https://github.com/byehizer/coinbase"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors"
        >
          <FaGithub />
          Ver código en GitHub
        </a>

        <a
          href="https://trello.com/b/UYM1Zta8/coinbase"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B] text-white rounded-xl hover:bg-[#d97706] transition-colors"
        >
          <SiTrello />
          Ver tablero de Trello
        </a>
      </div>
    </div>
  );
}
