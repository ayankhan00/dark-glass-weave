import React, { useState } from 'react';
import { Github, ArrowUp } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "FitTracker Pro",
    description: "A comprehensive fitness tracking app with workout plans, progress monitoring, and social features.",
    longDescription: "FitTracker Pro is a full-stack fitness application that helps users track their workouts, monitor progress, and connect with other fitness enthusiasts. Built with modern web technologies for optimal performance.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    githubUrl: "https://github.com/username/fittracker",
    liveUrl: "https://fittracker-demo.vercel.app",
    features: ["Real-time workout tracking", "Progress analytics", "Social features", "Custom workout plans", "Nutrition tracking"]
  },
  {
    id: 2,
    title: "EcoShop Marketplace",
    description: "Sustainable e-commerce platform with carbon footprint tracking and eco-friendly product recommendations.",
    longDescription: "EcoShop is an innovative e-commerce platform focused on sustainability. It features carbon footprint calculations, eco-friendly product recommendations, and green shipping options.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma", "TypeScript"],
    githubUrl: "https://github.com/username/ecoshop",
    liveUrl: "https://ecoshop-demo.vercel.app",
    features: ["Carbon footprint tracking", "Sustainable product filtering", "Green shipping options", "Eco-score ratings", "Payment integration"]
  },
  {
    id: 3,
    title: "DevBlog CMS",
    description: "Modern blogging platform for developers with syntax highlighting, markdown support, and analytics.",
    longDescription: "A content management system specifically designed for developers to share their knowledge with built-in code highlighting, markdown editing, and comprehensive analytics.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
    technologies: ["React", "Firebase", "Tailwind", "MDX", "Vercel"],
    githubUrl: "https://github.com/username/devblog",
    liveUrl: "https://devblog-demo.vercel.app",
    features: ["Markdown editor", "Syntax highlighting", "Analytics dashboard", "SEO optimization", "Comment system"]
  },
  {
    id: 4,
    title: "CryptoTracker",
    description: "Real-time cryptocurrency tracking app with portfolio management and price alerts.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    technologies: ["Vue.js", "Express", "Redis"],
    githubUrl: "https://github.com/username/cryptotracker",
    liveUrl: "https://cryptotracker-demo.vercel.app"
  },
  {
    id: 5,
    title: "TaskFlow Manager",
    description: "Collaborative project management tool with real-time updates, file sharing, and team communication.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    technologies: ["React", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/username/taskflow",
    liveUrl: "https://taskflow-demo.vercel.app"
  },
  {
    id: 6,
    title: "WeatherWise",
    description: "Beautiful weather application with detailed forecasts, interactive maps, and weather alerts.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    technologies: ["React Native", "OpenWeather API", "Redux"],
    githubUrl: "https://github.com/username/weatherwise",
    liveUrl: "https://weatherwise-demo.vercel.app"
  },
  {
    id: 7,
    title: "FoodieFind",
    description: "Restaurant discovery app with AI-powered recommendations, reviews, and table booking.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
    technologies: ["Flutter", "Django", "PostgreSQL"],
    githubUrl: "https://github.com/username/foodiefind",
    liveUrl: "https://foodiefind-demo.vercel.app"
  },
  {
    id: 8,
    title: "CodeShare",
    description: "Real-time collaborative code editor with syntax highlighting, version control, and video chat.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
    technologies: ["React", "WebRTC", "Socket.io"],
    githubUrl: "https://github.com/username/codeshare",
    liveUrl: "https://codeshare-demo.vercel.app"
  },
  {
    id: 9,
    title: "FinanceTracker",
    description: "Personal finance management app with expense tracking, budget planning, and investment insights.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop",
    technologies: ["Angular", "NestJS", "MySQL"],
    githubUrl: "https://github.com/username/financetracker",
    liveUrl: "https://financetracker-demo.vercel.app"
  },
  {
    id: 10,
    title: "StudyBuddy",
    description: "Educational platform with interactive courses, progress tracking, and peer-to-peer learning.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
    technologies: ["Svelte", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/username/studybuddy",
    liveUrl: "https://studybuddy-demo.vercel.app"
  },
  {
    id: 11,
    title: "TravelPlanner",
    description: "AI-powered travel planning app with itinerary generation, booking integration, and local recommendations.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
    technologies: ["React", "OpenAI API", "MongoDB"],
    githubUrl: "https://github.com/username/travelplanner",
    liveUrl: "https://travelplanner-demo.vercel.app"
  },
  {
    id: 12,
    title: "MindfulMoments",
    description: "Meditation and mindfulness app with guided sessions, progress tracking, and community features.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    technologies: ["React Native", "Firebase", "Redux"],
    githubUrl: "https://github.com/username/mindfulmoments",
    liveUrl: "https://mindfulmoments-demo.vercel.app"
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing various technologies and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={project.id}
              className="group backdrop-blur-lg bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      className="backdrop-blur-sm bg-black/50 p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      className="backdrop-blur-sm bg-blue-500/50 p-2 rounded-full hover:bg-blue-500/70 transition-colors duration-200"
                    >
                      <ArrowUp className="w-4 h-4 rotate-45" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 rounded-full text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Portfolio;
