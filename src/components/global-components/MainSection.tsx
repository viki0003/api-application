interface MainSectionProps {
  header: string;
  paragraph: string;
}

const MainSection: React.FC<MainSectionProps> = ({ header, paragraph }) => {
  return (
    <>
      <div className="main-section-bg pt-40 pb-32">
        <div className="max-w-container mx-auto pt-20 ">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="text-[48px] font-bold text-center">{header}</h1>
            <p className="text-[22px]">{paragraph}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
