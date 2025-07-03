import Score from "../shared/Score";

function SectionScore() {
  return (
    <section className="px-4 container py-10 mb-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-5 justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 border border-0 dark:border-white/10 transition-colors duration-300 rounded-lg p-4">
        <div className="flex items-center flex-col gap-5 justify-center">
          <Score year={2019} value={105} percent={78} />
          <Score year={2017} value={40} percent={40} />
          <Score year={2016} value={60} percent={60} />
          <Score year={2015} value={80} percent={80} />
        </div>
        <div className="flex items-center flex-col gap-5 justify-center">
          <Score year={1992} value={7} percent={20} />
          <Score year={1990} value={3} percent={10} />
          <Score year={1980} value={30} percent={30} />
        </div>
      </div>
    </section>
  );
}

export default SectionScore;
