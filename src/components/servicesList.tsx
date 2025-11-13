import {
  ArrowRight,
  Award,
  Camera,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Cpu,
  Home,
  Network,
  Server,
  Shield,
  ShoppingCart,
  Wifi,
  Wrench,
} from "lucide-react";

import image1 from "@/assets/images/camera2.jpg";
import image3 from "@/assets/images/hardware.jpg";
import image2 from "@/assets/images/networking.jpg";

export const mainServices = [
  {
    icon: Camera,
    picture: image1,
    title: "Security Solutions",
    description:
      "Enhance safety with advanced surveillance and access control systems designed for homes, offices, and facilities.",
    features: [
      "CCTV & Camera Installation",
      "Access Control Systems (Biometric, RFID, Keycard)",
      "Alarm & Motion Detection Systems",
      "Smart Surveillance Integration",
      "Remote Monitoring & Cloud Storage",
      "24/7 Security System Support",
    ],
    detailedInfo:
      "Our security solutions include professional CCTV installation, access management systems, and motion-triggered alarms — ensuring continuous protection for your property.",
  },
  {
    icon: Wifi,
    picture: image2,
    title: "Networking & Infrastructure",
    description: "Reliable network design, setup, and optimization for seamless connectivity and high performance.",
    features: [
      "LAN/WAN Design & Setup",
      "Server Installation & Configuration",
      "Structured Cabling & Fiber Work",
      "Cloud & Backup Solutions",
      "Network Security & Firewalls",
      "VPN & Remote Access Setup",
    ],
    detailedInfo:
      "We deliver scalable network infrastructures and IT systems built to support enterprise-grade performance and reliability — from office connectivity to cloud backups.",
  },
  {
    icon: Wrench,
    picture: image3,
    title: "Maintenance & IT Support",
    description: "Proactive maintenance and responsive support for all your IT and networking needs.",
    features: [
      "Hardware Diagnosis & Repair",
      "Preventive Maintenance",
      "On-site & Remote Technical Support",
      "System Optimization & Upgrades",
      "Performance Monitoring",
      "Comprehensive IT Consultation",
    ],
    detailedInfo:
      "Keep your technology at peak efficiency with our proactive maintenance programs, system audits, and responsive technical support services.",
  },
];

export const additionalServices = [
  {
    Icon: ShoppingCart,
    title: "IT Equipment Supply",
    description:
      "Authorized suppliers of computers, servers, printers, and accessories — available for both retail and bulk orders.",
    features: [
      "Desktop & Laptop Sales",
      "Printers, Scanners & Accessories",
      "Monitors & Peripherals",
      "Bulk Procurement Options for Offices",
    ],
  },
  {
    Icon: Cpu,
    title: "Computer Assembly & Configuration",
    description:
      "Custom PC builds and configuration services for office, enterprise, and high-performance computing environments.",
    features: [
      "Custom Desktop Assembly",
      "Workstation Configuration",
      "Performance Optimization",
      "Hardware Compatibility Testing",
    ],
  },
  {
    Icon: Server,
    title: "Server & Data Center Solutions",
    description:
      "Professional setup and optimization of servers, NAS systems, and data center hardware for businesses.",
    features: [
      "Server Installation & Virtualization",
      "Rack & Power Setup",
      "Storage and Backup Systems",
      "Data Center Networking",
    ],
  },
  {
    Icon: Network,
    title: "Enterprise Networking Devices",
    description:
      "Procurement and configuration of enterprise-grade routers, switches, and wireless systems for organizations.",
    features: [
      "Cisco, Mikrotik, Ubiquiti Devices",
      "Network Design & Topology Setup",
      "Firewall & Security Systems",
      "Load Balancing & Optimization",
    ],
  },
  {
    Icon: Home,
    title: "Office & IT Infrastructure Setup",
    description:
      "Complete office IT setup including computers, printers, internet, security, and communication systems.",
    features: [
      "Workstation Planning & Setup",
      "Network & Internet Configuration",
      "Hardware & Software Installation",
      "Office Tech Support & Management",
    ],
  },
  {
    Icon: ClipboardCheck,
    title: "Consultancy & Project Management",
    description:
      "Comprehensive IT project planning, system design, and deployment management for small and large enterprises.",
    features: [
      "IT Strategy & Assessment",
      "System Design & Implementation",
      "Project Supervision & Reporting",
      "Post-deployment Optimization",
    ],
  },
];

export const whyChooseUs = [
  {
    icon: Shield,
    title: "Certified Professionals",
    description: "Our engineers are certified experts with deep hands-on experience across multiple industries.",
  },
  {
    icon: Clock,
    title: "Fast Response Time",
    description: "Dedicated 24/7 support with guaranteed response and resolution timeframes.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Every installation and service is backed by warranty and rigorous testing standards.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description: "We assess your requirements and objectives.",
  },
  {
    number: "02",
    title: "Planning",
    description: "Design customized solutions tailored to your needs.",
  },
  {
    number: "03",
    title: "Implementation",
    description: "Professional installation and system integration.",
  },
  {
    number: "04",
    title: "Support",
    description: "Ongoing maintenance and assistance post-deployment.",
  },
];
