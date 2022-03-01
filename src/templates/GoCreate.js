import { Link } from "react-router-dom";
export default function GoCreate() {
  return (
    <>
      <div className="text-center py-12 lg:py-24">
        <div className="text-3xl lg:text-4xl">
          Don't want to read more, create your readme
        </div>
        <div className="pt-20 text-center text-3xl lg:text-5xl font-medium text-sky-900">
          Choose Template
        </div>
        <div className="pt-16 flex flex-col md:flex-row justify-center gap-4 items-center">
          {[
            ["/profile", ["/assets/profile.svg"], "Profile"],
            ["/project", ["/assets/project.svg"], "Project"],
          ].map(([to, img, name]) => (
            <Link
              className="no-underline w-52 text-center transition p-8 border-slate-200 border-2 rounded-lg cursor-pointer hover:shadow-lg hover:shadow-slate-200  hover:-rotate-3 hover:scale-95 hover:bg-slate-100"
              key={name}
              to={to}
            >
              <img
                src={process.env.PUBLIC_URL + img}
                className="w-full"
                alt="/profile"
              />
              <div className="text-3xl font-semibold  pt-3">{name} </div>
            </Link>
          ))}
        </div>
        <div className="pt-20 text-slate-500 text-center text-xl lg:text-2xl">
          &lt;&gt; most important thing people see when visiting github is{" "}
          <span className="text-cyan-700">Readme.md</span> &lt;/&gt;
        </div>
      </div>
    </>
  );
}
