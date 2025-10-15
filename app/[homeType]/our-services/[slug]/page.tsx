"use client";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";

// Define the service data structure
interface ServiceDetail {
  slug: string;
  title: string;
  image: string;
  description: string;
  content: {
    intro: string[];
    features: {
      title: string;
      description: string;
    }[];
    conclusion: string;
  };
}

const ServiceDetailsPage: React.FC = () => {
  const { slug } = useParams(); // Get the slug from URL params

  // Service data - in a real app, this would come from an API or database
  const serviceDetails: Record<string, ServiceDetail> = {
    "household-tasks": {
      slug: "household-tasks",
      title: "Household Tasks",
      image: "/image/services/household-task.jpg",
      description: "We're here to help with everyday chores like cleaning, laundry & meal prep, making life easier and more comfortable for you.",
      content: {
        intro: [
          "We specialise in providing exceptional cleaning services thoughtfully designed to meet the unique needs of individuals with disabilities. We understand that a clean and organised home is essential for health, comfort, and overall well-being, which is why our mission is to create a living environment that brings peace, joy, and positivity into your daily life.",
          "Our dedicated team of professionals brings compassion and care to every cleaning assignment. We understand how personal your home is to you, and we treat each space with the respect and attention it deserves."
        ],
        features: [
          {
            title: "Meal Preparation and Planning: ",
            description: "From planning your meals to preparing them, we make sure your dietary preferences and needs are met. Enjoy nutritious, delicious meals without the hassle of doing it all yourself."
          },
          {
            title: "Home and Garden Maintenance: ",
            description: "We help keep your home and surrounding garden in top-notch condition. From small maintenance tasks to regular upkeep, we're here to make everything easier for you."
          },
          {
            title: "Comprehensive Cleaning Services: ",
            description: "Bathrooms, kitchens, toilets, living areas, and bedrooms—cleaned and freshened. Cleaning cook-tops, wiping down bench tops, and tidying the inside of fridges, ovens, and microwaves. Floors vacuumed and mopped, surfaces dusted, and dishes washed."
          },
          {
            title: "Laundry and Linen Care: ",
            description: "Changing bed linen and keeping your bedroom feeling fresh. Washing, drying, and managing essential ironing tasks."
          },
          {
            title: "Grocery Shopping: ",
            description: "You'll no longer need to worry about the effort of grocery shopping. We handle the trips for you or accompany you as needed, ensuring you have everything you need to keep your home running smoothly."
          }
        ],
        conclusion: "Get Started Today"
      }
    },
    "group-centre-activities": {
      slug: "group-centre-activities",
      title: "Group/Centre Activities",
      image: "/service1.png",
      description: "Join our Group/Centre Activities for social connection, skill-building & fun in a supportive environment.",
      content: {
        intro: [
          "Our Group and Centre Activities provide a welcoming space for individuals to connect, learn, and grow together. We believe in the power of community and social interaction to enhance well-being and build meaningful relationships.",
          "Each activity is carefully designed to be inclusive, engaging, and tailored to the interests and abilities of our participants."
        ],
        features: [
          {
            title: "Social Connection Activities: ",
            description: "Regular social gatherings, group outings, and community events that foster friendships and reduce isolation."
          },
          {
            title: "Skill Development Workshops: ",
            description: "Interactive workshops focusing on practical life skills, creative arts, and personal development in a group setting."
          },
          {
            title: "Recreational Programs: ",
            description: "Fun and engaging activities including games, sports, music, and arts tailored to various interests and abilities."
          },
          {
            title: "Educational Sessions: ",
            description: "Group learning opportunities covering topics like health, nutrition, technology, and community awareness."
          },
          {
            title: "Therapeutic Group Activities: ",
            description: "Structured group sessions that combine therapy with social interaction for holistic well-being."
          }
        ],
        conclusion: "Join Our Community Activities Today"
      }
    },
    "development-life-skills": {
      slug: "development-life-skills",
      title: "Development of Life Skills",
      image: "/service-2.png",
      description: "We support you in learning the skills you need to work well & become a productive community member.",
      content: {
        intro: [
          "Our Life Skills Development program is designed to empower individuals with the practical abilities needed for independent living and community participation. We focus on building confidence and competence in essential daily activities.",
          "Through personalized training and supportive guidance, we help participants develop the skills that matter most for their personal goals and aspirations."
        ],
        features: [
          {
            title: "Daily Living Skills: ",
            description: "Training in cooking, cleaning, personal care, and household management to promote independence in everyday life."
          },
          {
            title: "Financial Management: ",
            description: "Learning budgeting, banking, bill payment, and money management skills for financial independence."
          },
          {
            title: "Communication Skills: ",
            description: "Developing effective communication, social interaction, and relationship-building abilities."
          },
          {
            title: "Problem-Solving Skills: ",
            description: "Building critical thinking and decision-making capabilities for handling daily challenges."
          },
          {
            title: "Community Navigation: ",
            description: "Learning to use public transport, access community services, and participate in local activities confidently."
          }
        ],
        conclusion: "Start Your Journey to Independence Today"
      }
    },
    "assist-travel-transport": {
      slug: "assist-travel-transport",
      title: "Assist Travel / Transport",
      image: "/service3.png",
      description: "Our Assist Travel & Transport service helps you travel safely & independently, whether for daily needs.",
      content: {
        intro: [
          "Our Transport Assistance service ensures that individuals with disabilities can travel safely, comfortably, and with dignity. We understand that reliable transportation is key to accessing opportunities and maintaining independence.",
          "Whether it's for medical appointments, social activities, work, or daily errands, we provide transportation solutions that meet your specific needs and preferences."
        ],
        features: [
          {
            title: "Medical Appointment Transport: ",
            description: "Reliable transportation to and from medical appointments, ensuring you never miss important healthcare visits."
          },
          {
            title: "Social and Community Transport: ",
            description: "Transport to social events, community activities, and recreational outings to support your social connections."
          },
          {
            title: "Work and Education Transport: ",
            description: "Consistent transportation solutions for work, training programs, and educational institutions."
          },
          {
            title: "Vehicle Accessibility: ",
            description: "Fully accessible vehicles equipped with ramps, lifts, and securement systems for wheelchairs and mobility aids."
          },
          {
            title: "Companion Support: ",
            description: "Trained support workers who can accompany you during travel and assist with navigation and accessibility needs."
          }
        ],
        conclusion: "Book Your Safe Transport Today"
      }
    },
    "therapeutic-support": {
      slug: "therapeutic-support",
      title: "Therapeutic Support",
      image: "/image/services/therapeutic-support.jpg",
      description: "We provide professional therapeutic support to help improve your well-being, independence and quality of life.",
      content: {
        intro: [
          "Our Therapeutic Support services are delivered by qualified professionals who specialize in working with individuals with disabilities. We take a holistic approach to therapy, addressing physical, emotional, and psychological well-being.",
          "Each therapeutic plan is customized to your unique needs, goals, and preferences, ensuring meaningful progress and improved quality of life."
        ],
        features: [
          {
            title: "Occupational Therapy: ",
            description: "Helping you develop the skills needed for daily living, work, and leisure activities through targeted interventions."
          },
          {
            title: "Physiotherapy Services: ",
            description: "Improving mobility, strength, and physical function through specialized exercise programs and physical interventions."
          },
          {
            title: "Psychological Support: ",
            description: "Professional counseling and psychological services to support mental health and emotional well-being."
          },
          {
            title: "Speech Therapy: ",
            description: "Developing communication skills, speech clarity, and language abilities for better social interaction."
          },
          {
            title: "Behavior Support: ",
            description: "Strategies and interventions to manage challenging behaviors and develop positive coping mechanisms."
          }
        ],
        conclusion: "Begin Your Therapeutic Journey Today"
      }
    },
    "assist-personal-activities": {
      slug: "assist-personal-activities",
      title: "Assist Personal Activities",
      image: "/image/services/assist-personal-activities.jpg",
      description: "We help with daily personal tasks like dressing, grooming & mobility, ensuring you feel supported & independent in your daily life.",
      content: {
        intro: [
          "Our Personal Assistance service provides respectful, dignified support with daily personal activities. We understand that everyone deserves to maintain their privacy and independence while receiving the help they need.",
          "Our support workers are trained to provide assistance in a way that preserves your dignity and promotes your autonomy in all personal care activities."
        ],
        features: [
          {
            title: "Personal Hygiene Support: ",
            description: "Assistance with bathing, showering, oral care, and grooming while respecting your privacy and preferences."
          },
          {
            title: "Dressing Assistance: ",
            description: "Help with selecting appropriate clothing and getting dressed, considering your personal style and comfort."
          },
          {
            title: "Mobility Support: ",
            description: "Assistance with transfers, positioning, and movement to ensure safety and comfort throughout the day."
          },
          {
            title: "Toileting Assistance: ",
            description: "Discreet and respectful support with toileting needs, including catheter care and continence management."
          },
          {
            title: "Medication Support: ",
            description: "Reminders and assistance with medication management, ensuring you take prescribed medications correctly and on time."
          }
        ],
        conclusion: "Get the Personal Support You Deserve Today"
      }
    }
  };

  const allServices = [
    "Group/Centre Activities",
    "Development of Life Skills",
    "Assist Travel / Transport",
    "Household Tasks",
    "Therapeutic Support",
    "Assist Personal Activities",
    "Assist–Life Stage, Transition",
    "Innovative Community Participation",
    "Supported Independent Living (SIL)",
    "Community Nursing Care",
    "Life Skills Development",
    "Shared Accommodation",
  ];

  // Get the current service based on slug, or fallback to household-tasks
  const currentService = serviceDetails[slug as string] || serviceDetails["household-tasks"];

  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {currentService.title.toUpperCase()}
          </h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200 font-medium">Home</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">{currentService.title}</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT: Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative w-full h-[350px] md:h-[475px] overflow-hidden">
            <Image
              src={currentService.image}
              alt={currentService.title}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {currentService.title}
            </h2>

            {currentService.content.intro.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="space-y-4">
              {currentService.content.features.map((feature, index) => (
                <div key={index}>
                  <span className="font-semibold text-gray-900">
                    {feature.title}
                  </span>
                  <span className="text-gray-700">{feature.description}</span>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8">
              {currentService.content.conclusion}
            </h3>
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <aside className="space-y-6">
          {/* Services List */}
          <div className="bg-[#F8F1FA] p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Our Services
            </h3>

            <ul className="space-y-4">
              {allServices.map((item, index) => (
                <li
                  key={index}
                  className={`px-3 py-3 text-sm font-medium cursor-pointer ${
                    item === currentService.title
                      ? "bg-[#9C55A1] text-white"
                      : "hover:bg-[#E9D9EC] text-gray-700 bg-white"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Box */}
          <div className="relative h-[450px] overflow-hidden text-white">
            {/* Background Image */}
            <Image
              src="/image/services/sidebar-contact-tumb.jpg"
              alt="NDIS Support"
              fill
              className="object-cover"
            />

            {/* Text content positioned inside the image */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <p className="font-semibold text-xl mb-4 leading-snug">
                Available for any type of <br /> NDIS Service
              </p>

              <div className="flex items-center gap-3 text-white py-3 rounded-md font-medium w-fit shadow-md">
                <PhoneCall size={24} strokeWidth={2.5} />
                <div className="text-left leading-tight">
                  <p className="text-xs font-semibold">CONTACT US</p>
                  <p className="text-base font-bold">0000 124 567</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;