export default function Work() {
  const works = [
    {
      designation: "Developer",
      company: "Project Tech4Dev (Glific)",
      duration: "Jan 2024 - Present",
      pointers: [
        "Working on the front-end of Glific, collaborating with the team to develop features and enhancing user experience.",
        "Engaging with NGOs to understand their requirements and provide technical support.",
      ],
    },
    {
      designation: "Frontend Intern",
      company: "EDILITICS",
      duration: "Jun 2023 - Dec-2023",
      pointers: [
        "Collaborated to implement APIS and develop the frontend interface of a transformation and visualization module for a no-code data analysis platform.",
        "Managed the design, development, and implementation of UI components for different modules.",
      ],
    },
    {
      designation: "Prep Fellow 2023",
      company: "MLH",
      duration: "Apr 2023",
      pointers: [
        "Coordinated with a global team of 15 developers to build web applications utilizing agile methodologies and daily stand-ups.",
        "Developed web applications using Jekyll, Ruby and React.",
      ],
    },
    {
      designation: "Chapter Intern",
      company: "The Girl Code",
      duration: "Aug 2021 - Dec 2021",
      pointers: [
        "Hosted workshops on web development and design for underpriveleged students.",
      ],
    },
    {
      designation: "Graphic design intern",
      company: "INTEGRTR",
      duration: "Jun 2021 - Aug 2021",
      pointers: [],
    },
  ];
  return (
    <div className="mb-6 mt-4">
      <div className="flex flex-col gap-y-4">
        {works.map((work, _) => (
          <div key={_} className="pb-2 w-full flex flex-col gap-y-4">
            <div className="flex w-full justify-between items-end">
              <div className="">
                <span className="text-xs text-zinc-400 whitespace-nowrap">
                  {work.designation}
                </span>
                <p className="text-zinc-800 font-semibold">{work.company}</p>
              </div>
              <div className="text-end align-top ">
                <p className="text-zinc-800 text-xs whitespace-nowrap">
                  {work.duration}
                </p>
              </div>
            </div>
            <div className="text-sm text-zinc-600 flex flex-col gap-y-1 p l-4">
              {work.pointers.map((el, ind) => (
                <span key={ind}>{el}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
