"use client";
import Image from "next/image";
import React from "react";
import { useParams } from "next/navigation";

// Define the blog data structure
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string;
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

const BlogDetailsPage: React.FC = () => {
  const { slug } = useParams(); // Get the slug from URL params

  // Blog data - in a real app, this would come from an API or database
  const blogPosts: Record<string, BlogPost> = {
    "promote-independence": {
      slug: "promote-independence",
      title: "How to Promote Independence in Disability?",
      date: "February 18, 2025",
      image: "/blog-image-1.jpg",
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
        additionalText: "Need support on your journey to independence? Contact Ability Care today to learn how we can help!"
      }
    },
    "best-social-activities": {
      slug: "best-social-activities",
      title: "What Are The Best Social Activities For Disabled?",
      date: "February 8, 2025",
      image: "/blog-image-2.jpg",
      content: [
        {
          title: "1. Community Events and Workshops:",
          text: "Participating in local events, art classes, and educational workshops.",
        },
        {
          title: "2. Sports and Recreation:",
          text: "Adaptive sports, swimming, and wheelchair-friendly activities.",
        },
        {
          title: "3. Social Clubs and Groups:",
          text: "Joining clubs based on interests like book clubs, gaming, or hobby groups.",
        },
        {
          title: "4. Volunteer Opportunities:",
          text: "Giving back to the community through accessible volunteer work.",
        },
      ],
      conclusion: {
        title: "Get Involved Today!",
        text: "Social activities are essential for building connections and improving quality of life. Find activities that match your interests and abilities.",
        additionalText: "Contact us to discover social opportunities in your area!"
      }
    },
    "occupational-therapy": {
      slug: "occupational-therapy",
      title: "Occupational Therapy Recommended for Seniors?",
      date: "January 28, 2024",
      image: "/blog-image-3.jpg",
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
          text: "Strategies to manage memory loss and maintain mental sharpness.",
        },
        {
          title: "4. Adaptive Equipment:",
          text: "Recommending and training on devices that make daily tasks easier.",
        },
      ],
      conclusion: {
        title: "Enhance Your Quality of Life!",
        text: "Occupational therapy can significantly improve independence and safety for seniors.",
        additionalText: "Speak with our occupational therapists to learn how we can help you or your loved ones."
      }
    },
    "ndis-plan-tips": {
      slug: "ndis-plan-tips",
      title: "Making the Most of Your NDIS Plan: Tips for Better Support",
      date: "January 15, 2025",
      image: "/blog-image4.png",
      content: [
        {
          title: "1. Understand Your Plan:",
          text: "Take time to thoroughly review your NDIS plan and understand your budgets and goals.",
        },
        {
          title: "2. Set Clear Goals:",
          text: "Define specific, measurable goals that align with your aspirations and needs.",
        },
        {
          title: "3. Choose the Right Providers:",
          text: "Research and select service providers who understand your needs and values.",
        },
        {
          title: "4. Regular Plan Reviews:",
          text: "Keep track of your plan spending and prepare for regular reviews.",
        },
      ],
      conclusion: {
        title: "Maximize Your NDIS Plan!",
        text: "With proper planning and the right support, your NDIS plan can help you achieve your goals and improve your quality of life.",
        additionalText: "Need help navigating your NDIS plan? Our support coordinators are here to assist you."
      }
    },
    "disability-services-independence": {
      slug: "disability-services-independence",
      title: "How Disability Services Help You Live Independently",
      date: "January 2, 2025",
      image: "/blog-image5.png",
      content: [
        {
          title: "1. Personalized Support Plans:",
          text: "Tailored services that match your unique needs and goals.",
        },
        {
          title: "2. Skill Development:",
          text: "Programs focused on building practical life skills for greater autonomy.",
        },
        {
          title: "3. Community Access:",
          text: "Support to participate in community activities and social events.",
        },
        {
          title: "4. Housing Support:",
          text: "Assistance with finding and maintaining suitable accommodation.",
        },
      ],
      conclusion: {
        title: "Live Life on Your Terms!",
        text: "Disability services are designed to empower you to live independently and participate fully in community life.",
        additionalText: "Discover how our services can support your journey to independence."
      }
    },
    "personal-care-support-impact": {
      slug: "personal-care-support-impact",
      title: "Understanding the Impact of Personal Care Support",
      date: "December 25, 2024",
      image: "/blog-image6.png",
      content: [
        {
          title: "1. Enhanced Dignity and Well-being:",
          text: "Professional personal care maintains dignity while ensuring hygiene and comfort.",
        },
        {
          title: "2. Reduced Caregiver Burden:",
          text: "Professional support relieves family members from constant care responsibilities.",
        },
        {
          title: "3. Improved Health Outcomes:",
          text: "Regular personal care can prevent health issues and promote overall wellness.",
        },
        {
          title: "4. Increased Confidence:",
          text: "Proper personal care helps individuals feel more confident in social situations.",
        },
      ],
      conclusion: {
        title: "Quality Care for Better Living!",
        text: "Personal care support is essential for maintaining health, dignity, and quality of life for people with disabilities.",
        additionalText: "Learn about our personalized care services and how they can make a difference."
      }
    },
  };

  const recentPosts = [
    "The Role of Therapeutic Support in Disability Care",
    "How To Promote Independence in Disability?",
    "Occupational Therapy Recommended for Seniors?",
    "Making the Most of Your NDIS Plan: Tips for Better Support",
    "How Disability Services Help You Live Independently",
    "Understanding the Impact of Personal Care Support",
    "Support Coordination: Maximizing Your NDIS Plan",
    "How Assistive Technology Improves Independence",
  ];

  // Get the current blog post based on slug, or fallback to promote-independence
  const currentPost = blogPosts[slug as string] || blogPosts["promote-independence"];

  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-left text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {currentPost.title}
          </h1>
          <p className="text-sm md:text-base flex justify-left items-center gap-2 mt-3">
            <span className="text-gray-200">HOME</span>
            <span className="text-white">›</span>
            <span className="text-white font-medium">Blog Details</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Image */}
          <div className="relative w-full h-[350px] md:h-[550px] overflow-hidden rounded-lg">
            <Image
              src={currentPost.image}
              alt={currentPost.title}
              fill
              className="object-fill"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-gray-800 leading-relaxed">
              At Ability Care, we believe everyone deserves to live
              independently with confidence. With the right support and
              resources, people with disabilities can achieve greater autonomy.
              Here's how we help foster independence:
            </p>

            <div className="mt-6 space-y-4">
              {currentPost.content.map((item, index) => (
                <div key={index}>
                  <span className="font-semibold text-gray-900">
                    {item.title}{" "}
                  </span>
                  <span className="text-gray-800">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {currentPost.conclusion.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {currentPost.conclusion.text}
              </p>
              {currentPost.conclusion.additionalText && (
                <p className="text-gray-800 mt-3 leading-relaxed">
                  {currentPost.conclusion.additionalText}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-8">
          {/* Contact Form */}
          <div className="bg-[#9C55A1] text-white p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-5">Get In Touch With Us</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 text-gray-900 bg-white"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full p-3 text-gray-900 bg-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 text-gray-900 bg-white"
              />
              <textarea
                placeholder="Message"
                rows={3}
                className="w-full p-3 text-gray-900 bg-white"
              ></textarea>
              <button
                type="submit"
                className="px-8 bg-white rounded-full text-slate-900 font-semibold py-2 hover:bg-gray-100 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Recent Posts */}
          <div className="bg-[#F8F1FA] p-6 shadow-md">
            <h3 className="text-xl font-semibold bg-[#9C55A1] text-white mb-5 p-2">
              Recent Post
            </h3>

            <div className="space-y-3">
              {recentPosts.map((post, index) => (
                <div
                  key={index}
                  className="bg-white px-4 py-3 text-gray-800 text-sm font-medium hover:bg-[#EADBF0] cursor-pointer transition"
                >
                  {post}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetailsPage;