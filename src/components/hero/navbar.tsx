"use client";
import Image from "next/image";
import CryptoHero from ".";
import { WobbleCard } from "../wobble-card";
import ContactForm from "./contact-form";
import FeaturesSection from "./features-section";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import { useState } from "react";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Caracteristicas",
      link: "#features",
    },
    {
      name: "Beneficios",
      link: "#benefits",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" id="contact">Agendar llamada</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />

      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div>
      <CryptoHero />
      <FeaturesSection />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full" id="benefits">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Soluciones de IA listas para integrar en tu negocio
            </h2>
            <p className="mt-4 text-left text-base/6 text-neutral-200">
              Aprovechamos los modelos de inteligencia artificial más avanzados
              del mercado para construir soluciones personalizadas, sin
              necesidad de desarrollarlos desde cero.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="Soluciones IA"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Automatización con IA, sin complicaciones técnicas
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Implementamos agentes, asistentes y automatizaciones basadas en
            modelos que se adapten a las necesidades especificas de la solución
            a crear.
          </p>
        </WobbleCard>

        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Tu equipo experto en implementación de IA
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Nos encargamos de integrar modelos de IA en tus procesos,
              conectarlos con tus sistemas y garantizar una experiencia
              funcional, segura y escalable.
            </p>
          </div>
          <Image
            src="/linear.webp"
            width={500}
            height={500}
            alt="Implementación IA"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
      <ContactForm />
    </div>
  );
};
