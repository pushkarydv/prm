import FeatureBox from "../components/FeatureBox";

export default function Features() {
  return (
    <>
      <div className="text-center text-3xl md:text-4xl mt-12 lg:mt-24 font-medium text-cyan-900">
        Features
      </div>
      <div className="flex flex-col md:flex-row gap-2 mt-6 lg:mt-12 flex-wrap xl:px-16 2xl:px-32">
        {[
          [
            "Templates",
            "Explore some pre-made templates so that your work becomes a lot faster and easier",
          ],
          [
            "Guides",
            "Add guides how to run your project locally on users system",
          ],
          [
            "Visit Counter",
            "Realtime count the no of visits to your repository",
          ],
          [
            "Badges",
            "Add some badges to your readme like code size, production, version control and more",
          ],
          [
            "Social",
            "We let you add a lot of social media and you can create own too",
          ],
          [
            "Tech Stacks",
            "Add badges of tech used in your project so that users can identify easily which knowledge they need run project",
          ],
        ].map(([name, desc]) => (
          <FeatureBox
            icon={name}
            name={name}
            description={desc}
            key={name}
            class="transition w-16 fill-sky-400 hover:fill-sky-500 hover:-translate-x-1"
          />
        ))}
      </div>
    </>
  );
}
