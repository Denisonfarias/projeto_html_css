import venueBar from "@/assets/venue-bar.jpg";
import venueBarraca from "@/assets/venue-barraca.jpg";
import venueComedy from "@/assets/venue-comedy.jpg";
import venuePub from "@/assets/venue-pub.jpg";
import venueMusica from "@/assets/venue-musica.jpg";
import venueRooftop from "@/assets/venue-rooftop.jpg";

export type Category = "Todos" | "Bares" | "Pubs" | "Barracas" | "Comédia" | "Música ao Vivo" | "Rooftops";

export interface Venue {
  id: number;
  name: string;
  category: Category;
  description: string;
  neighborhood: string;
  rating: number;
  priceLevel: number;
  image: string;
  hours: string;
}

export const categories: Category[] = [
  "Todos", "Bares", "Pubs", "Barracas", "Comédia", "Música ao Vivo", "Rooftops"
];

export const categoryEmojis: Record<Category, string> = {
  "Todos": "🔥",
  "Bares": "🍸",
  "Pubs": "🍺",
  "Barracas": "🏖️",
  "Comédia": "😂",
  "Música ao Vivo": "🎶",
  "Rooftops": "🌇",
};

export const venues: Venue[] = [
  {
    id: 1,
    name: "Bar do Zé",
    category: "Bares",
    description: "Drinks artesanais com ingredientes cearenses e ambiente descolado.",
    neighborhood: "Meireles",
    rating: 4.7,
    priceLevel: 2,
    image: venueBar,
    hours: "18h - 02h",
  },
  {
    id: 2,
    name: "Barraca do Loro",
    category: "Barracas",
    description: "Pé na areia, frutos do mar frescos e pôr do sol inesquecível.",
    neighborhood: "Praia do Futuro",
    rating: 4.8,
    priceLevel: 3,
    image: venueBarraca,
    hours: "10h - 22h",
  },
  {
    id: 3,
    name: "Comedy Club Fortaleza",
    category: "Comédia",
    description: "Os melhores comediantes do Nordeste toda sexta e sábado.",
    neighborhood: "Aldeota",
    rating: 4.9,
    priceLevel: 2,
    image: venueComedy,
    hours: "20h - 00h",
  },
  {
    id: 4,
    name: "O'Malley's Pub",
    category: "Pubs",
    description: "Cervejas artesanais importadas e petiscos irresistíveis.",
    neighborhood: "Varjota",
    rating: 4.5,
    priceLevel: 3,
    image: venuePub,
    hours: "17h - 03h",
  },
  {
    id: 5,
    name: "Palco da Praia",
    category: "Música ao Vivo",
    description: "Forró, MPB e sertanejo ao vivo com os pés na areia.",
    neighborhood: "Praia de Iracema",
    rating: 4.6,
    priceLevel: 2,
    image: venueMusica,
    hours: "19h - 04h",
  },
  {
    id: 6,
    name: "Sky Lounge",
    category: "Rooftops",
    description: "Vista panorâmica de Fortaleza com cocktails premium.",
    neighborhood: "Mucuripe",
    rating: 4.8,
    priceLevel: 4,
    image: venueRooftop,
    hours: "18h - 01h",
  },
  {
    id: 7,
    name: "Boteco do Caranguejo",
    category: "Bares",
    description: "O melhor caranguejo da cidade com cerveja gelada.",
    neighborhood: "Praia do Futuro",
    rating: 4.4,
    priceLevel: 2,
    image: venueBar,
    hours: "11h - 23h",
  },
  {
    id: 8,
    name: "Barraca Chico do Caranguejo",
    category: "Barracas",
    description: "Tradição de 30 anos na Praia do Futuro com música ao vivo.",
    neighborhood: "Praia do Futuro",
    rating: 4.7,
    priceLevel: 3,
    image: venueBarraca,
    hours: "09h - 21h",
  },
  {
    id: 9,
    name: "Stand Up CE",
    category: "Comédia",
    description: "Open mic toda quarta e shows especiais nos fins de semana.",
    neighborhood: "Centro",
    rating: 4.3,
    priceLevel: 1,
    image: venueComedy,
    hours: "19h - 23h",
  },
];
