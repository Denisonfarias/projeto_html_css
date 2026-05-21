import { Search } from "lucide-react";
import heroImage from "@/assets/hero-fortaleza.jpg";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Vista aérea de Fortaleza ao pôr do sol"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
          Descubra os melhores rolês de{" "}
          <span className="text-accent">Fortaleza</span>
        </h1>
        <p className="mt-4 font-body text-lg text-primary-foreground/80">
          Bares, barracas de praia, pubs, shows de comédia e muito mais na Terra da Luz.
        </p>

        <div className="mt-8 flex items-center mx-auto max-w-xl rounded-full bg-card shadow-lg">
          <Search className="ml-5 h-5 w-5 shrink-0 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Qual é a vibe de hoje?"
            className="w-full bg-transparent px-4 py-4 font-body text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
