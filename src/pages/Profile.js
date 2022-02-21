import { useState } from "react";
import Navbar from "../components/Navbar";
export default function Profile() {
  const [profile, setProfile] = useState({
    step: 1,
    name: "",
  });
  return (
    <>
      <div className="min-h-screen bg-zinc-50 text-slate-800">
        <Navbar />
        <div className="text-2xl lg:text-3xl xl:text-4xl text-center text-slate-600">
          Let's make your porfile Readme
        </div>

        <div
          className={
            "transition-all form w-11/12 md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3 bg-sky-100 text-white  rounded mt-12 mx-auto px-4 py-8 md:p-4 lg:p-6 xl:p-8 lg:rounded-xl " +
            (profile.step === 3 || profile.step === 6
              ? "md:w-10/12 lg:w-2/3 xl:w-3/5 2xl:w-3/5 "
              : profile.step === 4
              ? "md:w-10/12 lg:w-2/3 xl:w-4/5 2xl:w-4/5"
              : "md:w-8/12 lg:w-1/2 xl:w-2/5 2xl:w-1/3")
          }
        >
          <div className="text-white bg-violet-500 float-right w-fit px-2 py-1 text-center rounded">
            Step: <span>{profile.step}</span> / <span>6</span>
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

            <button
              className={
                "transition-all text-center bg-sky-500 hover:bg-sky-600 rounded-md my-2 py-2 hover:scale-95 " +
                (profile.step > 1 ? "basis-2/3" : "w-full")
              }
              onClick={() => {
                profile.step < 7 &&
                  setProfile({ ...profile, step: profile.step + 1 });
              }}
            >
              Continue &gt;
            </button>
          </div>
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
