export default function Navbar({ bgClass = "" }) {
  return (
    <>
      <nav
        className={
          "flex flex-row justify-between items-center text-2xl p-4 " + bgClass
        }
      >
        <div className="w-fit flex flex-row items-center">
          <img src="/prm.svg" alt="" className="w-8" />{" "}
          <span className="text-cyan-500 text-4xl pl-2">PRM</span>
        </div>
        <a
          href="/"
          className="transition bg-sky-400 -skew-x-4 text-zinc-50 py-1 px-4 md:py-2 lg:px-6 rounded-full outline-none no-underline border-4 border-sky-300 hover:border-sky-500"
        >
          Donate
        </a>
      </nav>
    </>
  );
}
