import { useState } from "react";
import {
  DatabaseBadges,
  LanguageBadges,
  FPL,
  versionControlBadges,
  SocialsBadges,
} from "../components/Badges";
import Navbar from "../components/Navbar";

export default function Project() {
  const [project, setProject] = useState({
    step: 1,
    name: "",
    url: "",
    logo: "",
    about: "",
    screenshots: {
      sc1: "",
      sc2: "",
      sc3: "",
    },
    guide: "",
    techStacks: {
      language: [...LanguageBadges],
      versionControl: [...versionControlBadges],
      database: [...DatabaseBadges],
      fpl: [...FPL],
    },
  });
  const [markdown, setMarkdown] = useState("");
  return (
    <>
      <div className="min-h-screen bg-zinc-50 text-slate-800">
        <Navbar />
        <div className="text-2xl lg:text-3xl xl:text-4xl text-center text-slate-600">
          Let's make it
        </div>

        <div
          className={
            "transition-all form w-11/12 md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-sky-100 text-white  rounded mt-12 mx-auto px-4 py-8 md:p-4 lg:p-6 xl:p-8 lg:rounded-xl " +
            (project.step === 3 || project.step === 6
              ? "md:w-10/12 lg:w-2/3 xl:w-3/5 2xl:w-3/5 "
              : project.step === 4
              ? "md:w-10/12 lg:w-2/3 xl:w-4/5 2xl:w-4/5"
              : "md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3")
          }
        >
          <div className="text-white bg-violet-500 float-right w-fit px-2 py-1 text-center rounded">
            Step: <span>{project.step}</span> / <span>6</span>
          </div>
          {project.step === 1 && (
            <input
              type="text"
              name="name"
              value={project.name}
              placeholder="Project Name"
              className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
              autoComplete="off"
              onChange={(e) => {
                setProject({ ...project, name: e.target.value });
              }}
            />
          )}
          {project.step === 2 && (
            <>
              <div className="text-slate-500 text-xl pt-5">
                Project Website:
              </div>
              <input
                type="text"
                name="url"
                value={project.url}
                placeholder="https://yourproject.com/"
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                autoComplete="off"
                onChange={(e) => {
                  setProject({ ...project, url: e.target.value });
                }}
              />
              <div className="text-slate-500 text-xl pt-5">Link to Logo:</div>
              <input
                type="text"
                name="logo"
                value={project.logo}
                placeholder="https://yourproject.com/logo.png"
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                autoComplete="off"
                onChange={(e) => {
                  setProject({ ...project, logo: e.target.value });
                }}
              />
            </>
          )}
          {project.step === 3 && (
            <>
              <div className="text-slate-500 text-xl pt-5">About:</div>
              <textarea
                name="about"
                rows="8"
                cols="30"
                style={{ resize: "none" }}
                value={project.about}
                placeholder={
                  "A short tagline \n(use these - sign so that markdown create a list) \n- line 1 \n- line 2 \n- line 3 \n- and other lines"
                }
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                autoComplete="off"
                onChange={(e) => {
                  setProject({ ...project, about: e.target.value });
                }}
              />
            </>
          )}
          {project.step === 4 && (
            <>
              <div className="text-slate-900 font-medium pt-6 pb-2">
                Languages
              </div>
              <div className="text-slate-700">
                {project.techStacks.language.map((badge) => (
                  <div
                    className={
                      "transition-all w-fit inline-block m-1  border rounded-lg " +
                      (badge.isSelected
                        ? "bg-slate-600 text-white"
                        : "border-slate-600")
                    }
                    key={badge.name}
                  >
                    {" "}
                    <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                    <button
                      className={
                        "w-6  rounded-r-md font-medium " +
                        (badge.isSelected
                          ? "bg-slate-50 text-slate-600 "
                          : "bg-slate-600 text-white")
                      }
                    >
                      <div
                        className={
                          "transition-all inline-block " +
                          (badge.isSelected ? " rotate-45" : "rotate-0")
                        }
                      >
                        +
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </>
          )}
          {project.step === 5 && (
            <>
              <div className="text-slate-500 text-xl pt-5 pb-2">
                Link to Screenshots:
              </div>
              <input
                type="text"
                name="sc1"
                placeholder="Screenshot 1"
                value={project.screenshots.sc1}
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                autoComplete="off"
                onChange={(e) => {
                  setProject({
                    ...project,
                    screenshots: {
                      ...project.screenshots,
                      sc1: e.target.value,
                    },
                  });
                }}
              />
              <input
                type="text"
                name="sc2"
                placeholder="Screenshot 2"
                value={project.screenshots.sc2}
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                autoComplete="off"
                onChange={(e) => {
                  setProject({
                    ...project,
                    screenshots: {
                      ...project.screenshots,
                      sc2: e.target.value,
                    },
                  });
                }}
              />
              <input
                type="text"
                name="sc3"
                placeholder="Screenshot 3"
                value={project.screenshots.sc3}
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                autoComplete="off"
                onChange={(e) => {
                  setProject({
                    ...project,
                    screenshots: {
                      ...project.screenshots,
                      sc3: e.target.value,
                    },
                  });
                }}
              />
            </>
          )}
          {project.step === 6 && (
            <>
              <div className="text-slate-500 text-xl pt-5">
                Contribution Guide
              </div>
              <textarea
                name="about"
                rows="8"
                cols="30"
                style={{ resize: "none" }}
                value={project.guide}
                placeholder={
                  "Leave it blank if you don't need it \nExample:\n- Step 1: Fork and Download the Repository \n- Step 2: Open it in editor like VSCode \n ......."
                }
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                autoComplete="off"
                onChange={(e) => {
                  setProject({ ...project, guide: e.target.value });
                }}
              />
            </>
          )}

          <div
            className={
              "w-full mt-6 text-xl " + (project.step > 1 && "flex gap-1")
            }
          >
            {project.step > 1 && (
              <button
                className="transition-all basis-1/3 text-center bg-slate-500 hover:bg-slate-600 rounded-md my-2 py-2 hover:scale-95"
                onClick={() => {
                  project.step > 1 &&
                    setProject({ ...project, step: project.step - 1 });
                }}
              >
                &lt; Back
              </button>
            )}

            <button
              className={
                "transition-all text-center bg-sky-500 hover:bg-sky-600 rounded-md my-2 py-2 hover:scale-95 " +
                (project.step > 1 ? "basis-2/3" : "w-full")
              }
              onClick={() => {
                project.step < 7 &&
                  setProject({ ...project, step: project.step + 1 });
              }}
            >
              Continue &gt;
            </button>
          </div>
          {project.step > 1 && (
            <div className="text-slate-500 pt-2">
              no fields are not mandatory, you may leave them blank
            </div>
          )}
        </div>
      </div>
    </>
  );
}
