export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  color: string;
  content?: {
    intro: string[];
    features: {
      title: string;
      description: string;
    }[];
    conclusion: string;
  };
}

export const servicesData: Service[] = [
  {
    slug: "group-centre-activities",
    title: "Group/Centre Activities",
    description:
      "Join our Group/Centre Activities for social connection, skill-building & fun in a supportive environment.",
    image: "/service1.png",
    color: "#9C55A1",
  },
  {
    slug: "development-life-skills",
    title: "Development of Life Skills",
    description:
      "We support you in learning the skills you need to work well & become a productive community member.",
    image: "/service-2.png",
    color: "#47A046",
  },
  {
    slug: "assist-travel-transport",
    title: "Assist Travel / Transport",
    description:
      "Our Assist Travel & Transport service helps you travel safely & independently, whether for daily needs.",
    image: "/service3.png",
    color: "#9C55A1",
  },
  {
    slug: "household-tasks",
    title: "Household Tasks",
    description:
      "We're here to help with everyday chores like cleaning, laundry & meal prep, making life easier and more comfortable for you.",
    image: "/image/services/household-task.jpg",
    color: "#9C55A1",
  },
  {
    slug: "therapeutic-support",
    title: "Therapeutic Support",
    description:
      "We provide professional therapeutic support to help improve your well-being, independence and quality of life.",
    image: "/image/services/therapeutic-support.jpg",
    color: "#47A046",
  },
  {
    slug: "assist-personal-activities",
    title: "Assist Personal Activities",
    description:
      "We help with daily personal tasks like dressing, grooming & mobility, ensuring you feel supported & independent.",
    image: "/image/services/assist-personal-activities.jpg",
    color: "#9C55A1",
  },

  {
    slug: "plan-management",
    title: "Plan Management",
    description:
      "Managing your NDIS funding can feel overwhelming, but Plan Management makes it easier. Our Plan Management service helps you handle your NDIS budget without the stress of paperwork or financial tracking.We take care of paying your providers, keeping accurate records, and ensuring your funds are used correctly. You’ll have full choice and control over the services you receive — we simply handle the admin side for you.With our experienced team by your side, you’ll get regular budget updates, clear statements, and ongoing support to help you make the most of your plan.Let us manage the details so you can focus on achieving your goals.",
    image: "/image/services/service-image-7.jpg",
    color: "#9C55A1",
  },
  {
    slug: "shared-accommodation",
    title: "Shared Accommodation",
    description:
      "Shared Accommodation provides a comfortable and supportive living environment for NDIS participants who prefer to share a home with others. It’s designed to promote independence while offering the right level of support for daily living. In a shared home, you can enjoy your own personal space while also connecting with housemates, building friendships, and taking part in shared activities. Our team ensures the home is safe, well-maintained, and suited to your individual needs. Support is available for household tasks, personal care, meal preparation, and community participation — all to help you live confidently and comfortably. Shared Accommodation is more than just a place to live — it’s a space to belong and grow.",
    image: "/image/services/service-image-8.jpg",
    color: "#47A046",
  },

  {
    slug: "community-nursing-care",
    title: "Community Nursing Care",
    description:
      "Community Nursing Care provides clinical and personal support to help you manage your health needs safely and comfortably at home. Our qualified nurses deliver compassionate care while focusing on your wellbeing and independence.Services include wound care, medication management, continence support, health monitoring, and specialised nursing for complex needs. Each care plan is developed around your individual goals and health requirements.Our nurses work closely with you, your family, and other healthcare professionals to ensure consistent and high-quality care.With Community Nursing Care, you receive professional support in a familiar environment — helping you stay healthy, confident, and independent.",
    image: "/image/services/service-image-9.jpg",
    color: "#9C55A1",
  },

  {
    slug: "supported-independent-living",
    title: "Supported Independent Living (SIL)",
    description:
      "Supported Independent Living (SIL) helps NDIS participants live as independently as possible while receiving the support they need with everyday tasks. It’s ideal for people who want to build daily living skills, gain confidence, and enjoy greater independence at home.Our team provides assistance with personal care, cooking, cleaning, medication, and household management. Support is available 24/7, ensuring a safe and comfortable living environment.Each SIL arrangement is designed around your goals and lifestyle preferences. Whether you live alone or in shared accommodation, our dedicated staff will help you create a balanced and fulfilling daily routine.With SIL, you can enjoy independence while knowing support is always close by.",
    image: "/image/services/service-image-10.jpg",
    color: "#9C55A1",
  },

  {
    slug: "assist-life-stage-transition",
    title: "Assist–Life Stage, Transition",
    description:
      "Assist–Life Stage, Transition supports NDIS participants through life changes by helping them plan, prepare, and adjust with confidence. These transitions can include moving out of home, starting a new job, building social connections, or learning to manage daily responsibilities more independently.Our team provides guidance and practical support to help you build essential life skills such as decision-making, problem-solving, budgeting, and goal setting. We also assist with coordinating services and connecting you to community supports that suit your needs.Every step is about helping you develop the confidence and skills to manage new stages of life successfully.With the right support, every transition becomes a step towards greater independence and personal growth.",
    image: "/image/services/service-image-11.jpg",
    color: "#47A046",
  },

  {
    slug: "participate-community",
    title: "Participate Community",
    description:
      "Participate Community helps NDIS participants build social connections, engage in local activities, and become active members of their community. It’s about discovering new interests, gaining confidence, and developing skills that support independence and wellbeing.Our team assists you in joining community events, recreational programs, volunteering opportunities, and social groups that match your goals and interests. Support is flexible — whether you prefer one-on-one outings or group activities, we make sure you feel comfortable and supported every step of the way.Through community participation, you can make meaningful connections, explore new experiences, and enjoy a greater sense of belonging.",
    image: "/image/services/service-image-12.jpg",
    color: "#9C55A1",
  },
];
