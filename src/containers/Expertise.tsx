import ExpertiseCard from "../components/ExpertiseCard/ExpertiseCard";

const Expertise = () => {
  return (
    <div id="#expertise" className="min-h-screen">
      <div className="flex justify-center mt-4 mb-24">
        <p
          className="text-[50px] font-bold tracking-[1px]"
          style={{ wordSpacing: 10 }}
        >
          My Expertise
        </p>
      </div>
      <div className="flex justify-center w-full md:max-w-[1200px] mx-auto">
        <div className="flex flex-col w-full md:flex-row justify-between">
          <ExpertiseCard
            title="Frontend"
            expertTags="NextJS, ReactJS"
            desc="Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks"
          />
          <ExpertiseCard
            title="Backend"
            expertTags="NodeJS, MongoDB, ExpressJS"
            desc="Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks"
          />

          <ExpertiseCard
            title="Cross Platform"
            expertTags="Flutter, ReactNative"
            desc="Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
