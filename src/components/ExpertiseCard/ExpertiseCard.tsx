interface Props {
  title: string;
  expertTags: string;
  desc: string;
}

const defaultProps: Props = {
  title: "",
  expertTags: "",
  desc: "",
};

const ExpertiseCard = ({ title, expertTags, desc }: Props) => {
  return (
    <div className="rounded-xl bg-gray-100 border-gray-200 shadow-sm hover:shadow-md w-[350px] h-[300px] duration-200 py-4 group">
      <div className="border-b-[5px] border-orange-600 px-8 ">
        <p className="text-[28px] font-medium tracking-wide text-center uppercase mt-4 -mb-3 group-hover:mb-2 duration-200 text-gray-800">
          {title}
        </p>
      </div>
      <div className="px-8">
        <div>
          <p className="text-[20px] font-semibold tracking-wide uppercase text-blue-950 mt-6 text-left break-keep">
            {expertTags}
          </p>
        </div>
        <div>
          <p className="text-[15px] font-light tracking-wide text-gray-700 mt-4 text-justify">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

ExpertiseCard.defaultProps = defaultProps;

export default ExpertiseCard;
