import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "YouTube Clone",
      description: `${t("myprojects.taskAppDescription")}`,
      technologies: ["React", "Redux", "Tailwind", "YouTube API"],
      code: "https://github.com/shomalikdavlatov/YouTube",
    },
    {
      title: "Exam Movies",
      description: `${t("myprojects.taskAppDescription2")}`,
      technologies: ["React", "REST API", "Tailwind"],
      code: "https://github.com/shomalikdavlatov/Exam-Movies",
    },
    {
      title: "ERP System",
      description: `${t("myprojects.taskAppDescription3")}`,
      technologies: ["NestJS", "PostgreSQL", "React", "Docker"],
      code: "https://github.com/shomalikdavlatov/ERP",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12 text-neutral-900 dark:text-white">
        {t("myprojects.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
          >
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs sm:text-sm font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 flex items-center gap-1 text-sm sm:text-base font-medium hover:underline"
                >
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
