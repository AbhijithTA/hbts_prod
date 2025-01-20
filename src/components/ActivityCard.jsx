/* eslint-disable react/prop-types */
import { FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

const ActivityCard = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image Section */}
      <div className="relative">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
          {activity.duration}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{activity.title}</h3>
        <div className="flex items-center text-sm text-gray-500 my-2">
          <FaMapMarkerAlt className="mr-1" />
          {activity.location}
        </div>
        <div className="text-sm text-gray-600">
          {/* <span className="line-through text-gray-400">
            AED {activity.price.original}
          </span>{" "}
          <span className="font-bold text-green-600">
            AED {activity.price.discounted}
          </span>{" "} */}
          {/* / Per Person */}
        </div>
        {activity.confirmation && (
          <div className="flex items-center text-green-500 text-xs mt-2">
            <FaCheckCircle className="mr-1" />
            Instant Confirmation
          </div>
        )}
      </div>

      {/* Button Section */}
      <div className="p-4 pt-0">
        <button className="w-full bg-green-600 text-white text-sm py-2 rounded-lg hover:bg-green-700 transition">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ActivityCard;
