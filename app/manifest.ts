import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Álvaro Fernández - UI/UX Product Designer, Software Engineer",
    short_name: "Álvaro Fernández",
    description:
      "Portfolio profesional de Álvaro Fernández, UI/UX Product Designer, Software Engineer. Especializado en diseño de productos digitales y desarrollo de software.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F0F0F",
    theme_color: "#0F0F0F",
    icons: [
      {
        src: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    categories: ["portfolio", "developer", "technology"],
    lang: "es",
    orientation: "portrait-primary",
  }
}

