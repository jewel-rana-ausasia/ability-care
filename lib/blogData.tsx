// lib/blogData.ts

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
  buttonColor: string;
  content: {
    title: string;
    text: string;
  }[];
  conclusion: {
    title: string;
    text: string;
    additionalText?: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "promote-independence",
    title: "How to Promote Independence in Disability?",
    date: "February 18, 2025",
    image: "/blog-image-1.jpg",
    buttonColor: "#6F3C72",
    content: [
      {
        title: "1. Personalised Daily Support:",
        text: "Our tailored care plans encourage self-reliance in tasks like cooking, personal care, and household management.",
      },
      {
        title: "2. Building Life Skills:",
        text: "We provide training in budgeting, decision-making, and problem-solving to empower individuals in managing daily life.",
      },
      {
        title: "3. Assistive Technology:",
        text: "From mobility aids to smart devices, assistive technology enhances accessibility and makes everyday tasks easier.",
      },
      {
        title: "4. Community Participation:",
        text: "Joining social groups, events, and workshops helps build confidence and meaningful connections.",
      },
      {
        title: "5. Education & Employment Support:",
        text: "We assist individuals in accessing education, vocational training, and employment opportunities for financial independence.",
      },
      {
        title: "6. Accessible Transport Solutions:",
        text: "We help find reliable transport options, enabling freedom to travel for work, social activities, and personal needs.",
      },
      {
        title: "7. Encouraging Self-Advocacy:",
        text: "We empower individuals to express their needs, make choices, and take charge of their support plans.",
      },
    ],
    conclusion: {
      title: "Join Us in Promoting Independence!",
      text: "At Ability Care, we are committed to fostering independence by providing tailored support & resources. With the right guidance & encouragement, people with disabilities can lead empowered, self-directed lives.",
      additionalText:
        "Need support on your journey to independence? Contact Ability Care today to learn how we can help!",
    },
  },
  {
    slug: "best-social-activities",
    title: "What Are The Best Social Activities For Disabled?",
    date: "February 8, 2025",
    image: "/blog-image-2.jpg",
    buttonColor: "#57A754",
    content: [
      {
        title: "1. Community Events and Workshops:",
        text: "Participating in local events, art classes, and educational workshops builds connection and engagement.",
      },
      {
        title: "2. Sports and Recreation:",
        text: "Adaptive sports, swimming, and wheelchair-friendly activities boost physical fitness and confidence.",
      },
      {
        title: "3. Social Clubs and Groups:",
        text: "Joining interest-based clubs such as book clubs or gaming groups enhances socialization and belonging.",
      },
      {
        title: "4. Volunteer Opportunities:",
        text: "Giving back to the community through accessible volunteer programs provides a sense of purpose.",
      },
    ],
    conclusion: {
      title: "Get Involved Today!",
      text: "Social activities are essential for building connections and improving quality of life. Find activities that match your interests and abilities.",
      additionalText: "Contact us to discover social opportunities in your area!",
    },
  },
  {
    slug: "occupational-therapy",
    title: "Occupational Therapy Recommended for Seniors?",
    date: "January 28, 2024",
    image: "/blog-image-3.jpg",
    buttonColor: "#6F3C72",
    content: [
      {
        title: "1. Improving Daily Living Skills:",
        text: "Helping seniors maintain independence in daily activities like dressing, cooking, and personal care.",
      },
      {
        title: "2. Home Safety Assessments:",
        text: "Identifying and modifying home environments to prevent falls and accidents.",
      },
      {
        title: "3. Cognitive Support:",
        text: "Providing strategies to manage memory loss and maintain mental sharpness.",
      },
      {
        title: "4. Adaptive Equipment:",
        text: "Recommending and training seniors on assistive devices that make daily tasks easier.",
      },
    ],
    conclusion: {
      title: "Enhance Your Quality of Life!",
      text: "Occupational therapy can significantly improve independence and safety for seniors.",
      additionalText:
        "Speak with our occupational therapists to learn how we can help you or your loved ones.",
    },
  },
  {
    slug: "ndis-plan-tips",
    title: "Making the Most of Your NDIS Plan: Tips for Better Support",
    date: "January 15, 2025",
    image: "/blog-image4.png",
    buttonColor: "#6F3C72",
    content: [
      {
        title: "1. Understand Your Plan:",
        text: "Take time to thoroughly review your NDIS plan and understand your budgets and goals.",
      },
      {
        title: "2. Set Clear Goals:",
        text: "Define specific, measurable goals that align with your aspirations and support needs.",
      },
      {
        title: "3. Choose the Right Providers:",
        text: "Research and select service providers who truly understand your goals and values.",
      },
      {
        title: "4. Regular Plan Reviews:",
        text: "Track your plan spending and prepare for periodic reviews to make adjustments as needed.",
      },
    ],
    conclusion: {
      title: "Maximize Your NDIS Plan!",
      text: "With proper planning and the right support, your NDIS plan can help you achieve your goals and improve your quality of life.",
      additionalText:
        "Need help navigating your NDIS plan? Our support coordinators are here to assist you.",
    },
  },
  {
    slug: "disability-services-independence",
    title: "How Disability Services Help You Live Independently",
    date: "January 2, 2025",
    image: "/blog-image5.png",
    buttonColor: "#57A754",
    content: [
      {
        title: "1. Personalized Support Plans:",
        text: "Tailored services designed to match your specific goals, abilities, and preferences.",
      },
      {
        title: "2. Skill Development:",
        text: "Programs aimed at building daily living and decision-making skills for greater autonomy.",
      },
      {
        title: "3. Community Access:",
        text: "Support to help individuals participate fully in community and social life.",
      },
      {
        title: "4. Housing Support:",
        text: "Guidance in finding and maintaining suitable accommodation that promotes independence.",
      },
    ],
    conclusion: {
      title: "Live Life on Your Terms!",
      text: "Disability services are designed to empower you to live independently and participate fully in your community.",
      additionalText:
        "Discover how our services can support your journey to independence.",
    },
  },
  {
    slug: "personal-care-support-impact",
    title: "Understanding the Impact of Personal Care Support",
    date: "December 25, 2024",
    image: "/blog-image6.png",
    buttonColor: "#6F3C72",
    content: [
      {
        title: "1. Enhanced Dignity and Well-being:",
        text: "Professional personal care maintains dignity while ensuring hygiene and comfort.",
      },
      {
        title: "2. Reduced Caregiver Burden:",
        text: "Trained support staff relieve family members from continuous caregiving responsibilities.",
      },
      {
        title: "3. Improved Health Outcomes:",
        text: "Regular personal care prevents health issues and promotes physical wellness.",
      },
      {
        title: "4. Increased Confidence:",
        text: "Proper personal care helps individuals feel confident and socially engaged.",
      },
    ],
    conclusion: {
      title: "Quality Care for Better Living!",
      text: "Personal care support is essential for maintaining health, dignity, and quality of life for people with disabilities.",
      additionalText:
        "Learn about our personalized care services and how they can make a difference.",
    },
  },
   {
    "slug": "assistive-technology-benefits",
    "title": "Top Benefits of Assistive Technology for People with Disabilities",
    "date": "March 10, 2025",
    "image": "/blog-image-7.jpg",
    "buttonColor": "#6F3C72",
    "content": [
      {
        "title": "1. Increased Independence:",
        "text": "Assistive devices like mobility aids and voice-controlled systems allow individuals to perform daily tasks with less reliance on others."
      },
      {
        "title": "2. Improved Communication:",
        "text": "Speech-generating devices and communication apps help people with speech difficulties express themselves clearly."
      },
      {
        "title": "3. Enhanced Learning Opportunities:",
        "text": "Technology such as screen readers and educational software provides inclusive access to education for all learners."
      },
      {
        "title": "4. Greater Workplace Accessibility:",
        "text": "Tools like ergonomic keyboards and adaptive workstations enable people with disabilities to perform effectively in professional environments."
      }
    ],
    "conclusion": {
      "title": "Empowering Through Innovation!",
      "text": "Assistive technology transforms lives by enhancing accessibility and independence.",
      "additionalText": "Stay updated with new assistive tools that can improve your daily life."
    }
  },
  {
    "slug": "mental-health-importance",
    "title": "The Importance of Mental Health Support in Disability Care",
    "date": "March 2, 2025",
    "image": "/blog-image-8.jpg",
    "buttonColor": "#57A754",
    "content": [
      {
        "title": "1. Emotional Well-being:",
        "text": "Mental health care helps individuals manage stress, anxiety, and depression associated with living with a disability."
      },
      {
        "title": "2. Building Resilience:",
        "text": "Therapeutic support strengthens coping mechanisms and emotional balance."
      },
      {
        "title": "3. Support Networks:",
        "text": "Peer groups and counseling sessions foster connection and reduce isolation."
      },
      {
        "title": "4. Holistic Care Approach:",
        "text": "Combining mental and physical care ensures a more balanced and fulfilling life."
      }
    ],
    "conclusion": {
      "title": "Mind Matters!",
      "text": "Prioritizing mental health is crucial for overall well-being and happiness.",
      "additionalText": "Reach out for counseling or emotional support services when needed."
    }
  },
  {
    "slug": "community-participation",
    "title": "Why Community Participation Matters for People with Disabilities",
    "date": "February 20, 2025",
    "image": "/blog-image-9.jpg",
    "buttonColor": "#6F3C72",
    "content": [
      {
        "title": "1. Building Confidence:",
        "text": "Active participation helps individuals feel more connected and valued within their community."
      },
      {
        "title": "2. Creating Friendships:",
        "text": "Engaging in social events provides opportunities to build lasting relationships."
      },
      {
        "title": "3. Skill Development:",
        "text": "Volunteering and group activities enhance communication and leadership skills."
      },
      {
        "title": "4. Reducing Social Barriers:",
        "text": "Inclusive participation challenges stereotypes and promotes equality."
      }
    ],
    "conclusion": {
      "title": "Be Part of the Change!",
      "text": "Community participation encourages belonging, inclusion, and empowerment.",
      "additionalText": "Join local events or programs that welcome diverse abilities."
    }
  },
  {
    "slug": "nutrition-for-wellbeing",
    "title": "Healthy Nutrition Tips for People with Disabilities",
    "date": "February 12, 2025",
    "image": "/blog-image-10.jpg",
    "buttonColor": "#6F3C72",
    "content": [
      {
        "title": "1. Balanced Diet Planning:",
        "text": "Include a variety of fruits, vegetables, proteins, and grains to maintain energy and health."
      },
      {
        "title": "2. Hydration Is Key:",
        "text": "Staying hydrated supports digestion, focus, and overall body function."
      },
      {
        "title": "3. Addressing Specific Needs:",
        "text": "Specialized meal plans can help manage conditions like diabetes or limited mobility."
      },
      {
        "title": "4. Accessible Cooking Options:",
        "text": "Simple adaptive kitchen tools can make meal prep easier and more enjoyable."
      }
    ],
    "conclusion": {
      "title": "Eat Well, Live Well!",
      "text": "Good nutrition plays a key role in maintaining strength and independence.",
      "additionalText": "Consult a dietitian for personalized nutrition advice."
    }
  },
  {
    "slug": "accessible-transport",
    "title": "Accessible Transport: Expanding Freedom and Mobility",
    "date": "January 30, 2025",
    "image": "/blog-image-11.jpg",
    "buttonColor": "#57A754",
    "content": [
      {
        "title": "1. Freedom to Travel:",
        "text": "Accessible transport options give individuals the ability to move freely and independently."
      },
      {
        "title": "2. Inclusive Infrastructure:",
        "text": "Wheelchair-friendly vehicles and stations make commuting easier and safer."
      },
      {
        "title": "3. Employment Opportunities:",
        "text": "Better transport access helps people reach workplaces and educational centers easily."
      },
      {
        "title": "4. Social Inclusion:",
        "text": "Accessible travel encourages participation in community and recreational activities."
      }
    ],
    "conclusion": {
      "title": "Travel Without Limits!",
      "text": "Accessible transport is a key part of independence and equality.",
      "additionalText": "Learn about local transport programs designed for accessibility."
    }
  },
  {
    "slug": "inclusive-education",
    "title": "Inclusive Education: Empowering Students with Disabilities",
    "date": "January 12, 2025",
    "image": "/blog-image-12.jpg",
    "buttonColor": "#6F3C72",
    "content": [
      {
        "title": "1. Equal Learning Opportunities:",
        "text": "Inclusive education ensures students with disabilities can learn alongside peers in supportive environments."
      },
      {
        "title": "2. Adaptive Learning Tools:",
        "text": "Technology like audiobooks, Braille materials, and digital aids make learning accessible for all."
      },
      {
        "title": "3. Teacher Training:",
        "text": "Educators are trained to understand diverse needs and provide inclusive teaching methods."
      },
      {
        "title": "4. Building Confidence:",
        "text": "Learning in inclusive settings fosters self-esteem and prepares students for future success."
      }
    ],
    "conclusion": {
      "title": "Education for Everyone!",
      "text": "Inclusive learning empowers individuals and strengthens communities.",
      "additionalText": "Support inclusive education initiatives in your local area."
    }
  }
];
