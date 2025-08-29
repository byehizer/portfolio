"use client";

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
  SiGooglecloud,
  SiVercel,
  SiRailway,
  SiSwagger,
  SiVitest,
} from "react-icons/si";
import { FiUpload } from "react-icons/fi";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MiniCarousel from "./MiniCarousel";

const groupedSections = [
  {
    id: "catalog-detail",
    title: "Pantalla principal y detalle de producto",
    description:
      "Catálogo de billetes antiguos y página de detalle con opción de agregar al carrito.",
    images: [
      "/coinbasescreens/Home.png",
      "/coinbasescreens/ProjectDetail.png",
      "/coinbasescreens/ProjectDetailMobile.png",
    ],
  },
  {
    id: "cart-form",
    title: "Carrito y formulario de compra",
    description:
      "Vista del carrito con productos agregados, opciones para modificar cantidades, y formulario con validaciones.",
    images: [
      "/coinbasescreens/carritoenhome.png",
      "/coinbasescreens/formulariodecompra.png",
    ],
  },
  {
    id: "payment-confirm",
    title: "Pasarela de pagos y confirmación",
    description:
      "Pasarela Stripe (incluye Apple/Google Pay) y confirmación exitosa de pago.",
    images: [
      "/coinbasescreens/sessionstripe.png",
      "/coinbasescreens/sucesspayment.png",
      "/coinbasescreens/cancelpayment.png",
      "/coinbasescreens/dashboardstripe.png",
    ],
  },
  {
    id: "proof-email",
    title: "Subida de comprobante y correo de confirmación",
    description:
      "Interfaz para subir comprobantes (Zelle/Venmo) y correo de confirmación enviado al cliente.",
    images: [
      "/coinbasescreens/subidadecomprobante.png",
      "/coinbasescreens/subidadecomprobanteready.png",
      "/coinbasescreens/mailsmandados.png",
    ],
  },
  {
    id: "admin-panel",
    title: "Panel administrativo",
    description:
      "Login con JWT, listado de pedidos y detalle de pedido con gestión de estados y comprobantes.",
    images: [
      "/coinbasescreens/Loginadmin.png",
      "/coinbasescreens/paneladmin.png",
      "/coinbasescreens/botonderefund.png",
    ],
  },
];

export default function CoinbaseContent() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <>
      <div className="space-y-6">
          <h2 className="text-4xl font-poppins text-[#ffffff] mt-10">
          Descripción general
        </h2>
        <p className="text-white font-inter">
          <strong>Coinbase</strong> es una plataforma de e-commerce enfocada en
          la venta de billetes antiguos. Fue desarrollada completamente desde
          cero, cubriendo tanto el frontend como el backend, con énfasis en una
          arquitectura limpia, modular y escalable.
        </p>
        <p className="text-white font-inter">
          El sistema permite: agregar productos al carrito, seleccionar métodos
          de pago (Stripe, Zelle o Venmo), subir comprobantes de pago a la nube
          mediante <strong>Google Cloud Storage</strong>, recibir confirmaciones
          vía correo electrónico con <strong>SendGrid</strong> y gestionar
          pedidos desde un panel administrativo protegido con autenticación{" "}
          <strong>JWT</strong>. Actualmente está desplegada en{" "}
          <strong>Railway (backend)</strong> y <strong>Vercel (frontend)</strong>{" "}
          con un pipeline de CI/CD en <strong>GitHub Actions</strong>, seguridad
          mejorada con <strong>Helmet</strong> y <strong>Rate limiting</strong>,
          y cuenta con <strong>tests unitarios e integración usando Vitest</strong>.
        </p>

        <h2 className="text-4xl font-poppins text-[#ffffff]">
          Proceso de desarrollo
        </h2>
        <p className="text-white font-inter">
          Este proyecto fue mi principal enfoque durante varios meses. Me
          encargué de <strong>todo el ciclo de desarrollo</strong>, incluyendo:
        </p>
        <ul className="list-disc list-inside text-white space-y-2 font-inter">
          <li>
            Diseño de la base de datos y modelo con PostgreSQL + Prisma ORM.
          </li>
          <li>
            Definición de rutas, controladores y servicios siguiendo Clean
            Architecture.
          </li>
          <li>Desarrollo del frontend con React y TailwindCSS.</li>
          <li>Integración de Stripe como pasarela de pagos.</li>
          <li>
            Manejo de comprobantes de pago con Google Cloud Storage (antes
            Multer local).
          </li>
          <li>
            Notificaciones automáticas por correo con SendGrid.
          </li>
          <li>
            Implementación de Swagger/OpenAPI para documentar la API.
          </li>
          <li>Configuración de tests unitarios e integración con Vitest.</li>
          <li>Seguridad mejorada con Helmet + Rate limiting.</li>
          <li>
            Despliegue local con Docker y en la nube con Railway + Vercel,
            gestionado mediante CI/CD en GitHub Actions.
          </li>
          <li>
            Documentación del flujo de trabajo y roadmap en un tablero Trello.
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
            <strong>Subida de archivos:</strong> Google Cloud Storage.
          </li>
          <li>
            <strong>Documentación:</strong> Swagger/OpenAPI.
          </li>
          <li>
            <strong>Pruebas:</strong> Unitarias e integración con Vitest.
          </li>
          <li>
            <strong>Seguridad:</strong> Helmet y Rate limiting.
          </li>
          <li>
            <strong>CI/CD:</strong> GitHub Actions.
          </li>
          <li>
            <strong>Deploy:</strong> Railway (backend) y Vercel (frontend).
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
            <SiReact
              title="React.js"
              className="hover:text-[#61DBFB] transition-colors"
            />
            <SiTailwindcss
              title="Tailwind CSS"
              className="hover:text-[#38B2AC] transition-colors"
            />
            <SiNodedotjs
              title="Node.js"
              className="hover:text-[#68A063] transition-colors"
            />
            <SiExpress
              title="Express.js"
              className="hover:text-[#ffffff] transition-colors"
            />
            <SiPostgresql
              title="PostgreSQL"
              className="hover:text-[#336791] transition-colors"
            />
            <SiPrisma
              title="Prisma ORM"
              className="hover:text-[#0C344B] transition-colors"
            />
            <SiJsonwebtokens
              title="JWT"
              className="hover:text-[#f7df1e] transition-colors"
            />
            <SiStripe
              title="Stripe"
              className="hover:text-[#635BFF] transition-colors"
            />
            <SiSendgrid
              title="SendGrid"
              className="hover:text-[#00B1B3] transition-colors"
            />
            <FiUpload
              title="Multer (upload)"
              className="hover:text-[#EAB308] transition-colors"
            />
            <SiDocker
              title="Docker"
              className="hover:text-[#0db7ed] transition-colors"
            />
            <SiGooglecloud
              title="Google Cloud"
              className="hover:text-[#4285F4] transition-colors" />
            <SiVercel
              title="Vercel"
              className="hover:text-[#000000] transition-colors" 
            />
            <SiRailway
              title="Railway"
              className="hover:text-[#0B0D0E] transition-colors" 
            />
            <SiSwagger
              title="Swagger"
              className="hover:text-[#85EA2D] transition-colors" 
            />
            <SiVitest
              title="Vitest"
              className="hover:text-[#729B1B] transition-colors" 
            />
          </div>
        </section>

        <h2 className="text-4xl font-poppins text-[#ffffff]">
          Estado actual y mejoras pendientes
        </h2>
        <ul className="list-disc list-inside text-white space-y-2 font-inter">
          <li>
            Proyecto funcional y robusto, desplegado en producción (Railway +
            Vercel).
          </li>
          <li>
            Base de datos congelada (“freezeada”) para mantener consistencia.
          </li>
          <li>
            Observabilidad pendiente: logs estructurados (Winston/Pino) e
            integración con Sentry para monitoreo de errores.
          </li>
          <li>
            Posible automatización de seeds/migrations para entornos nuevos.
          </li>
          <li>Optimización de búsqueda indexada desde backend.</li>
        </ul>
        <h2 className="text-4xl font-poppins text-[#ffffff] mb-6">
          Flujo completo de usuario y panel administrativo
        </h2>

        <div className="space-y-4">
          {groupedSections.map(({ id, title, description, images }) => (
            <div key={id} className="bg-slate-800 rounded-md ">
              <button
                onClick={() => toggleSection(id)}
                className="cursor-pointer w-full flex justify-between items-center px-6 py-3 text-white font-poppins hover:bg-white/20 transition-colors"
              >
                <span>{title}</span>
                {openSection === id ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openSection === id
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                } bg-black/40 rounded-b-md`}
              >
                <div className="p-6">
                  <p className="text-white font-inter mb-4">{description}</p>

                  <MiniCarousel images={images} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
