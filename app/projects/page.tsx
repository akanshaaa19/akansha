import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
  const projects = [
    {
      title: "Urban Abode",
      stack: "React | Tailwind",
      description: "Developing a dynamic websites for a realtor.",
      link: "https://urban-abode-nu.vercel.app",
    },
    {
      title: "Hungary Fork",
      stack: "Next | Tailwind | Supabase",
      description:
        "Blog application for food lovers. With custom cms using supabase",
      link: "https://hungary-fork-test.vercel.app/",
    },
    {
      title: "Social DNA",
      stack: "Next | Tailwind",
      description:
        "Dynamic website for a social media company. Generate follow maps and user data.",
      link: "https://socialdna-test.vercel.app/",
    },
    {
      title: "Resume Generator",
      stack: "React | Firebase | Tailwind",
      description:
        "Developing a dynamic resume generator tool, enabling users to create customized, professional resumes quickly with an intuitive interface and templates.",
      link: "https://github.com/akanshaaa19/resume-app",
    },
    {
      title: "Faculty Feedback System",
      stack: "Redux | Tailwind | Firebase",
      description:
        "Designed a Faculty Feedback System to collect and analyze student evaluations, enhancing teaching quality and faculty development through actionable insights.",
      link: "",
    },
    {
      title: "Blog App",
      stack: "React | Node | MongoDB",
      description:
        "Developed a Blog App for seamless reading and publishing, featuring a user-friendly interface and integration with MongoDB for content management.",
      link: "https://github.com/akanshaaa19/blog-app-mern",
    },
  ];
  return (
    <div className="mb-6 mt-4">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        {projects.map((project, _) => (
          <div key={_} className="flex flex-col gap-y-4">
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-y-1">
                <span className="text-xs text-zinc-400">{project.stack}</span>
                <p className="text-zinc-800 font-semibold text-lg">
                  {project.title}
                </p>
              </div>
              <div className="pb-[0.4rem]">
                <Link href={project.link} target="_blank">
                  <FaArrowUpRightFromSquare />
                </Link>
              </div>
            </div>
            <p className="text-sm text-zinc-600 ">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
