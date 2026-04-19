import { 
  Map, Leaf, Home, Lightbulb, PaintBucket, Hammer,  Ruler, Briefcase, Layers, PenTool
} from 'lucide-react';

export const SERVICES = [
  { 
    slug: "project-planning",
    title: "Project Planning", 
    icon: Map,
    image: "/pic1.webp",
    description: "Strategic planning ensures every detail is defined before execution.",
    longDescription: "Our project planning process establishes a strong foundation for success. We analyze site conditions, define scope, optimize resources, and ensure every phase is aligned with your vision and long-term goals.",
    features: ["Site Analysis", "Feasibility Studies", "Resource Allocation"]
  },

  { 
    slug: "exterior-design",
    title: "Exterior Design", 
    icon: Leaf,
    image: "/img2.png",
    description: "Modern exterior solutions blending aesthetics with durability.",
    longDescription: "We design stunning exteriors that merge architectural elegance with environmental harmony. Every material, finish, and structure is selected to elevate both performance and visual appeal.",
    features: ["Facade Engineering", "Landscape Integration", "Material Selection"]
  },

  { 
    slug: "general-contracting",
    title: "General Contracting", 
    icon: Home,
    image: "/pic2.webp",
    description: "End-to-end construction management with precision.",
    longDescription: "We oversee every stage of construction, ensuring seamless coordination, strict quality control, and timely delivery. Our expertise guarantees a smooth and efficient building process.",
    features: ["Safety Management", "Subcontractor Oversight", "Permit Acquisition"]
  },

  { 
    slug: "modern-construction",
    title: "Modern Construction", 
    icon: Home,
    image: "/pic3.webp",
    description: "Innovative construction techniques for modern structures.",
    longDescription: "Our modern construction solutions integrate advanced technologies, sustainable materials, and efficient workflows to deliver cutting-edge structures built for the future.",
    features: ["Smart Techniques", "Efficient Execution", "Premium Finishing"]
  },

  { 
    slug: "electrical-service",
    title: "Electrical Service", 
    icon: Lightbulb,
    image: "/pic4.webp",
    description: "Reliable electrical systems tailored for safety and performance.",
    longDescription: "We provide professional electrical installations and maintenance services, ensuring safety, efficiency, and long-term reliability across residential and commercial projects.",
    features: ["Wiring Solutions", "Lighting Systems", "Maintenance"]
  },

  { 
    slug: "painting",
    title: "Painting", 
    icon: PaintBucket,
    image: "/pic5.webp",
    description: "Premium finishes that elevate your space.",
    longDescription: "Our painting services deliver flawless finishes using high-quality materials and expert craftsmanship, enhancing both interior and exterior surfaces.",
    features: ["Interior Painting", "Exterior Coating", "Surface Preparation"]
  },

  { 
    slug: "carpentry",
    title: "Carpentry", 
    icon: Hammer,
    image: "/pic6.webp",
    description: "Custom woodwork crafted with precision.",
    longDescription: "We design and build custom carpentry solutions that combine durability with refined craftsmanship, tailored to meet your exact needs.",
    features: ["Custom Furniture", "Wood Finishing", "Structural Work"]
  },
  {
    slug: "design-strategy",
    title: "Design Strategy",
    icon: Ruler,
    image: "/pic7.webp",
    description:
      "Architectural precision tailored to your vision, blending modern aesthetics with functional elegance.",
    longDescription:
      "Our design strategy focuses on transforming ideas into structured, functional, and visually compelling architectural concepts. We align creativity with practicality to ensure every project meets both aesthetic and performance goals.",
    features: [
      "Concept Development",
      "Spatial Planning",
      "Design Optimization"
    ]
  },

  {
    slug: "project-management",
    title: "Project Management",
    icon: Briefcase,
    image: "/pic8.webp",
    description:
      "Seamless coordination of resources and timelines to ensure every milestone is met with absolute precision.",
    longDescription:
      "We manage every aspect of your project lifecycle, ensuring efficient coordination between teams, strict adherence to timelines, and consistent quality control from start to completion.",
    features: [
      "Timeline Planning",
      "Team Coordination",
      "Quality Assurance"
    ]
  },

  {
    slug: "custom-builds",
    title: "Custom Builds",
    icon: Layers,
    image: "/pic9.webp",
    description:
      "Bespoke construction solutions designed to adapt to unique landscapes and specific client requirements.",
    longDescription:
      "Our custom builds are tailored to meet unique project demands, combining innovative construction techniques with personalized design to create one-of-a-kind structures.",
    features: [
      "Tailored Construction",
      "Material Flexibility",
      "Unique Design Execution"
    ]
  },

  {
    slug: "technical-execution",
    title: "Technical Execution",
    icon: PenTool,
    image: "/pic10.webp",
    description:
      "High-performance engineering and finishing that meet the most rigorous modern industry standards.",
    longDescription:
      "We deliver precise technical execution through advanced engineering practices and meticulous attention to detail, ensuring durability, performance, and premium finishing.",
    features: [
      "Engineering Precision",
      "Advanced Techniques",
      "High-End Finishing"
    ]
  },
  
];