import ExpertiseCard from "../components/ExpertiseCard/ExpertiseCard";
import bgImg from "../assets/matrix.jpg";

const Expertise = () => {
  return (
    <div id="#expertise" className="min-h-screen flex flex-col">
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
      <div
        className="h-full w-full flex-1"
        style={{
          background: `linear-gradient(0deg, rgba(26,25,29,1) 0%, rgba(26,25,29,0.8099614845938375) 10%, rgba(26,25,29,1) 100%), url(${bgImg})`,
        }}
      />
    </div>
  );
};

export default Expertise;
