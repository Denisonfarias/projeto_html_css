import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import VenueCard from "@/components/VenueCard";
import { venues, type Category } from "@/data/venues";
import { MapPin } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("Todos");

  const filtered = useMemo(() => {
    return venues.filter((v) => {
      const matchesCategory = activeCategory === "Todos" || v.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        v.neighborhood.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary-foreground" />
          <span className="font-display text-xl font-bold text-primary-foreground">
            RolêFortaleza
          </span>
        </div>
      </nav>

      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="mx-auto max-w-7xl px-6 py-10">
        <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div className="mt-8">
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-display text-xl text-muted-foreground">
                Nenhum rolê encontrado 😢
              </p>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Tente buscar por outro nome ou categoria.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filtered.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </main>

      <footer className="border-t border-border bg-card py-8 text-center">
        <p className="font-body text-sm text-muted-foreground">
          © 2026 RolêFortaleza · Feito com ❤️ na Terra da Luz
        </p>
      </footer>
    </div>
  );
};

export default Index;
