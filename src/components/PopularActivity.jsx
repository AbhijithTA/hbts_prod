import { useEffect, useState } from "react";
import ActivityCard from "./ActivityCard";
import { activities, pageContent } from "../../data/activityData.js";

const PopularActivityComponent = () => {
  const [activity, setActivity] = useState([]);
  const [pageContents, setPageContents] = useState([]);

  useEffect(() => {
    setActivity(activities);
    setPageContents(pageContent[0]);
  }, []);

  return (
    <div className="w-full bg-white p-5 flex items-center justify-center">
      {/* Main content */}
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full mb-10 text-center">
          <h1 className="text-xl sm:text-2xl text-green-600 font-semibold">
            {pageContents.title}
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mt-3">
            {pageContents.description}
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activity.length > 0 ? (
            activity.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))
          ) : (
            <p className="text-gray-500">Loading activities...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularActivityComponent;
