import About from "./about/page";
import Connect from "./blogs/page";
import Projects from "./projects/page";
import Work from "./work/page";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-">
      <div>
        <p className="text-sm text-zinc-600 mb-6 mt-4 uppercase font-semibold">
          About
        </p>
        <About />
        <hr className="mt-4" />
      </div>

      <div>
        <p className="text-sm text-zinc-600 mb-6 mt-4 uppercase font-semibold">
          Work
        </p>
        <Work />
        <hr className="mt-4" />
      </div>

      <div>
        <p className="text-sm text-zinc-600 mb-6 mt-4 uppercase font-semibold">
          Projects
        </p>
        <Projects />
        <hr className="mt-4" />
      </div>

      <div>
        <p className="text-sm text-zinc-600 mb-6 mt-4 uppercase font-semibold">
          Blogs
        </p>
        <Connect />
        <hr className="mt-4" />
      </div>
    </div>
  );
}
