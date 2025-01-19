import { Button } from "@/components/ui/button";
import Link from "next/link";

const links: [string, string][] = [
  ["tur pelas telas", "/tutorial/screen-tour"],
  ["fluxo completo", ""],
  ["como fazer um site", ""],
  ["como fazer um aplicativo", ""],
  ["como fazer um jogo", ""],
  ["como fazer um chatbot", ""],
  ["como fazer um robô", ""],
  ["como fazer um sistema", ""],
  ["como fazer um servidor", ""],
  ["como fazer um banco de dados", ""],
  ["como fazer uma API", ""],
  ["como fazer uma integração", ""],
  ["como fazer uma automação", ""],
  ["como fazer uma análise", ""],
  ["como fazer uma visualização", ""],
  ["como fazer um dashboard", ""],
  ["como fazer um relatório", ""],
  ["como fazer um gráfico", ""],
  ["como fazer um mapa", ""],
  ["como fazer um diagrama", ""],
  ["como fazer um fluxograma", ""],
  ["como fazer um organograma", ""],
  ["como fazer um wireframe", ""],
  ["como fazer um mockup", ""],
  ["como fazer um protótipo", ""],
  ["como fazer um design", ""],
  ["como fazer uma ilustração", ""],
  ["como fazer uma animação", ""],
  ["como fazer um vídeo", ""],
  ["como fazer um áudio", ""],
  ["como fazer um texto", ""],
  ["como fazer uma tradução", ""],
];

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl">
      <header className="py-3">Tutoriais</header>
      <main>
        <ul className="flex flex-wrap gap-4">
          {links.slice(0, 3).map(([label, href]) => (
            <li key={href}>
              <Button asChild>
                <Link href={href}>{label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
