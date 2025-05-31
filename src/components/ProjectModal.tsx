
import React from 'react';
import { X, Github, ArrowUp } from 'lucide-react';

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl">
        <div className="sticky top-0 flex justify-between items-center p-6 border-b border-white/10 bg-black/20 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white">{project.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-300 hover:text-white" />
          </button>
        </div>
        
        <div className="p-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-xl mb-6"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">About This Project</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.longDescription}</p>
              
              <h4 className="text-md font-semibold text-white mb-2">Key Features</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-md font-semibold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 rounded-full text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                >
                  <ArrowUp className="w-4 h-4 rotate-45" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
