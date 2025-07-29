"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ModalContextProps {
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  content: ReactNode | null;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState<ReactNode | null>(null);

  const openModal = (newContent: ReactNode) => {
    setContent(newContent);
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 100); // Activar fade-in
  };

  const closeModal = () => {
    setIsVisible(false); // Fade-out
    setTimeout(() => {
      setIsOpen(false);
      setContent(null);
    }, 300); // Esperar animación antes de desmontar
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, content }}>
      {children}

      {isOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 transition-opacity duration-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeModal}
            className="fixed top-4 right-4 text-white text-5xl font-bold hover:text-gray-300 z-[9999] cursor-pointer"
            aria-label="Cerrar modal"
          >
            &times;
          </button>

          {/* Contenido del modal */}
          <div className="relative max-w-7xl w-full max-h-[90vh] overflow-auto">
            <div className="w-full h-full flex justify-center items-center">
              {content}
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
};
