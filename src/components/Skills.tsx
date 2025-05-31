
import React from 'react';

interface Skill {
  name: string;
  category: string;
  level: number;
}

const skills: Skill[] = [
  { name: "React", category: "Frontend", level: 95 },
  { name: "TypeScript", category: "Frontend", level: 90 },
  { name: "Next.js", category: "Frontend", level: 88 },
  { name: "Tailwind CSS", category: "Frontend", level: 92 },
  { name: "Vue.js", category: "Frontend", level: 85 },
  { name: "Node.js", category: "Backend", level: 90 },
  { name: "Python", category: "Backend", level: 88 },
  { name: "Express.js", category: "Backend", level: 87 },
  { name: "FastAPI", category: "Backend", level: 82 },
  { name: "PostgreSQL", category: "Database", level: 85 },
  { name: "MongoDB", category: "Database", level: 88 },
  { name: "Redis", category: "Database", level: 80 },
  { name: "Firebase", category: "Cloud", level: 85 },
  { name: "AWS", category: "Cloud", level: 78 },
  { name: "Docker", category: "DevOps", level: 82 },
  { name: "Git", category: "Tools", level: 95 }
];

const skillCategories = ["Frontend", "Backend", "Database", "Cloud", "DevOps", "Tools"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies I've mastered and use to build amazing digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category}
              className="backdrop-blur-lg bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              "React", "TypeScript", "Next.js", "Node.js", 
              "Python", "PostgreSQL", "MongoDB", "AWS",
              "Docker", "Git", "Firebase", "Tailwind",
              "Vue.js", "Express", "Redis", "FastAPI"
            ].map((tech, index) => (
              <div
                key={tech}
                className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 text-center animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-8 h-8 mx-auto mb-2 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {tech.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <span className="text-xs text-gray-400">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
