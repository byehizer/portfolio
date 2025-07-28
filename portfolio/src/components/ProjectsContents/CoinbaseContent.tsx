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
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const groupedSections = [
  {
    id: "catalog-detail",
    title: "Pantalla principal y detalle de producto",
    description:
      "Catálogo de billetes antiguos y página de detalle con opción de agregar al carrito.",
    images: ["/capturas/home.png", "/capturas/product-detail.png"],
  },
  {
    id: "cart-form",
    title: "Carrito y formulario de compra",
    description:
      "Vista del carrito con productos agregados, opciones para modificar cantidades, y formulario con validaciones.",
    images: ["/capturas/cart.png", "/capturas/checkout-1.png"],
  },
  {
    id: "payment-confirm",
    title: "Pasarela de pagos y confirmación",
    description:
      "Pasarela Stripe (incluye Apple/Google Pay) y confirmación exitosa de pago.",
    images: ["/capturas/stripe-payment.png", "/capturas/confirmation.png"],
  },
  {
    id: "proof-email",
    title: "Subida de comprobante y correo de confirmación",
    description:
      "Interfaz para subir comprobantes (Zelle/Venmo) y correo de confirmación enviado al cliente.",
    images: ["/capturas/upload-proof.png", "/capturas/email-confirmation.png"],
  },
  {
    id: "admin-panel",
    title: "Panel administrativo",
    description:
      "Login con JWT, listado de pedidos y detalle de pedido con gestión de estados y comprobantes.",
    images: [
      "/capturas/admin-login.png",
      "/capturas/admin-orders.png",
      "/capturas/admin-order-detail.png",
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
          Este proyecto fue mi principal enfoque durante varios meses. Me
          encargué de todo el ciclo de desarrollo: diseño de base de datos,
          definición de rutas y controladores, desarrollo del frontend con React
          y Tailwind, integración de Stripe, Multer, y SendGrid, además del
          despliegue local con Docker. También documenté las funcionalidades en
          un tablero de Trello y dejé planificadas las mejoras futuras.
        </p>

        <h2 className="text-4xl font-poppins text-[#ffffff]">
          Arquitectura y diseño
        </h2>
        <ul className="list-disc list-inside text-white space-y-2 font-inter">
          <li>
            <strong>Clean Architecture:</strong> separación en capas:
            controller, service y repository para facilitar pruebas,
            mantenibilidad y escalabilidad.
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
            <strong>Context API:</strong> utilizado en el frontend para manejar
            el estado global (como el proyecto seleccionado).
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
          </div>
        </section>

        <h2 className="text-4xl font-poppins text-[#ffffff]">
          Estado actual y mejoras pendientes
        </h2>
        <ul className="list-disc list-inside text-white space-y-2 font-inter">
          <li>
            Proyecto funcional y robusto, listo para producción a pequeña
            escala.
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
            Subida de imágenes a la nube (pendiente migración desde
            almacenamiento local).
          </li>
        </ul>
        <h2 className="text-4xl font-poppins text-[#ffffff] mb-6">
          Flujo completo de usuario y panel administrativo
        </h2>

        <div className="space-y-4">
          {groupedSections.map(({ id, title, description, images }) => (
            <div key={id} className="bg-white/10 rounded-md">
              <button
                onClick={() => toggleSection(id)}
                className="w-full flex justify-between items-center px-6 py-3 text-white font-poppins hover:bg-white/20 transition-colors"
              >
                <span>{title}</span>
                {openSection === id ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {openSection === id && (
                <div className="p-6 bg-white/20 rounded-b-md">
                  <p className="text-white font-inter mb-4">{description}</p>

                  {/* Aquí puedes integrar tu carousel o mostrar imágenes */}
                  <div className="flex space-x-4 overflow-x-auto">
                    {images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${title} imagen ${i + 1}`}
                        className="h-40 rounded-md shadow-md flex-shrink-0"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
