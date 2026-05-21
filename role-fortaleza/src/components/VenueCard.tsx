import { motion } from "framer-motion";
import { Star, MapPin, Clock } from "lucide-react";
import type { Venue } from "@/data/venues";

const VenueCard = ({ venue }: { venue: Venue }) => {
  const priceLabel = "R$".repeat(venue.priceLevel);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group cursor-pointer overflow-hidden rounded-lg bg-card shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={venue.image}
          alt={venue.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-secondary px-3 py-1 font-body text-xs font-semibold text-secondary-foreground">
            {venue.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-card/90 backdrop-blur-sm px-2.5 py-1">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="font-body text-xs font-bold text-foreground">{venue.rating}</span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-bold text-foreground leading-tight">
            {venue.name}
          </h3>
          <span className="shrink-0 font-body text-sm font-semibold text-accent">
            {priceLabel}
          </span>
        </div>

        <p className="mt-1.5 font-body text-sm text-muted-foreground line-clamp-2">
          {venue.description}
        </p>

        <div className="mt-3 flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            <span className="font-body text-xs">{venue.neighborhood}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span className="font-body text-xs">{venue.hours}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VenueCard;
