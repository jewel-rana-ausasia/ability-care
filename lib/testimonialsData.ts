// lib/testimonialsData.ts

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  image: string;
  color: string;
}

export interface TestimonialsSectionData {
  header: string;
  description: string;
  testimonials: Testimonial[];
}

export const testimonialsData: TestimonialsSectionData = {
  header: "Why Choose Us?",
  description:
    "At our core, we are dedicated to providing high-quality, personalised support that empowers individuals with disabilities to live independently and with dignity. Our experienced team is committed to your well-being, ensuring you receive the care and assistance you need to achieve your goals. With a strong foundation of trust, respect, and integrity, we go above & beyond to create a supportive and inclusive environment where you feel valued and heard.",
  testimonials: [
    {
      quote:
        "Thank you Vserve for helping me get my funding approved from NDIS. It has brought such a positive change to my lifestyle.",
      name: "Rodger Horiott",
      location: "Sydney",
      image: "/our-testimonials.jpg",
      color: "#9C55A1",
    },
    {
      quote:
        "Ability Care provided me with amazing personalized support. I feel more independent and confident in my daily life.",
      name: "Sarah Johnson",
      location: "Melbourne",
      image: "/our-testimonials.jpg",
      color: "#47A046",
    },
    {
      quote:
        "Their team is professional and caring. They truly understand my needs and have made a huge difference in my wellbeing.",
      name: "Michael Lee",
      location: "Brisbane",
      image: "/our-testimonials.jpg",
      color: "#9C55A1",
    },
  ],
};
