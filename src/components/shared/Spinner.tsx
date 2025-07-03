function Spinner({ text = "Loading" }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-black/60">
      <div className="relative rounded-lg p-4 w-full h-full bg-gray-100 dark:bg-gray-900">
        {/* Dimmer overlay */}
        <div className="absolute inset-0 bg-white/80 dark:bg-black/70 flex items-center justify-center rounded-lg">
          {/* Loader */}
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2 dark:border-white dark:border-t-transparent"></div>
            <span className="text-xs font-medium text-gray-500 dark:text-white">
              {text}
            </span>
          </div>
        </div>

        {/* Placeholder skeleton content */}
        <div className="space-y-2 opacity-0">
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-4/6"></div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;
