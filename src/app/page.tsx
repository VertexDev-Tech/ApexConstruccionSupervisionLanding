"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckCircle2,
  Menu,
  X,
  Send,
  Star,
  Calendar,
  Building2,
  FileCheck2,
  ShieldCheck,
  UserCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";

type ProjectCategory =
  | "Todos"
  | "Construcción Civil"
  | "Supervisión de Obra"
  | "Estructuras"
  | "Gestión y Expedientes";

interface ProjectItem {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "Todos">;
  tag: string;
  location: string;
  year: string;
  metric: string;
  description: string;
  deliverables: string[];
  image: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: "edif-los-ingenieros",
    title: "Edificio Multifamiliar y Corporativo Los Ingenieros",
    category: "Construcción Civil",
    tag: "EDIFICACIÓN Y CONCRETO ARMADO",
    location: "Urb. El Ingeniero, Cajamarca",
    year: "2025",
    metric: "4,850 m² construidos",
    description:
      "Ejecución integral de estructura aporticada y placas de concreto armado de 8 niveles más semisótano, incluyendo instalaciones sanitarias, eléctricas y acabados arquitectónicos bajo control de calidad estricto.",
    deliverables: [
      "Cimentación profunda y muros de contención en concreto armado",
      "Control de rotura de probetas f'c = 280 kg/cm² con 100% de conformidad",
      "Entrega de obra dentro del cronograma contractual con cero accidentes",
    ],
    image: "/images/proyecto-edificacion.jpg",
  },
  {
    id: "supervision-educativa",
    title: "Supervisión Integral de Infraestructura Educativa Regional",
    category: "Supervisión de Obra",
    tag: "SUPERVISIÓN TÉCNICA",
    location: "Cajamarca, Perú",
    year: "2025",
    metric: "100% partidas auditadas",
    description:
      "Supervisión técnica permanente en campo para pabellones pedagógicos, losas deportivas techadas y obras exteriores, garantizando el cumplimiento de la norma sismorresistente E.030 y el expediente técnico.",
    deliverables: [
      "Verificación topográfica y control de acero de refuerzo en cada nivel",
      "Informes mensuales de valorización, control de plazos y calidad",
      "Protocolos de pruebas hidráulicas, eléctricas y dossier de calidad final",
    ],
    image: "/images/proyecto-supervision.jpg",
  },
  {
    id: "planta-industrial-norte",
    title: "Nave Industrial y Plataformas de Concreto de Alta Resistencia",
    category: "Estructuras",
    tag: "ESTRUCTURAS E INGENIERÍA",
    location: "Sector Industrial, Cajamarca",
    year: "2024",
    metric: "3,200 m² de planta",
    description:
      "Construcción de cimentaciones especiales, losas industriales con fibra de acero y montaje de cobertura estructural para centro logístico y de mantenimiento pesado.",
    deliverables: [
      "Movimiento de tierras, mejoramiento de subrasante y compactación al 98% Proctor",
      "Vaciado monolítico de losas de alto tránsito y nivelación láser",
      "Fabricación e izaje de estructuras metálicas con ensayos no destructivos",
    ],
    image: "/images/proyecto-estructuras.jpg",
  },
  {
    id: "supervision-vial-drenaje",
    title: "Supervisión de Movimiento de Tierras y Estabilización de Taludes",
    category: "Supervisión de Obra",
    tag: "INFRAESTRUCTURA VIAL Y TIERRAS",
    location: "Provincia de Cajamarca",
    year: "2024",
    metric: "4.2 km supervisados",
    description:
      "Control técnico y aseguramiento de calidad en movimiento de tierras masivo, muros de contención anclados, conformación de plataformas y drenaje pluvial.",
    deliverables: [
      "Ensayos permanentes de densidad de campo, slump y diseño de mezclas",
      "Control de seguridad SSOMA, señalización de obra y maquinaria pesada",
      "Liquidación técnica y financiera de obra sin observaciones",
    ],
    image: "/images/proyecto-vial.jpg",
  },
  {
    id: "gerencia-expediente-clinica",
    title: "Gerencia de Proyecto y Supervisión de Instalaciones Especiales",
    category: "Gestión y Expedientes",
    tag: "GERENCIA Y EXPEDIENTE TÉCNICO",
    location: "Cajamarca, Perú",
    year: "2025",
    metric: "6 especialidades integradas",
    description:
      "Desarrollo, revisión y compatibilización integral de especialidades (estructuras, arquitectura, II.SS., II.EE., mecánicas y comunicaciones) con enfoque de prevención de adicionales de obra.",
    deliverables: [
      "Detección y solución anticipada de interferencias entre especialidades",
      "Programación detallada de obra (Ruta Crítica CPM) y control de costos",
      "Manuales de operación, metrados auditados y especificaciones técnicas",
    ],
    image: "/images/proyecto-expediente.jpg",
  },
  {
    id: "residencial-cumbre-azul",
    title: "Conjunto Residencial Cumbre Azul — Obra Civil y Acabados",
    category: "Construcción Civil",
    tag: "CONSTRUCCIÓN INTEGRAL",
    location: "Cajamarca, Perú",
    year: "2024",
    metric: "24 unidades entregadas",
    description:
      "Construcción integral desde movimiento de tierras y casco estructural hasta acabados finos, carpintería arquitectónica y equipamiento hidrosanitario.",
    deliverables: [
      "Ejecución con trazabilidad técnica por frente de trabajo",
      "Supervisión interna de acabados, impermeabilización y entrega a propietarios",
      "Cumplimiento estricto del presupuesto meta y cronograma de hitos",
    ],
    image: "/images/proyecto-residencial.jpg",
  },
];

/* Iconos vectoriales técnicos con trazo 2pt (Manual de Marca pág. 19:
   Azul #0F375B para iconos principales; Naranja #DB881E para resaltar acciones o estados) */
function IconConstruccion() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path
        d="M8 40V10C8 8.89543 8.89543 8 10 8H18C19.1046 8 20 8.89543 20 10V40"
        stroke="#0F375B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 20H36C37.1046 20 38 20.8954 38 22V40"
        stroke="#0F375B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 40H44"
        stroke="#DB881E"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <rect x="12" y="14" width="4" height="4" stroke="#DB881E" strokeWidth="2" />
      <rect x="12" y="22" width="4" height="4" stroke="#0F375B" strokeWidth="2" />
      <rect x="12" y="30" width="4" height="4" stroke="#0F375B" strokeWidth="2" />
      <rect x="25" y="25" width="4" height="4" stroke="#0F375B" strokeWidth="2" />
      <rect x="31" y="25" width="4" height="4" stroke="#DB881E" strokeWidth="2" />
      <rect x="25" y="32" width="4" height="4" stroke="#0F375B" strokeWidth="2" />
      <rect x="31" y="32" width="4" height="4" stroke="#0F375B" strokeWidth="2" />
    </svg>
  );
}

function IconSupervision() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path
        d="M6 20C10.5 12 16.8 8 24 8C31.2 8 37.5 12 42 20C37.5 28 31.2 32 24 32C16.8 32 10.5 28 6 20Z"
        stroke="#0F375B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="20" r="6" stroke="#DB881E" strokeWidth="2.2" />
      <path
        d="M24 34V42M24 42L20 38M24 42L28 38"
        stroke="#DB881E"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 32L8 38M8 38H13M8 38V33"
        stroke="#0F375B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 32L40 38M40 38H35M40 38V33"
        stroke="#0F375B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPlanos() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path
        d="M10 10V36C10 38.2091 11.7909 40 14 40H38"
        stroke="#0F375B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 10H36V28H14"
        stroke="#0F375B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 40L40 26V40H26Z"
        stroke="#DB881E"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22L32 12L36 16L26 26L21 27L22 22Z"
        stroke="#0F375B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSeguridad() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path
        d="M8 30C8 20.0589 15.1634 12 24 12C32.8366 12 40 20.0589 40 30H8Z"
        stroke="#0F375B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12L21 8H27L28 12"
        stroke="#DB881E"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 12V22M27 12V22"
        stroke="#DB881E"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M6 30H42V34C42 36.2091 40.2091 38 38 38H10C7.79086 38 6 36.2091 6 34V30Z"
        stroke="#0F375B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconGerencia() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="3"
        stroke="#0F375B"
        strokeWidth="2.2"
      />
      <path
        d="M15 28L21 22L26 26L34 17"
        stroke="#DB881E"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 17H34V22"
        stroke="#DB881E"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 34H33"
        stroke="#0F375B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconEstructuras() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
      <path
        d="M24 8L8 38H40L24 8Z"
        stroke="#0F375B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 24L16 38H32L24 24Z"
        stroke="#DB881E"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 23H32"
        stroke="#0F375B"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ApexLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("Todos");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Contact form state
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    empresa: "",
    tipoProyecto: "",
    mensaje: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
    simulated?: boolean;
  } | null>(null);

  const filteredProjects =
    selectedCategory === "Todos"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const handleSelectServiceForQuote = (serviceName: string) => {
    setFormData((prev) => ({ ...prev, tipoProyecto: serviceName }));
    const contactEl = document.getElementById("contacto");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        setSubmitStatus({
          type: "error",
          message:
            data.error ||
            "No se pudo enviar el mensaje. Inténtalo nuevamente o escríbenos a contacto@apex.com.pe.",
        });
      } else {
        setSubmitStatus({
          type: "success",
          message:
            data.message ||
            "¡Gracias por contactarnos! Tu mensaje fue enviado a contacto@apex.com.pe.",
          simulated: data.simulated,
        });
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          telefono: "",
          empresa: "",
          tipoProyecto: "",
          mensaje: "",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Error de conexión al enviar el formulario. Por favor inténtalo de nuevo.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#474A51] relative overflow-x-hidden">
      {/* =====================================================================
          BARRA SUPERIOR TÉCNICA (Top Info Bar)
          ===================================================================== */}
      <div className="bg-[#09233B] text-white/90 text-xs border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#DB881E]" />
              Jr. Los Constructores 123, Urb. El Ingeniero — Cajamarca, Perú
            </span>
            <a
              href="mailto:contacto@apex.com.pe"
              className="flex items-center gap-2 hover:text-[#DB881E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#DB881E]" />
              contacto@apex.com.pe
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="tel:+51987654321"
              className="flex items-center gap-1.5 hover:text-[#DB881E] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#DB881E]" />
              +51 987 654 321 / +51 976 543 210
            </a>
            <span className="h-3 w-px bg-white/20" />
            <span className="text-[#DB881E] font-semibold tracking-wider uppercase">
              Construcción y Supervisión
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          HEADER / NAVBAR (Estructura de menú alineada a referencia losandes.ing
          y Manual de Marca Pág. 9, 10, 12: Logotipo Horizontal Full Color sobre
          fondo claro respetando tamaño mínimo >= 220px y área de seguridad)
          ===================================================================== */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
          {/* Logotipo Oficial Maestro Horizontal Full Color (Mínimo digital >= 220px) */}
          <a
            href="#inicio"
            aria-label="APEX Construcción y Supervisión - Ir al inicio"
            className="py-3 pr-4 flex items-center focus:outline-none"
          >
            <img
              src="/brand/logo-horizontal-color.png"
              alt="APEX Construcción y Supervisión"
              className="w-[225px] sm:w-[250px] h-auto object-contain select-none"
            />
          </a>

          {/* Navegación Desktop (Mismos apartados del menú de referencia:
              INICIO | SERVICIOS | PROYECTOS | NOSOTROS | CONTACTO) */}
          <nav
            aria-label="Navegación principal"
            className="hidden lg:flex items-center gap-8"
          >
            <a
              href="#inicio"
              className="font-heading text-sm font-bold tracking-wider text-[#0F375B] hover:text-[#DB881E] transition-colors"
            >
              INICIO
            </a>
            <a
              href="#servicios"
              className="font-heading text-sm font-bold tracking-wider text-[#0F375B] hover:text-[#DB881E] transition-colors"
            >
              SERVICIOS
            </a>
            <a
              href="#proyectos"
              className="font-heading text-sm font-bold tracking-wider text-[#0F375B] hover:text-[#DB881E] transition-colors"
            >
              PROYECTOS
            </a>
            <a
              href="#nosotros"
              className="font-heading text-sm font-bold tracking-wider text-[#0F375B] hover:text-[#DB881E] transition-colors"
            >
              NOSOTROS
            </a>
            <a
              href="#contacto"
              className="font-heading text-sm font-bold tracking-wider bg-[#DB881E] hover:bg-[#C27616] text-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              CONTACTO
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>

          {/* Botón Menú Móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="lg:hidden p-2.5 rounded-lg text-[#0F375B] hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Menú Desplegable Móvil */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
            <div className="flex flex-col space-y-3">
              {[
                { label: "INICIO", href: "#inicio" },
                { label: "SERVICIOS", href: "#servicios" },
                { label: "PROYECTOS", href: "#proyectos" },
                { label: "NOSOTROS", href: "#nosotros" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-heading text-base font-bold text-[#0F375B] hover:text-[#DB881E] py-2 border-b border-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="font-heading text-center text-sm font-bold tracking-wider bg-[#DB881E] text-white py-3.5 rounded-full shadow-sm mt-2"
              >
                CONTACTO
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* ===================================================================
            1. HERO SECTION (#inicio)
            Inspirado en la composición diagonal de la Portada y Pág. 23 del
            Manual de Marca + estructura de métricas e impacto de losandes.ing
            =================================================================== */}
        <section
          id="inicio"
          className="relative bg-[#0F375B] text-white overflow-hidden"
        >
          {/* Patrón técnico de cuadrícula */}
          <div className="absolute inset-0 bg-blueprint-grid pointer-events-none" />

          {/* Acento diagonal geométrico inspirado en Pág. 1 del Manual de Marca */}
          <div
            className="hidden lg:block absolute top-0 right-0 w-[46%] h-full bg-[#09233B]/70 pointer-events-none"
            style={{
              clipPath: "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          />
          <div
            className="hidden lg:block absolute top-0 right-[45.2%] w-1.5 h-full bg-[#DB881E] pointer-events-none transform -skew-x-12 opacity-90"
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Columna Izquierda: Mensaje Estratégico y CTAs */}
              <div className="lg:col-span-7 space-y-7">
                <h1 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.12] tracking-tight text-white">
                  CONSTRUIMOS CON PRECISIÓN Y SUPERVISAMOS{" "}
                  <span className="text-[#DB881E]">CON COMPROMISO.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
                  Brindamos soluciones integrales de ingeniería, construcción y
                  supervisión orientadas a{" "}
                  <strong className="text-white font-semibold">
                    calidad, cumplimiento y seguridad
                  </strong>
                  , garantizando rigor técnico y control eficiente en cada etapa
                  de tu proyecto.
                </p>

                {/* Botones CTA (Estructura de referencia losandes.ing) */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#proyectos"
                    className="font-heading text-sm font-bold uppercase tracking-wider bg-[#DB881E] hover:bg-[#C27616] text-white px-8 py-4 rounded-lg shadow-lg shadow-black/20 transition-all flex items-center gap-2.5"
                  >
                    VER PROYECTOS
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#servicios"
                    className="font-heading text-sm font-bold uppercase tracking-wider border-2 border-white/80 hover:border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg transition-all"
                  >
                    NUESTROS SERVICIOS
                  </a>
                </div>

                {/* Sellos rápidos de garantía técnica */}
                <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DB881E] shrink-0" />
                    <span>Calidad Garantizada en Obra</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#DB881E] shrink-0" />
                    <span>Seguridad SSOMA Ante Todo</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <CheckCircle2 className="w-4 h-4 text-[#DB881E] shrink-0" />
                    <span>Cumplimiento Estricto de Plazos</span>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Composición Visual con Fotografía de Obra Real + Tarjeta Institucional */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 shadow-2xl bg-[#09233B]">
                  <img
                    src="/images/hero-estructura.jpg"
                    alt="Obra civil y supervisión estructural APEX"
                    className="w-full h-[400px] sm:h-[440px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09233B] via-[#09233B]/35 to-transparent" />

                  {/* Cinta superior de estado técnico */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="bg-[#0F375B]/90 backdrop-blur-md text-white text-xs font-heading font-bold px-3.5 py-1.5 rounded-md border border-white/15 uppercase tracking-wider">
                      Ingeniería &amp; Campo
                    </span>
                    <span className="bg-[#DB881E] text-white text-xs font-heading font-bold px-3.5 py-1.5 rounded-md uppercase tracking-wider">
                      Cajamarca · Perú
                    </span>
                  </div>

                  {/* Tarjeta inferior dentro de la imagen con el isotipo oficial en versión blanca */}
                  <div className="absolute bottom-5 left-5 right-5 bg-[#0F375B]/95 backdrop-blur-md p-5 rounded-xl border border-white/15 flex items-center gap-4">
                    <div className="bg-white/10 p-2.5 rounded-lg shrink-0">
                      <img
                        src="/brand/isotipo-white.png"
                        alt="Isotipo APEX"
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    <div>
                      <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E]">
                        APEX Construcción y Supervisión
                      </p>
                      <p className="font-heading text-sm sm:text-base font-bold text-white leading-snug mt-0.5">
                        Rigor técnico, coordinación eficiente y control en cada
                        partida constructiva.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Barra de Métricas / Datos Clave (Manual Pág. 17: Dato clave en Montserrat Bold + Naranja APEX) */}
            <div className="mt-16 pt-10 border-t border-white/15 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  value: "100%",
                  label: "CONTROL TÉCNICO Y TRAZABILIDAD",
                  desc: "Reportes, protocolos y entregables verificables",
                },
                {
                  value: "360°",
                  label: "ACOMPAÑAMIENTO EN OBRA",
                  desc: "Desde el expediente hasta la recepción final",
                },
                {
                  value: "SSOMA",
                  label: "ESTÁNDARES DE SEGURIDAD",
                  desc: "Prevención de riesgos y control EPP riguroso",
                },
                {
                  value: "24/7",
                  label: "CAPACIDAD RESOLUTIVA",
                  desc: "Anticipación de riesgos y soluciones en campo",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#DB881E]/60 transition-colors"
                >
                  <p className="font-heading text-3xl sm:text-4xl font-extrabold text-[#DB881E]">
                    {stat.value}
                  </p>
                  <p className="font-heading text-xs font-bold tracking-wider text-white uppercase mt-2">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-300 mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            2. CINTA DE ATRIBUTOS / MARQUEE (Inspirado en losandes.ing con los
            Atributos exactos de la Plataforma Estratégica del Manual Pág. 4)
            =================================================================== */}
        <div className="bg-[#09233B] border-y border-white/10 py-3.5 overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-10 text-xs sm:text-sm font-heading font-bold tracking-[0.2em] text-white uppercase">
            {[...Array(2)].map((_, groupIndex) => (
              <React.Fragment key={groupIndex}>
                <span className="flex items-center gap-3">
                  <span className="text-[#DB881E]">✦</span> TÉCNICA
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-[#DB881E]">✦</span> SOLIDEZ
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-[#DB881E]">✦</span> SEGURIDAD
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-[#DB881E]">✦</span> ORDEN
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-[#DB881E]">✦</span> CUMPLIMIENTO
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-[#DB881E]">✦</span> TRANSPARENCIA
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-[#DB881E]">✦</span> CAPACIDAD RESOLUTIVA
                </span>
                <span className="flex items-center gap-3">
                  <span className="text-[#DB881E]">✦</span> PRECISIÓN EN OBRA
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ===================================================================
            3. SECCIÓN SERVICIOS (#servicios)
            Estructura 3x2 de losandes.ing + Iconografía técnica Pág. 19 y
            Servicios Oficiales de Pág. 19 y 23 (Construcción, Supervisión,
            Gestión, Planos/Expedientes, Estructuras, Seguridad)
            =================================================================== */}
        <section
          id="servicios"
          className="py-20 lg:py-28 bg-slate-50 bg-blueprint-light relative"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Cabecera de sección */}
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#DB881E]">
                — NUESTROS SERVICIOS
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F375B]">
                Soluciones Integrales en Construcción, Supervisión y Gestión
              </h2>
              <p className="text-base text-[#474A51] leading-relaxed">
                Acompañamos cada etapa de tu proyecto con rigor técnico,
                control de recursos y cumplimiento estricto de normas técnicas
                de edificación e infraestructura.
              </p>
            </div>

            {/* Cuadrícula de 6 Servicios Especializados */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Construcción y Ejecución de Obras",
                  subtitle: "OBRAS CIVILES Y EDIFICACIONES",
                  description:
                    "Ejecutamos proyectos de edificación e infraestructura civil con altos estándares de calidad, seguridad y control técnico en cada partida.",
                  icon: <IconConstruccion />,
                },
                {
                  title: "Supervisión Técnica de Obras",
                  subtitle: "CONTROL DE CALIDAD Y CUMPLIMIENTO",
                  description:
                    "Supervisión técnica permanente en campo para garantizar el cumplimiento estricto de planos, especificaciones técnicas, plazos y presupuesto.",
                  icon: <IconSupervision />,
                },
                {
                  title: "Gerencia y Gestión de Proyectos",
                  subtitle: "EFICIENCIA EN PLAZOS Y COSTOS",
                  description:
                    "Gestión eficiente de recursos, cronogramas, adquisiciones y contratos para asegurar la rentabilidad y el éxito integral del proyecto.",
                  icon: <IconGerencia />,
                },
                {
                  title: "Expedientes Técnicos y Planos",
                  subtitle: "INGENIERÍA DE DETALLE",
                  description:
                    "Elaboración, revisión y compatibilización de expedientes técnicos completos con criterios constructivos claros y libres de interferencias.",
                  icon: <IconPlanos />,
                },
                {
                  title: "Ingeniería Estructural y Concreto",
                  subtitle: "SOLIDEZ Y CÁLCULO ESTRUCTURAL",
                  description:
                    "Diseño, ejecución, evaluación y reforzamiento de estructuras de concreto armado y estructuras metálicas bajo normativa sismorresistente.",
                  icon: <IconEstructuras />,
                },
                {
                  title: "Gestión de Seguridad en Obra (SSOMA)",
                  subtitle: "PREVENCIÓN Y CONTROL EN CAMPO",
                  description:
                    "Implementación y supervisión de planes de Seguridad, Salud Ocupacional y Medio Ambiente, priorizando la integridad de todo el equipo en obra.",
                  icon: <IconSeguridad />,
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200/90 p-7 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Barra superior de acento */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#0F375B] group-hover:bg-[#DB881E] transition-colors" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:border-[#DB881E]/40 transition-colors">
                        {service.icon}
                      </div>
                      <span className="font-heading text-[11px] font-bold uppercase tracking-wider text-[#0F375B] bg-[#0F375B]/5 px-3 py-1 rounded-full">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="font-heading text-[11px] font-bold uppercase tracking-wider text-[#DB881E]">
                      {service.subtitle}
                    </p>
                    <h3 className="font-heading text-xl font-bold text-[#0F375B] mt-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#474A51] mt-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => handleSelectServiceForQuote(service.title)}
                      className="font-heading text-xs font-bold uppercase tracking-wider text-[#0F375B] group-hover:text-[#DB881E] flex items-center gap-2 transition-colors cursor-pointer"
                    >
                      Solicitar información
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            4. SECCIÓN NOSOTROS / PLATAFORMA ESTRATÉGICA (#nosotros)
            Integra literalmente la Esencia, Propuesta de Valor, Misión, Visión,
            Personalidad de Marca (6 pilares) y Estilo Fotográfico (Obra y campo,
            Detalle técnico, Equipo profesional) de las Págs. 3, 4, 5 y 20 del Manual
            =================================================================== */}
        <section id="nosotros" className="py-20 lg:py-28 bg-white relative">
          {/* Franja lateral decorativa inspirada en el Manual de Marca */}
          <div
            className="hidden xl:flex fixed-none absolute right-6 top-24 bottom-24 w-3 flex-col pointer-events-none opacity-85"
            aria-hidden="true"
          >
            <div className="flex-1 flex gap-1">
              <div className="w-2 bg-[#0F375B] h-full rounded-xs" />
              <div className="w-1 bg-[#DB881E] h-full rounded-xs" />
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Columna Izquierda: Identidad, Misión y Visión */}
              <div className="lg:col-span-6 space-y-6">
                <div className="space-y-2">
                  <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#DB881E]">
                    — ¿QUIÉNES SOMOS?
                  </p>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F375B] leading-tight">
                    Ingeniería, Construcción y Supervisión con Rigor Técnico
                  </h2>
                </div>

                <p className="text-base text-[#474A51] leading-relaxed">
                  Nuestra identidad se sostiene sobre una idea simple y
                  contundente:{" "}
                  <strong className="text-[#0F375B] font-semibold">
                    construir y supervisar con precisión, control y
                    responsabilidad técnica
                  </strong>
                  . En{" "}
                  <strong className="text-[#0F375B]">
                    APEX Construcción y Supervisión
                  </strong>{" "}
                  operamos como una firma que no improvisa: planifica, ejecuta,
                  supervisa y entrega cada proyecto con criterio profesional.
                </p>

                {/* Bloques Misión, Visión, Atributos y Diferenciador (Pág. 4 del Manual) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 border-l-4 border-l-[#DB881E]">
                    <h4 className="font-heading text-base font-bold text-[#0F375B]">
                      Misión
                    </h4>
                    <p className="text-sm text-[#474A51] mt-1.5 leading-relaxed">
                      Brindar servicios de construcción y supervisión con rigor
                      técnico, coordinación eficiente y compromiso con la
                      calidad de cada proyecto.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 border-l-4 border-l-[#DB881E]">
                    <h4 className="font-heading text-base font-bold text-[#0F375B]">
                      Visión
                    </h4>
                    <p className="text-sm text-[#474A51] mt-1.5 leading-relaxed">
                      Ser reconocidos como una firma confiable para proyectos
                      que requieren control, experiencia en campo y soluciones
                      constructivas responsables.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 border-l-4 border-l-[#0F375B]">
                    <h4 className="font-heading text-base font-bold text-[#0F375B]">
                      Atributos
                    </h4>
                    <p className="text-sm text-[#474A51] mt-1.5 leading-relaxed">
                      Técnica, solidez, seguridad, orden, cumplimiento,
                      transparencia y capacidad resolutiva.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border border-slate-200/80 border-l-4 border-l-[#0F375B]">
                    <h4 className="font-heading text-base font-bold text-[#0F375B]">
                      Diferenciador
                    </h4>
                    <p className="text-sm text-[#474A51] mt-1.5 leading-relaxed">
                      Combinamos fuerza visual con enfoque técnico, proyectando
                      una operación seria, clara y orientada a resultados.
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Capacidad Real en Campo (Pág. 20 del Manual:
                  Obra y campo | Detalle técnico | Equipo profesional) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E]">
                        CAPACIDAD REAL EN TERRENO
                      </span>
                      <h3 className="font-heading text-lg font-bold text-[#0F375B]">
                        Presencia Técnica y Operativa en Obra
                      </h3>
                    </div>
                    <img
                      src="/brand/isotipo-color.png"
                      alt="Isotipo APEX"
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Fotografía Principal + 2 Secundarias (Estilo Pág. 20 del Manual) */}
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                      <img
                        src="/images/obra-campo.jpg"
                        alt="Obra y campo - Supervisión con planos y EPP"
                        className="w-full h-56 object-cover"
                      />
                      <div className="bg-[#0F375B] text-white py-2.5 px-4 flex items-center justify-between">
                        <span className="font-heading text-sm font-bold">
                          Obra y campo
                        </span>
                        <span className="text-xs text-[#DB881E] font-medium">
                          Supervisión in situ &amp; Control de planos
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                        <img
                          src="/images/detalle-tecnico.jpg"
                          alt="Detalle técnico constructivo y acero"
                          className="w-full h-40 object-cover"
                        />
                        <div className="bg-[#0F375B] text-white py-2.5 px-4 text-center">
                          <span className="font-heading text-sm font-bold">
                            Detalle técnico
                          </span>
                        </div>
                      </div>

                      <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                        <img
                          src="/images/equipo-profesional.jpg"
                          alt="Equipo profesional en obra con EPP"
                          className="w-full h-40 object-cover"
                        />
                        <div className="bg-[#0F375B] text-white py-2.5 px-4 text-center">
                          <span className="font-heading text-sm font-bold">
                            Equipo profesional
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sello de Compromiso */}
                <div className="bg-[#0F375B] text-white rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-l-4 border-[#DB881E]">
                  <div>
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E]">
                      DIRECCIÓN Y RESPALDO TÉCNICO
                    </p>
                    <p className="font-heading text-base font-bold mt-1">
                      Seguridad sin exageración, profesionalismo sin frialdad y
                      cercanía con autoridad técnica.
                    </p>
                  </div>
                  <a
                    href="#contacto"
                    className="shrink-0 font-heading text-xs font-bold uppercase tracking-wider bg-[#DB881E] hover:bg-[#C27616] text-white px-5 py-3 rounded-lg transition-colors"
                  >
                    Agendar Reunión
                  </a>
                </div>
              </div>
            </div>

            {/* ===============================================================
                5. SUB-SECCIÓN: VALORES Y PERSONALIDAD DE MARCA
                (6 Pilares exactos de la Pág. 5 del Manual de Marca, con el
                mismo diseño de línea naranja bajo el título en Azul APEX)
                =============================================================== */}
            <div className="mt-24 pt-16 border-t border-slate-200">
              <div className="max-w-3xl mx-auto text-center space-y-3">
                <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#DB881E]">
                  — PERSONALIDAD Y VALORES DE MARCA
                </p>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0F375B]">
                  Pilares que Definen Nuestro Trabajo en cada Obra
                </h3>
                <p className="text-sm sm:text-base text-[#474A51]">
                  Comunicamos seguridad, orden y criterio profesional en cada
                  punto de contacto con nuestros clientes.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Técnica",
                    desc: "Explica procesos, alcances, metrados y criterios de ingeniería con total claridad.",
                    icon: <FileCheck2 className="w-5 h-5 text-[#0F375B]" />,
                  },
                  {
                    title: "Confiable",
                    desc: "Cumple estrictamente lo ofrecido en contrato y respalda cada decisión con sustento normativo.",
                    icon: <UserCheck className="w-5 h-5 text-[#0F375B]" />,
                  },
                  {
                    title: "Directa",
                    desc: "Evita mensajes ambiguos o excesivamente comerciales; prioriza datos reales de avance.",
                    icon: <Sparkles className="w-5 h-5 text-[#0F375B]" />,
                  },
                  {
                    title: "Resolutiva",
                    desc: "Propone soluciones constructivas viables y anticipa riesgos técnicos o financieros en campo.",
                    icon: <Building2 className="w-5 h-5 text-[#0F375B]" />,
                  },
                  {
                    title: "Ordenada",
                    desc: "Mantiene consistencia rigurosa en cuadernos de obra, documentos, reportes y entregables.",
                    icon: <Calendar className="w-5 h-5 text-[#0F375B]" />,
                  },
                  {
                    title: "Segura",
                    desc: "Transmite control permanente de obra, cultura preventiva SSOMA y criterio profesional.",
                    icon: <ShieldCheck className="w-5 h-5 text-[#0F375B]" />,
                  },
                ].map((pilar, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 hover:bg-white rounded-xl p-7 border border-slate-200/80 hover:border-[#0F375B]/30 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading text-lg font-bold text-[#0F375B]">
                        {pilar.title}
                      </h4>
                      {pilar.icon}
                    </div>
                    {/* Línea naranja característica de la Pág. 5 del Manual */}
                    <div className="w-16 h-1 bg-[#DB881E] mt-2.5 mb-3 rounded-full" />
                    <p className="text-sm text-[#474A51] leading-relaxed">
                      {pilar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            6. SECCIÓN PROYECTOS / PORTAFOLIO (#proyectos)
            Basada en la sección Portafolio de losandes.ing, potenciada con
            filtro por especialidad y vista de ficha técnica de proyecto
            =================================================================== */}
        <section
          id="proyectos"
          className="py-20 lg:py-28 bg-[#0F375B] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blueprint-grid pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#DB881E]">
                  — PORTAFOLIO DE PROYECTOS
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                  Proyectos de Alto Impacto y Control Técnico
                </h2>
                <p className="text-slate-200 text-base">
                  Obras ejecutadas y supervisadas bajo estándares de precisión
                  estructural, cumplimiento normativo y seguridad en campo.
                </p>
              </div>

              <div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-wider bg-[#DB881E] hover:bg-[#C27616] text-white px-6 py-3.5 rounded-lg transition-colors"
                >
                  COTIZAR MI PROYECTO
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Filtros por especialidad */}
            <div className="mt-10 flex flex-wrap gap-2.5">
              {(
                [
                  "Todos",
                  "Construcción Civil",
                  "Supervisión de Obra",
                  "Estructuras",
                  "Gestión y Expedientes",
                ] as ProjectCategory[]
              ).map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`font-heading text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#DB881E] text-white shadow-md"
                        : "bg-white/10 text-slate-200 hover:bg-white/20"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Grid de Tarjetas de Proyectos */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="bg-[#09233B] border border-white/15 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#DB881E]/70 transition-all shadow-lg"
                >
                  <div>
                    {/* Imagen con badge de categoría en Naranja APEX */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#09233B] via-transparent to-black/30" />
                      <span className="absolute top-4 left-4 bg-[#DB881E] text-white font-heading text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                        {project.tag}
                      </span>
                      <span className="absolute bottom-3 right-4 bg-[#0F375B]/90 backdrop-blur-xs text-[#DB881E] font-heading text-xs font-bold px-3 py-1 rounded-md border border-white/15">
                        {project.metric}
                      </span>
                    </div>

                    {/* Contenido */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-slate-300 mb-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-[#DB881E]" />
                          {project.location}
                        </span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#DB881E] transition-colors leading-snug">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-300 mt-3 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      Ver ficha técnica
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        handleSelectServiceForQuote(project.category)
                      }
                      className="text-xs text-slate-300 hover:text-white underline cursor-pointer"
                    >
                      Solicitar similar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Modal de Ficha Técnica de Proyecto */}
        {activeProject && (
          <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="bg-white text-[#474A51] rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-60">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F375B] via-[#0F375B]/40 to-transparent" />
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors cursor-pointer"
                  aria-label="Cerrar ficha técnica"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="bg-[#DB881E] text-white font-heading text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {activeProject.tag}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold mt-2">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-3 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
                  <div>
                    <p className="font-heading font-bold text-[#0F375B] uppercase">
                      Ubicación
                    </p>
                    <p className="mt-0.5">{activeProject.location}</p>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#0F375B] uppercase">
                      Alcance Clave
                    </p>
                    <p className="mt-0.5 font-semibold text-[#DB881E]">
                      {activeProject.metric}
                    </p>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[#0F375B] uppercase">
                      Periodo
                    </p>
                    <p className="mt-0.5">{activeProject.year}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-heading text-sm font-bold text-[#0F375B] uppercase tracking-wider">
                    Descripción Técnica del Proyecto
                  </h4>
                  <p className="text-sm text-[#474A51] mt-1.5 leading-relaxed">
                    {activeProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading text-sm font-bold text-[#0F375B] uppercase tracking-wider">
                    Entregables y Control de Calidad APEX
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {activeProject.deliverables.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm flex items-start gap-2.5 text-[#474A51]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#DB881E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="px-5 py-2.5 rounded-lg border border-slate-300 text-xs font-heading font-bold uppercase text-[#474A51] hover:bg-slate-100 cursor-pointer"
                  >
                    Cerrar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const cat = activeProject.category;
                      setActiveProject(null);
                      handleSelectServiceForQuote(cat);
                    }}
                    className="px-6 py-2.5 rounded-lg bg-[#DB881E] hover:bg-[#C27616] text-white text-xs font-heading font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Cotizar Proyecto Similar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================================================================
            7. SECCIÓN TESTIMONIOS ("Lo que dicen nuestros clientes" -
            estructura de referencia losandes.ing)
            =================================================================== */}
        <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#DB881E]">
                — TESTIMONIOS
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F375B]">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-base text-[#474A51]">
                La confianza se construye con reportes claros, plazos cumplidos
                y obras entregadas sin observaciones.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  initials: "RM",
                  name: "Ing. Ricardo Morales",
                  role: "Director de Infraestructura — Sector Privado",
                  quote:
                    "El nivel de orden documentario y rigor en la supervisión de APEX nos permitió detectar interferencias a tiempo y cerrar la obra dentro del presupuesto aprobado.",
                },
                {
                  initials: "LV",
                  name: "Arq. Lucía Villanueva",
                  role: "Gerente de Proyectos Inmobiliarios",
                  quote:
                    "Trabajar con APEX nos dio tranquilidad total en obra. Sus informes técnicos semanales, el control de calidad del concreto y la seguridad SSOMA fueron impecables.",
                },
                {
                  initials: "JH",
                  name: "Jorge Huamán",
                  role: "Coordinador de Operaciones e Inversiones",
                  quote:
                    "Cumplieron el cronograma de ejecución con precisión y criterio resolutivo en campo. Es una empresa directa, técnica y sumamente confiable.",
                },
              ].map((t, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1 text-[#DB881E] mb-4">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-4 h-4 fill-[#DB881E] text-[#DB881E]"
                        />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-[#474A51] italic leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#0F375B] text-white font-heading font-bold text-sm flex items-center justify-center shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold text-[#0F375B]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[#474A51]">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            8. BANNER DE CONVERSIÓN INTERMEDIO (Inspirado en losandes.ing y
            cierre del Manual Pág. 28: "Construir una marca sólida también es
            supervisar cada detalle")
            =================================================================== */}
        <section className="relative bg-[#09233B] text-white py-16 lg:py-20 overflow-hidden border-b-4 border-[#DB881E]">
          <div className="absolute inset-0 bg-blueprint-grid pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#DB881E]">
              CONSTRUCCIÓN CIVIL &nbsp;|&nbsp; SUPERVISIÓN TÉCNICA &nbsp;|&nbsp;
              GESTIÓN DE PROYECTOS
            </p>
            <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight leading-tight">
              GRANDES PROYECTOS REQUIEREN{" "}
              <span className="text-[#DB881E]">PRECISIÓN Y SUPERVISIÓN.</span>
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              Construir una obra sólida también es supervisar cada detalle.
              Conversemos sobre los alcances técnicos, plazos y requerimientos
              de tu próximo proyecto.
            </p>
            <div className="pt-2">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2.5 font-heading text-sm font-bold uppercase tracking-wider bg-[#DB881E] hover:bg-[#C27616] text-white px-9 py-4 rounded-lg shadow-lg transition-all"
              >
                INICIAR PROYECTO
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ===================================================================
            9. SECCIÓN CONTACTO (#contacto)
            Mantiene los datos oficiales del Manual de Marca (Págs. 22, 23, 25)
            y conecta el formulario con Brevo hacia contacto@apex.com.pe
            =================================================================== */}
        <section id="contacto" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-3">
              <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#DB881E]">
                — CONTÁCTANOS
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F375B]">
                Hablemos de tu próximo proyecto
              </h2>
              <p className="text-base text-[#474A51]">
                Estamos listos para evaluar tus requerimientos técnicos y
                brindarte una propuesta clara en construcción, supervisión o
                gerencia de obra.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Columna Izquierda: Fichas de Contacto Oficiales del Manual */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#0F375B] text-white rounded-2xl p-8 relative overflow-hidden shadow-lg">
                  <div className="absolute top-0 right-0 w-2 h-full bg-[#DB881E]" />

                  <img
                    src="/brand/logo-horizontal-white.png"
                    alt="APEX Construcción y Supervisión"
                    className="w-[220px] h-auto object-contain mb-6"
                  />

                  <p className="text-sm text-slate-200 leading-relaxed mb-8">
                    Atendemos consultas técnicas, licitaciones, cotizaciones de
                    ejecución de obra y servicios de supervisión en Cajamarca y
                    a nivel nacional.
                  </p>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DB881E]">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E]">
                          Oficina Central
                        </p>
                        <p className="text-sm text-white font-medium mt-0.5">
                          Jr. Los Constructores 123, Urb. El Ingeniero
                        </p>
                        <p className="text-xs text-slate-300">
                          Cajamarca, Perú
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DB881E]">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E]">
                          Teléfonos Directos
                        </p>
                        <p className="text-sm text-white font-medium mt-0.5">
                          <a
                            href="tel:+51987654321"
                            className="hover:underline"
                          >
                            +51 987 654 321
                          </a>
                        </p>
                        <p className="text-sm text-white font-medium">
                          <a
                            href="tel:+51976543210"
                            className="hover:underline"
                          >
                            +51 976 543 210
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DB881E]">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E]">
                          Correo Corporativo
                        </p>
                        <a
                          href="mailto:contacto@apex.com.pe"
                          className="text-sm text-white font-medium hover:text-[#DB881E] transition-colors mt-0.5 block"
                        >
                          contacto@apex.com.pe
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#DB881E]">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E]">
                          Sitio Web Oficial
                        </p>
                        <p className="text-sm text-white font-medium mt-0.5">
                          www.apex.com.pe
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Referencia de Gerencia General del Manual Pág. 22 */}
                  <div className="mt-8 pt-6 border-t border-white/15">
                    <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E]">
                      Gerencia General
                    </p>
                    <p className="font-heading text-sm font-bold text-white mt-0.5">
                      Carlos Mercado Panduro
                    </p>
                    <p className="text-xs text-slate-300">
                      APEX Construcción y Supervisión
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Formulario de Contacto conectado con Brevo */}
              <div className="lg:col-span-7">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 sm:p-9 shadow-xs">
                  <div className="mb-6">
                    <h3 className="font-heading text-2xl font-bold text-[#0F375B]">
                      Envíanos un mensaje
                    </h3>
                    <p className="text-sm text-[#474A51] mt-1">
                      Completa los datos de tu requerimiento. Tu solicitud será
                      enviada directamente a{" "}
                      <strong className="text-[#0F375B]">
                        contacto@apex.com.pe
                      </strong>
                      .
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="nombre"
                          className="block font-heading text-xs font-bold uppercase tracking-wider text-[#0F375B] mb-2"
                        >
                          Nombre *
                        </label>
                        <input
                          id="nombre"
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={(e) =>
                            setFormData({ ...formData, nombre: e.target.value })
                          }
                          placeholder="Ej. Carlos"
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:border-[#0F375B] focus:outline-none focus:ring-2 focus:ring-[#0F375B]/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="apellido"
                          className="block font-heading text-xs font-bold uppercase tracking-wider text-[#0F375B] mb-2"
                        >
                          Apellido *
                        </label>
                        <input
                          id="apellido"
                          type="text"
                          required
                          value={formData.apellido}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              apellido: e.target.value,
                            })
                          }
                          placeholder="Ej. Mercado"
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:border-[#0F375B] focus:outline-none focus:ring-2 focus:ring-[#0F375B]/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="email"
                          className="block font-heading text-xs font-bold uppercase tracking-wider text-[#0F375B] mb-2"
                        >
                          Email Corporativo o Personal *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="nombre@empresa.com"
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:border-[#0F375B] focus:outline-none focus:ring-2 focus:ring-[#0F375B]/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="telefono"
                          className="block font-heading text-xs font-bold uppercase tracking-wider text-[#0F375B] mb-2"
                        >
                          Teléfono / Celular
                        </label>
                        <input
                          id="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              telefono: e.target.value,
                            })
                          }
                          placeholder="+51 987 654 321"
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:border-[#0F375B] focus:outline-none focus:ring-2 focus:ring-[#0F375B]/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="empresa"
                          className="block font-heading text-xs font-bold uppercase tracking-wider text-[#0F375B] mb-2"
                        >
                          Empresa / Institución
                        </label>
                        <input
                          id="empresa"
                          type="text"
                          value={formData.empresa}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              empresa: e.target.value,
                            })
                          }
                          placeholder="Nombre de tu organización (opcional)"
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:border-[#0F375B] focus:outline-none focus:ring-2 focus:ring-[#0F375B]/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="tipoProyecto"
                          className="block font-heading text-xs font-bold uppercase tracking-wider text-[#0F375B] mb-2"
                        >
                          Tipo de proyecto *
                        </label>
                        <select
                          id="tipoProyecto"
                          required
                          value={formData.tipoProyecto}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              tipoProyecto: e.target.value,
                            })
                          }
                          className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#000000] focus:border-[#0F375B] focus:outline-none focus:ring-2 focus:ring-[#0F375B]/20"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="Construcción y Ejecución de Obras">
                            Construcción y Ejecución de Obras
                          </option>
                          <option value="Supervisión Técnica de Obras">
                            Supervisión Técnica de Obras
                          </option>
                          <option value="Gerencia y Gestión de Proyectos">
                            Gerencia y Gestión de Proyectos
                          </option>
                          <option value="Expedientes Técnicos y Planos">
                            Expedientes Técnicos y Planos
                          </option>
                          <option value="Ingeniería Estructural y Concreto">
                            Ingeniería Estructural y Concreto
                          </option>
                          <option value="Gestión de Seguridad en Obra (SSOMA)">
                            Gestión de Seguridad en Obra (SSOMA)
                          </option>
                          <option value="Otro requerimiento técnico">
                            Otro requerimiento técnico
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="mensaje"
                        className="block font-heading text-xs font-bold uppercase tracking-wider text-[#0F375B] mb-2"
                      >
                        Mensaje / Alcance del Proyecto *
                      </label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        required
                        value={formData.mensaje}
                        onChange={(e) =>
                          setFormData({ ...formData, mensaje: e.target.value })
                        }
                        placeholder="Describe brevemente la ubicación, tipo de obra, plazos estimados o consulta técnica..."
                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-[#000000] placeholder:text-slate-400 focus:border-[#0F375B] focus:outline-none focus:ring-2 focus:ring-[#0F375B]/20"
                      />
                    </div>

                    {submitStatus && (
                      <div
                        role="status"
                        className={`p-4 rounded-xl border text-sm ${
                          submitStatus.type === "success"
                            ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                            : "bg-red-50 border-red-300 text-red-900"
                        }`}
                      >
                        <p className="font-semibold">{submitStatus.message}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full font-heading text-sm font-bold uppercase tracking-wider bg-[#DB881E] hover:bg-[#C27616] disabled:opacity-60 text-white py-4 px-8 rounded-lg shadow-md transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      {submitting
                        ? "ENVIANDO SOLICITUD..."
                        : "SOLICITAR COTIZACIÓN / ENVIAR MENSAJE"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          10. FOOTER CORPORATIVO
          Usa el Logotipo Horizontal Blanco sobre fondo oscuro Azul APEX
          (#0F375B), cumpliendo estrictamente las Págs. 8, 10 y 12 del Manual
          ===================================================================== */}
      <footer className="bg-[#0F375B] text-white border-t-4 border-[#DB881E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Columna 1: Marca */}
            <div className="lg:col-span-4 space-y-5">
              <img
                src="/brand/logo-horizontal-white.png"
                alt="APEX Construcción y Supervisión - Versión Blanca Oficial"
                className="w-[230px] h-auto object-contain"
              />
              <p className="text-sm text-slate-200 leading-relaxed">
                Construimos con precisión y supervisamos con compromiso.
                Soluciones integrales de construcción civil, supervisión técnica
                y gerencia de proyectos con rigor profesional.
              </p>
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-[#DB881E]">
                / CALIDAD, SEGURIDAD Y COMPROMISO EN CADA PROYECTO.
              </p>
            </div>

            {/* Columna 2: Navegación */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#DB881E]">
                NAVEGACIÓN
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-200">
                <li>
                  <a
                    href="#inicio"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Servicios
                  </a>
                </li>
                <li>
                  <a
                    href="#proyectos"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#nosotros"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="#contacto"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 3: Servicios */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#DB881E]">
                ESPECIALIDADES
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-200">
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Ejecución de Obras Civiles
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Supervisión Técnica de Obras
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Gerencia y Gestión de Proyectos
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Expedientes Técnicos y Planos
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Ingeniería Estructural y Concreto
                  </a>
                </li>
                <li>
                  <a
                    href="#servicios"
                    className="hover:text-[#DB881E] transition-colors"
                  >
                    Seguridad y Salud en Obra (SSOMA)
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 4: Contacto Directo */}
            <div className="lg:col-span-3 space-y-3">
              <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#DB881E]">
                CONTACTO DIRECTO
              </h4>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#DB881E] shrink-0 mt-1" />
                  <span>
                    Jr. Los Constructores 123, Urb. El Ingeniero, Cajamarca,
                    Perú
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#DB881E] shrink-0" />
                  <span>+51 987 654 321 / +51 976 543 210</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#DB881E] shrink-0" />
                  <a
                    href="mailto:contacto@apex.com.pe"
                    className="text-[#DB881E] font-semibold hover:underline"
                  >
                    contacto@apex.com.pe
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Globe className="w-4 h-4 text-[#DB881E] shrink-0" />
                  <span>www.apex.com.pe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <p>
              © {new Date().getFullYear()} APEX — CONSTRUCCIÓN Y SUPERVISIÓN |{" "}
              by{" "}
              <a
                href="https://vertexdev.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#DB881E] hover:underline font-semibold"
              >
                Vertex Developers
              </a>
              . Todos los derechos reservados.
            </p>
            <p className="font-heading font-semibold text-white/90">
              Construir una marca sólida también es supervisar cada detalle.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
