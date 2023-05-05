import ReactMarkdown from "react-markdown";
export default function PreviewProject({
  project,
  versionControl,
  languages,
  database,
  fpl,
  social,
  badgeType,
}) {
  return (
    <>
      <div className="mt-4 md:mt-8">
        <div className="text-center">
          <span className="bg-slate-700 text-slate-50 m-2 p-1 rounded-lg">
            Code
          </span>
        </div>
        <div className="text-slate-100 bg-slate-800 rounded-lg p-2 md:p-4">
          {!(project.logo === "" && project.name === "") && (
            <>
              {`<div align="center"><h1>`}{" "}
              {!(project.logo === "") &&
                `<img src=${project.logo} width="32px"/>`}{" "}
              {project.name} {`</h1> </div>`}
              <br />
              <br />
            </>
          )}
          {!(project.about === "") && (
            <>
              # About <br />
              {project.about} <br /> <br />
            </>
          )}
          {!(project.url === "") && (
            <>
              ## Website is Live : [{project.url}]({project.url}) <br /> <br />
            </>
          )}
          {!(
            project.screenshots.sc1 === "" &&
            project.screenshots.sc2 === "" &&
            project.screenshots.sc3 === ""
          ) && (
            <>
              # Screenshots <br />
              {!(project.screenshots.sc1 === "") && (
                <>
                  ![screenshot]({project.screenshots.sc1}) <br />
                </>
              )}
              {!(project.screenshots.sc2 === "") && (
                <>
                  ![screenshot]({project.screenshots.sc2}) <br />
                </>
              )}
              {!(project.screenshots.sc3 === "") && (
                <>
                  ![screenshot]({project.screenshots.sc3}) <br />
                </>
              )}
            </>
          )}

          <br /># Tech Stack <br />
          {languages.map(
            (badge) =>
              badge.isSelected && (
                <span key={badge.name}>
                  ![{badge.name}](
                  {"https://img.shields.io/badge/" +
                    badge.image +
                    "&style=" +
                    badgeType}
                  ) <br />
                </span>
              )
          )}
          {fpl.map(
            (badge) =>
              badge.isSelected && (
                <span key={badge.name}>
                  ![{badge.name}](
                  {"https://img.shields.io/badge/" +
                    badge.image +
                    "&style=" +
                    badgeType}
                  ) <br />
                </span>
              )
          )}
          {database.map(
            (badge) =>
              badge.isSelected && (
                <span key={badge.name}>
                  ![{badge.name}](
                  {"https://img.shields.io/badge/" +
                    badge.image +
                    "&style=" +
                    badgeType}
                  ) <br />
                </span>
              )
          )}
          {versionControl.map(
            (badge) =>
              badge.isSelected && (
                <span key={badge.name}>
                  ![{badge.name}](
                  {"https://img.shields.io/badge/" +
                    badge.image +
                    "&style=" +
                    badgeType}
                  ) <br />
                </span>
              )
          )}
          {social.map(
            (badge) =>
              badge.isSelected && (
                <span key={badge.name}>
                  ![{badge.name}](
                  {"https://img.shields.io/badge/" +
                    badge.image +
                    "&style=" +
                    badgeType}
                  ) <br />
                </span>
              )
          )}
          <br />

          <br />
          {!(project.guide === "") && (
            <>
              # Contribute
              <br />
              {project.guide}
            </>
          )}
          <br />
          {"<!-- made using https://prm.pushkaryadav.in  -->"}
        </div>
      </div>
      <div className="mt-4 md:mt-8 text-xl">
        <div className="text-center">
          <span className="bg-slate-700 text-slate-50 m-2 p-1 rounded-lg">
            Preview
          </span>
        </div>
        <div className="text-slate-800 bg-slate-100 rounded-lg p-2 md:p-4">
          {!(project.logo === "" && project.name === "") && (
            <div align="center">
              <div className="text-2xl font-medium flex flex-row justify-center mb-4 border-b-2">
                {!(project.logo === "") && (
                  <img src={project.logo} className="w-8" alt="project_logo" />
                )}{" "}
                {project.name}{" "}
              </div>{" "}
            </div>
          )}
          {!(project.about === "") && (
            <>
              <div className="text-2xl font-medium mt-4">About</div>
              <ReactMarkdown className="my-1" children={project.about} />
            </>
          )}
          {!(project.url === "") && (
            <div className="my-1">
              Website :{" "}
              <a href={project.url} className="text-cyan-800">
                {project.url}
              </a>
            </div>
          )}
          {!(
            project.screenshots.sc1 === "" &&
            project.screenshots.sc2 === "" &&
            project.screenshots.sc3 === ""
          ) && (
            <>
              <div className="text-2xl font-medium mt-8">Screenshots</div>
              {!(project.screenshots.sc1 === "") && (
                <>
                  <img src={project.screenshots.sc1} alt="project ss" />
                </>
              )}
              {!(project.screenshots.sc2 === "") && (
                <>
                  <img src={project.screenshots.sc2} alt="project ss" />
                </>
              )}
              {!(project.screenshots.sc3 === "") && (
                <>
                  <img src={project.screenshots.sc3} alt="project ss" />
                </>
              )}
            </>
          )}

          <div className="text-2xl font-medium mt-4">Tech Stack</div>
          <div className="flex flex-row gap-1 text-2xl flex-wrap mt-4">
            {languages.map(
              (badge) =>
                badge.isSelected && (
                  <img
                    src={
                      "https://img.shields.io/badge/" +
                      badge.image +
                      "&style=" +
                      badgeType
                    }
                    key={badge.name}
                    alt="badge"
                  />
                )
            )}
            {fpl.map(
              (badge) =>
                badge.isSelected && (
                  <img
                    src={
                      "https://img.shields.io/badge/" +
                      badge.image +
                      "&style=" +
                      badgeType
                    }
                    key={badge.name}
                    alt="badge"
                  />
                )
            )}
            {database.map(
              (badge) =>
                badge.isSelected && (
                  <img
                    src={
                      "https://img.shields.io/badge/" +
                      badge.image +
                      "&style=" +
                      badgeType
                    }
                    key={badge.name}
                    alt="badge"
                  />
                )
            )}
            {versionControl.map(
              (badge) =>
                badge.isSelected && (
                  <img
                    src={
                      "https://img.shields.io/badge/" +
                      badge.image +
                      "&style=" +
                      badgeType
                    }
                    key={badge.name}
                    alt="badge"
                  />
                )
            )}
            {social.map(
              (badge) =>
                badge.isSelected && (
                  <img
                    src={
                      "https://img.shields.io/badge/" +
                      badge.image +
                      "&style=" +
                      badgeType
                    }
                    key={badge.name}
                    alt="badge"
                  />
                )
            )}
          </div>

          {!(project.guide === "") && (
            <>
              <div className="text-2xl font-medium mt-8">Contribute</div>
              <ReactMarkdown children={project.guide} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
