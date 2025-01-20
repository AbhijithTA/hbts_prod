import ActivityCard from "./ActivityCard";

const PopularActivityComponent = () => {
  const activities = [
    {
      id: 1,
      duration: "4 Hours",
      title: "Dubai Half Day City Tour",
      location: "Dubai",
      price: { original: 550, discounted: 75 },
      confirmation: true,
      image:
        "https://img.freepik.com/free-photo/portrait-couple-visiting-luxurious-city-dubai_23-2151328586.jpg?uid=P153408150&semt=ais_incoming", // Replace with actual image URL
    },
    {
      id: 2,
      duration: "9 Hours",
      title: "Abu Dhabi City Tour",
      location: "Dubai",
      price: { original: 390, discounted: 150 },
      confirmation: true,
      image: "https://img.freepik.com/free-photo/day-city-view_1417-1771.jpg?uid=P153408150&semt=ais_incoming",
    },
    {
      id: 3,
      duration: "4 Hours",
      title: "Dhow Cruise Dubai Marina",
      location: "Dubai Marina",
      price: { original: 500, discounted: 125 },
      confirmation: true,
      image: "https://img.freepik.com/free-photo/dubai-creek_158595-1992.jpg?uid=P153408150&semt=ais_incoming",
    },
    {
      id: 4,
      duration: "6 Hours",
      title: "Desert Safari Dubai",
      location: "Dubai",
      price: { original: 290, discounted: 150 },
      confirmation: true,
      image: "https://img.freepik.com/free-photo/wide-shot-male-two-camels-walking-moroccan-desert-daytime_181624-4434.jpg?uid=P153408150&semt=ais_incoming",
    },
  ];

  return (
    <div className="w-full bg-white p-5 flex items-center justify-center">
      {/* Main content */}
      <div className="w-full max-w-7xl flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full mb-10 text-center">
          <h1 className="text-xl sm:text-2xl text-green-600 font-semibold">
            Perfect for You
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Popular Activities in Dubai
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            Experience the great wonders of Dubai with the best tour packages
            designed for every kind of traveler. They include tours of iconic
            landmarks, souks, and desert safaris that are hard to resist. So,
            prepare for an unforgettable Dubai sightseeing tour with these
            exclusive packages, offers, and discounts. Book now!
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularActivityComponent;
