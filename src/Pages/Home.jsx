import React from "react";
import Slider from "react-slick";

// Import slick-carousel CSS for slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mock featured groups data (replace with your DB data)
const featuredGroups = [
  {
    id: 1,
    name: "Downtown Hiking Crew",
    category: "Running",
    location: "City Park",
    members: 15,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Book Lovers Club",
    category: "Reading",
    location: "Community Library",
    members: 30,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Creative Painters",
    category: "Drawing & Painting",
    location: "Art Studio",
    members: 10,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Weekend Gamers",
    category: "Video Gaming",
    location: "Online",
    members: 50,
    image:
      "https://images.unsplash.com/photo-1553531888-825d8e1861d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "City Chefs",
    category: "Cooking",
    location: "Downtown Kitchen",
    members: 12,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Nature Photographers",
    category: "Photography",
    location: "Various",
    members: 20,
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=600&q=80",
  },
];

function Home() {
  // React Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      {/* Banner Slider */}
      <section>
        <Slider {...sliderSettings}>
          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
              alt="Explore Hobbies"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center">
                Discover Local Hobby Groups
              </h2>
              <p className="text-lg md:text-xl max-w-xl text-center">
                Connect with like-minded people and explore new passions in your area.
              </p>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
              alt="Create Your Own Group"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center">
                Start Your Own Hobby Group
              </h2>
              <p className="text-lg md:text-xl max-w-xl text-center">
                Share your passion and invite others to join your community.
              </p>
            </div>
          </div>

          <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80"
              alt="Events and Meetups"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center">
                Join Exciting Events & Meetups
              </h2>
              <p className="text-lg md:text-xl max-w-xl text-center">
                Participate in fun activities and make lifelong friends.
              </p>
            </div>
          </div>
        </Slider>
      </section>

      {/* Featured Groups */}
      <section>
        <h3 className="text-4xl font-semibold mb-8 text-center text-primary">
          Featured Hobby Groups
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredGroups.slice(0, 6).map((group) => (
            <div
              key={group.id}
              className="rounded-lg overflow-hidden shadow-lg bg-base-200 cursor-pointer hover:shadow-xl transition-shadow"
            >
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-bold">{group.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Category: {group.category}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Location: {group.location}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Members: {group.members}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Static Section 1 */}
      <section className="bg-primary text-white rounded-lg p-10 shadow-lg text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Why Join HobbyHub?</h3>
        <p className="text-lg">
          At HobbyHub, we believe every passion deserves a community. Whether you’re an
          artist, a runner, a gamer, or a book lover, we provide the tools to connect, share,
          and grow your interests locally.
        </p>
      </section>

      {/* Static Section 2 */}
      <section className="bg-base-300 rounded-lg p-10 shadow-lg text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">How It Works</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Explore existing groups or create your own. Join meetups, share events, and build
          friendships around what you love. Our simple, friendly platform makes community
          building easy and fun.
        </p>
      </section>
    </div>
  );
}

export default Home;
