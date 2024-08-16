import Link from "next/link";

export default function About() {
  return (
    <div className="mb-6 mt-4">
      <p className="text-zinc-700 text-sm">
        As a dedicated software developer with a Bachelor&apos;s degree in
        Computer Science (2024), I am passionate about leveraging technology to
        drive positive social change. Currently working in the social sector, I
        am focused on using my technical skills to develop innovative solutions
        that address pressing social issues. Eager to deepen my impact and
        explore new opportunities, I am committed to contributing effectively
        within this field and advancing initiatives that make a meaningful
        difference in communities.
      </p>

      <div className="w-full my-4">
        <button className="w-full border rounded-md py-2 px-4 flex items-center justify-center text-zinc-600 text-sm hover:border-zinc-800 hover:border-2 hover:font-semibold">
          <Link href="mailto:akanshasakhre@gmail.com">Say Hi</Link>
        </button>
      </div>
    </div>
  );
}
