import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Connect() {
  const blogs = [
    {
      title: "My first two weeks interning at Glific!",
      description:
        "Exploring initial experiences and learnings from a two-week internship at Glific, focusing on technology's impact on NGO operations.",
      link: "https://glific.org/my-first-two-weeks-interning-at-glific/",
    },
    {
      title: "Simplifying WhatsApp Group Management",
      description:
        "Highlighting Glific's feature for automating WhatsApp group management, enhancing NGO outreach and communication efficiency.",
      link: "https://glific.org/enhancing-ngo-outreach-simplifying-whatsapp-group-management-with-glific/",
    },
    {
      title: "Simplifying WhatsApp Group Management",
      description:
        "Highlighting Glific's feature for automating WhatsApp group management, enhancing NGO outreach and communication efficiency.",
      link: "https://glific.org/empowering-ngos-through-collaboration-insights-from-the-tech4impact-chatbot-accelerator/",
    },
  ];
  return (
    <div className="mb-6 mt-4">
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        {blogs.map((blog, _) => (
          <div key={_} className="flex flex-col gap-y-4">
            <div className="flex justify-between items-start gap-x-4">
              <p className="text-zinc-800 font-semibold text-lg">
                {blog.title}
              </p>
              <div className="pt-[0.4rem]">
                <Link href={blog.link}>
                  <FaArrowUpRightFromSquare />
                </Link>
              </div>
            </div>
            <p className="text-sm text-zinc-600 ">{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
