export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  service?: string;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Arjeta M.",
    rating: 5,
    date: "2024-11-15",
    text: "The best dental clinic I've ever visited. The staff is incredibly professional and the results of my veneer treatment exceeded all my expectations. Dr. Valbona is a true artist.",
    service: "Veneers",
  },
  {
    id: "2",
    name: "Besnik L.",
    rating: 5,
    date: "2024-10-28",
    text: "I had my implants done here and I couldn't be happier. Dr. Arben walked me through every step of the process. My implants look and feel completely natural. Highly recommend!",
    service: "Dental Implants",
  },
  {
    id: "3",
    name: "Valbona D.",
    rating: 5,
    date: "2024-10-10",
    text: "Stay friendly and very easy to work with. My teeth were straightened in under 18 months with clear aligners and I barely noticed wearing them. Amazing results.",
    service: "Orthodontics",
  },
  {
    id: "4",
    name: "Kujtim R.",
    rating: 5,
    date: "2024-09-22",
    text: "I came in for an emergency with severe pain on a Saturday morning. They fit me in within an hour and the team was so calm and reassuring. The pain was gone by the afternoon.",
    service: "Emergency Dental Care",
  },
  {
    id: "5",
    name: "Fjolla B.",
    rating: 5,
    date: "2024-09-05",
    text: "The teeth whitening results are incredible. I went from being self-conscious about my smile to genuinely loving it. The procedure was comfortable and the staff were wonderful.",
    service: "Teeth Whitening",
  },
  {
    id: "6",
    name: "Mentor S.",
    rating: 4,
    date: "2024-08-18",
    text: "Very professional clinic with modern equipment. Dr. Gentian was thorough and explained everything clearly. The only reason it's not 5 stars is the waiting area, but the treatment itself was flawless.",
    service: "General Dentistry",
  },
  {
    id: "7",
    name: "Lindita K.",
    rating: 5,
    date: "2024-08-02",
    text: "I was terrified of dentists before coming here. The whole team made me feel so comfortable and safe. I've since had my cleaning, two fillings, and I'm actually looking forward to my next appointment.",
    service: "General Dentistry",
  },
  {
    id: "8",
    name: "Shkëlzen P.",
    rating: 5,
    date: "2024-07-14",
    text: "Incredible transformation. I had veneers on my top 8 teeth and the difference is life-changing. Professional, efficient, and the result looks completely natural. Thank you DentaCare!",
    service: "Veneers",
  },
];

export const ratingDistribution = [
  { stars: 5, percentage: 92 },
  { stars: 4, percentage: 6 },
  { stars: 3, percentage: 1 },
  { stars: 2, percentage: 0 },
  { stars: 1, percentage: 1 },
];

export const overallRating = 4.9;
export const totalReviews = 500;
