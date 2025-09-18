import React from "react";

const AgriLinkTeam = () => {
  const teamMembers = [
    {
      name: "Zaid Aslam Dhanse",
      role: "Project Leader / Product Manager",
      responsibilities:
        "Overall vision, team coordination, task prioritization, presentation.",
      image: "images/zaid.jpg",
    },
    {
      name: "Pratik Ravindra Jojode",
      role: "Backend Lead Developer",
      responsibilities:
        "Server architecture, database design, API development (Node.js/NestJS).",
      image: "images/Pratik.jpg",
    },
    {
      name: "Aman Ashok Yadav",
      role: "Frontend Lead Developer",
      responsibilities: "PWA development, UI/UX design (React).",
      image: "images/aman.jpg",
    },
    {
      name: "Trunal Sandeep Dhopte",
      role: "Business & Data Analyst",
      responsibilities:
        "Go-to-market strategy, user research, partnership development.",
      image: "images/trunal.jpg",
    },
    {
      name: "Sarthak Maurya",
      role: "Impact & Market Analyst",
      responsibilities:
        "Market Sizing, Opportunity Analysis, Competitive Landscape & Viability.",
      image: "images/sarthak.jpg",
    },
    {
      name: "Gauri Garate",
      role: "Strategy & Communications Lead",
      responsibilities:
        "Narrative Integration, Storyboarding, Critical Review.",
      image: "/images/gauri.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-40 via-sky-200 to-emerald-50/30 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full mb-6">
            <span className="text-sm font-medium text-emerald-700">
              Meet Our Team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            The AgriLink Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Group of future innovators and entrepreneurs pacing towards a better
            rural development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-emerald-100/50 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-100 to-emerald-200 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300 blur-sm"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white group-hover:scale-125 transition-transform duration-300"></div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {member.name}
                </h3>

                <p className="text-emerald-600 font-semibold mb-4 text-sm uppercase tracking-wide">
                  {member.role}
                </p>

                <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-emerald-50 hover:bg-emerald-100 rounded-full flex items-center justify-center transition-colors duration-200 hover:scale-110 transform">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>

                  <button className="w-10 h-10 bg-emerald-50 hover:bg-emerald-100 rounded-full flex items-center justify-center transition-colors duration-200 hover:scale-110 transform">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>

                  <button className="w-10 h-10 bg-emerald-50 hover:bg-emerald-100 rounded-full flex items-center justify-center transition-colors duration-200 hover:scale-110 transform">
                    <svg
                      className="w-5 h-5 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgriLinkTeam;
