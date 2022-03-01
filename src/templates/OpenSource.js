export default function OpenSource() {
  return (
    <div className=" mt-8 mb-4 p-8 md:p-24 lg:p-32">
      <div className="text-center text-3xl lg:text-4xl text-slate-700 font-medium">
        We are open source
      </div>
      <div className="text-xl lg:text-2xl text-slate-600 mt-8">
        Yes you heard right, this website is open source and you can find code
        of this website on GitHub. You can request a feature, contribute to
        project by adding feedbacks and mentioning bugs if they exist. Licensed
        under GPL-3.0 ©pushkarydv
      </div>
      <div className="text-center py-12">
        <div className="inline-block transition py-2 px-4 border-2 rounded-xl border-cyan-500 text-cyan-500  text-2xl hover:bg-cyan-500 hover:text-slate-50 hover:scale-90">
          <a href="https://github.com/pushkarydv/prm" className="no-underline">
            Visit Github
          </a>
        </div>
      </div>
    </div>
  );
}
