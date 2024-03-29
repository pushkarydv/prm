import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  DatabaseBadges,
  LanguageBadges,
  FPL,
  versionControlBadges,
  SocialsBadges,
} from "../components/Badges";
import PreviewProfile from "../components/PreviewProfile";
import Footer from "../templates/Footer";
export default function Profile() {
  const [profile, setProfile] = useState({
    step: 1,
    name: "",
    username: "",
    about: "",
  });
  const [twitterUsername, setTwitterUsername] = useState("");
  const [languages, setLanguages] = useState([...LanguageBadges]);
  const [versionControl, setVersionControl] = useState([
    ...versionControlBadges,
  ]);
  const [database, setDatabase] = useState([...DatabaseBadges]);
  const [fpl, setFpl] = useState([...FPL]);
  const [social, setSocial] = useState([...SocialsBadges]);
  const [badgeType, setBadgeType] = useState("for-the-badge");

  function handleTechLang(techName) {
    const myNextList = [...languages];
    const current = languages.find((a) => a.name === techName);
    current.isSelected = current.isSelected ? false : true;
    setLanguages(myNextList);
  }
  function handleTechVersion(techName, selected) {
    const myNextList = [...versionControl];
    const current = versionControl.find((a) => a.name === techName);
    current.isSelected = current.isSelected ? false : true;
    setVersionControl(myNextList);
  }
  function handleTechDatabase(techName, selected) {
    const myNextList = [...database];
    const current = database.find((a) => a.name === techName);
    current.isSelected = current.isSelected ? false : true;
    setDatabase(myNextList);
  }
  function handleTechFpl(techName, selected) {
    const myNextList = [...fpl];
    const current = fpl.find((a) => a.name === techName);
    current.isSelected = current.isSelected ? false : true;
    setFpl(myNextList);
  }
  function handleSocial(name, selected) {
    const myNextList = [...social];
    const current = social.find((a) => a.name === name);
    current.isSelected = current.isSelected ? false : true;
    setSocial(myNextList);
  }

  return (
    <>
      <div className="min-h-screen bg-zinc-50 text-slate-800">
        <Navbar />
        <div className="text-2xl lg:text-3xl xl:text-4xl text-center text-slate-600">
          Let's make your Profile Readme
        </div>

        <div
          className={
            "transition-all form w-11/12 md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-sky-100 text-white  rounded mt-12 mx-auto px-4 py-8 md:p-4 lg:p-6 xl:p-8 lg:rounded-xl " +
            (profile.step === 2 || profile.step === 6
              ? "md:w-10/12 lg:w-2/3 xl:w-3/5 2xl:w-3/5 "
              : profile.step === 3 || profile.step === 5
              ? "md:w-10/12 lg:w-2/3 xl:w-4/5 2xl:w-4/5"
              : "md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3")
          }
        >
          <div className="text-white bg-violet-500 float-right w-fit px-2 py-1 text-center rounded">
            Step: <span>{profile.step}</span> / <span>4</span>
          </div>

          {profile.step === 1 && (
            <>
              <div className="mb-6 text-slate-600 text-lg font-medium">
                &lt;your username&gt; is a{" "}
                <span className="bg-sky-50 px-1 mx-1 rounded">special</span>{" "}
                repository, put this Readme there and it will appear on your
                profile
              </div>
              <input
                type="text"
                name="name"
                value={profile.name}
                placeholder="Your Name"
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                autoComplete="off"
                onChange={(e) => {
                  setProfile({ ...profile, name: e.target.value });
                }}
              />
              <input
                type="text"
                name="name"
                value={profile.username}
                placeholder="Github Username"
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4"
                autoComplete="off"
                onChange={(e) => {
                  setProfile({ ...profile, username: e.target.value });
                }}
              />
            </>
          )}
          {profile.step === 2 && (
            <>
              <textarea
                name="about"
                rows="12"
                cols="30"
                placeholder="
(you can write md too😉)
## 🔭 I’m currently working on
## 👯 I’m looking to collaborate on
## 🤝 I’m looking for help with
## 🌱 I’m currently learning
## 💬 Ask me about
## ⚡ Fun fact
"
                className="bg-transparent transition border-b-sky-300 border-b-2 hover:border-b-sky-500 text-slate-800 w-full outline-none text-2xl p-1 lg:p-2 lg:mb-2 xl:mb-4 resize-none"
                autoComplete="off"
                value={profile.about}
                onChange={(e) => {
                  setProfile({
                    ...profile,
                    about: e.target.value,
                  });
                }}
              ></textarea>
            </>
          )}
          {profile.step === 3 && (
            <>
              <div className="text-center text-xl text-black">
                Badge Type:{" "}
                <select
                  name="badge-type"
                  id="badge-type"
                  onChange={(e) => {
                    setBadgeType(e.target.value);
                  }}
                  className="bg-black text-white p-1 rounded"
                >
                  <option value="for-the-badge" defaultValue={true}>
                    For The Badge
                  </option>
                  <option value="plastic">Plastic</option>
                  <option value="flat">Flat</option>
                  <option value="flat-square">Flat Square</option>
                  <option value="social">Social</option>
                </select>
              </div>
              <div className="text-slate-900 font-medium pt-6 pb-2">
                Languages
              </div>
              <div className="font-medium text-xl">
                <div className="text-slate-700">
                  {languages.map((badge) => (
                    <div
                      className={
                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                        (badge.isSelected
                          ? "bg-slate-700 border-slate-700 text-slate-50"
                          : "border-slate-300 text-slate-800")
                      }
                      key={badge.name}
                      onClick={() => handleTechLang(badge.name)}
                    >
                      {" "}
                      <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                      <button
                        className={
                          "w-6  rounded-r-md font-medium " +
                          (badge.isSelected
                            ? " text-slate-50 "
                            : "text-slate-600")
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
                <div className="text-slate-900 font-medium pt-6 pb-2">
                  Framework & Libraries
                </div>
                <div className="text-slate-700">
                  {fpl.map((badge) => (
                    <div
                      className={
                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                        (badge.isSelected
                          ? "bg-slate-700 border-slate-700 text-slate-50"
                          : "border-slate-300 text-slate-800")
                      }
                      key={badge.name}
                      onClick={() => handleTechFpl(badge.name)}
                    >
                      {" "}
                      <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                      <button
                        className={
                          "w-6  rounded-r-md font-medium " +
                          (badge.isSelected
                            ? " text-slate-50 "
                            : "text-slate-600")
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
                <div className="text-slate-900 font-medium pt-6 pb-2">
                  Databases
                </div>
                <div className="text-slate-700">
                  {database.map((badge) => (
                    <div
                      className={
                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                        (badge.isSelected
                          ? "bg-slate-700 border-slate-700 text-slate-50"
                          : "border-slate-300 text-slate-800")
                      }
                      key={badge.name}
                      onClick={() => handleTechDatabase(badge.name)}
                    >
                      {" "}
                      <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                      <button
                        className={
                          "w-6  rounded-r-md font-medium " +
                          (badge.isSelected
                            ? " text-slate-50 "
                            : "text-slate-600")
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
                <div className="text-slate-900 font-medium pt-6 pb-2">
                  Version Control
                </div>
                <div className="text-slate-700">
                  {versionControl.map((badge) => (
                    <div
                      className={
                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                        (badge.isSelected
                          ? "bg-slate-700 border-slate-700 text-slate-50"
                          : "border-slate-300 text-slate-800")
                      }
                      key={badge.name}
                      onClick={() => handleTechVersion(badge.name)}
                    >
                      {" "}
                      <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                      <button
                        className={
                          "w-6  rounded-r-md font-medium " +
                          (badge.isSelected
                            ? " text-slate-50 "
                            : "text-slate-600")
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
                <div className="text-slate-900 font-medium pt-6 pb-2">
                  Socials
                </div>
                <div className="text-slate-700">
                  {SocialsBadges.map((badge) => (
                    <div
                      className={
                        "transition-all cursor-pointer w-fit inline-block m-1  border-2 rounded-lg " +
                        (badge.isSelected
                          ? "bg-slate-700 border-slate-700 text-slate-50"
                          : "border-slate-300 text-slate-800")
                      }
                      key={badge.name}
                      onClick={() => handleSocial(badge.name)}
                    >
                      {" "}
                      <span className="pl-2 pr-1 py-1">{badge.name}</span>{" "}
                      <button
                        className={
                          "w-6  rounded-r-md font-medium " +
                          (badge.isSelected
                            ? " text-slate-50 "
                            : "text-slate-600")
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
              </div>
            </>
          )}
          {profile.step === 4 && (
            <>
              <div className="mb-6 text-black text-lg font-medium grid place-items-center">
                <div className="text-xl lg:text-2xl">
                  {" "}
                  Wait Now you can add your realtime tweet too and see it on
                  your profile
                </div>

                <input
                  type="text"
                  className="transition-all p-2 ring-2 rounded-lg w-full ring-purple-600/10 focus:ring-purple-600/20 text-purple-700 outline-none md:w-2/3 mx-auto mt-8 lg:mt-12  lg:mb-6 xl:mt-16 xl:mb-8"
                  value={twitterUsername}
                  onChange={(e) => {
                    setTwitterUsername(e.target.value);
                  }}
                  id="data"
                  placeholder={"twitter username without @"}
                  autoComplete="off"
                />
              </div>
            </>
          )}
          {profile.step === 5 && (
            <>
              <PreviewProfile
                profile={profile}
                database={database}
                versionControl={versionControl}
                fpl={fpl}
                languages={languages}
                social={social}
                badgeType={badgeType}
                twitterUsername={twitterUsername}
              />
            </>
          )}
          <div
            className={
              "w-full mt-6 text-xl " + (profile.step > 1 && "flex gap-1")
            }
          >
            {profile.step > 1 && (
              <button
                className="transition-all basis-1/3 text-center bg-slate-500 hover:bg-slate-600 rounded-md my-2 py-2 hover:scale-95"
                onClick={() => {
                  profile.step > 1 &&
                    setProfile({ ...profile, step: profile.step - 1 });
                }}
              >
                &lt; Back
              </button>
            )}
            {profile.step < 5 && (
              <button
                className={
                  "transition-all text-center bg-sky-500 hover:bg-sky-600 rounded-md my-2 py-2 hover:scale-95 " +
                  (profile.step > 1 ? "basis-2/3" : "w-full")
                }
                onClick={() => {
                  profile.step < 5 &&
                    setProfile({ ...profile, step: profile.step + 1 });
                }}
              >
                Continue &gt;
              </button>
            )}
          </div>
          {profile.step === 5 && (
            <>
              <div className="text-slate-800 text-center text-xl pt-2">
                Hey👋, Can you help us to grow by sharing{" "}
              </div>
              <Footer />
            </>
          )}
          {profile.step > 1 && (
            <div className="text-slate-500 pt-2">
              no fields are not mandatory, you may leave them blank
            </div>
          )}
        </div>
      </div>
    </>
  );
}
