import Image from "next/image";
import React from "react";

const BlogDetailsPage: React.FC = () => {
  const postContent = [
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
  ];

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

  return (
    <div>
      {/* ===== TOP SECTION (Background Image) ===== */}
      <div className="relative h-[250px] md:h-[300px] bg-[url('/image/about-us/about-us.jpg')] bg-cover bg-center flex items-center justify-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#356634] to-[#356634]/0"></div>

        {/* Text Content */}
        <div className="absolute top-30 left-[20%] text-left text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            How to Promote Independence in Disability?
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
              src="/blog-image-1.jpg"
              alt="Promoting Independence"
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
              Here’s how we help foster independence:
            </p>

            <div className="mt-6 space-y-4">
              {postContent.map((item, index) => (
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
                Join Us in Promoting Independence!
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Ability Care, we are committed to fostering independence by
                providing tailored support & resources. With the right guidance
                & encouragement, people with disabilities can lead empowered,
                self-directed lives.
              </p>
              <p className="text-gray-800 mt-3 leading-relaxed">
                Need support on your journey to independence? Contact Ability
                Care today to learn how we can help!
              </p>
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
