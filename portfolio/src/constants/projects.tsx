import CoinbaseContent from "@/components/ProjectsContents/CoinbaseContent";

export const projects = [
  {
    title: "Coinbase",
    slug: "coinbase",
    description:
      "Ecommerce completo con backend, frontend, pasarela de pago (Stripe), email (SendGrid) y base de datos.",
    image: "/Interiro-cantina-Mos-Eisley-DOS.jpg",
    link: "#",
    techIcons: ["react", "nodedotjs", "stripe", "sendgrid", "mysql"],
    githubUrl: "https://github.com/byehizer/coinbase",
    trelloUrl: "https://trello.com/b/UYM1Zta8/coinbase",
    ContentComponent: CoinbaseContent,
  },
];
