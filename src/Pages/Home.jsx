import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet-async";

function Home() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("https://hobyhub-server.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data
          .filter((group) => !isNaN(Number(group.maxMembers)) && Number(group.maxMembers) > 0)
          .sort((a, b) => Number(b.maxMembers) - Number(a.maxMembers));
        setGroups(filtered.slice(0, 8)); // show top 8 for Featured
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const categories = [
    { name: "Drawing & Painting", icon: "🎨" },
    { name: "Photography", icon: "📸" },
    { name: "Video Gaming", icon: "🎮" },
    { name: "Fishing", icon: "🎣" },
    { name: "Running", icon: "🏃‍♂️" },
    { name: "Cooking", icon: "🍳" },
    { name: "Reading", icon: "📚" },
    { name: "Writing", icon: "✍️" },
  ];

  const blogs = [
    {
      id: 1,
      title: "How Joining a Hobby Group Changed My Life",
      snippet: "Discover the benefits of social hobby groups and how they boost your creativity and happiness.",
      url: "#",
    },
    {
      id: 2,
      title: "Top 10 Local Hobbies to Try This Year",
      snippet: "Explore popular hobby groups near you and find your new passion today!",
      url: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-20">
      <Helmet>
        <title>HobbyHub | Home</title>
      </Helmet>

      {/* Hero Section */}
      <div className="text-center md:mt-12 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Life is better when you{" "}
          <span className="text-primary font-extrabold">
            <Typewriter
              words={["Create", "Connect", "Explore", "Share"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Discover local hobby groups and build meaningful connections.
        </p>
      </div>

      {/* Hero Slider */}
       <Fade direction='right' triggerOnce={true} damping={0.5}>
<section>
        <Slider {...sliderSettings}>
          {[
            {
              image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
              title: "Discover Local Hobby Groups",
              subtitle: "Connect with like-minded people and explore new passions in your area.",
            },
            {
              image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
              title: "Start Your Own Hobby Group",
              subtitle: "Share your passion and invite others to join your community.",
            },
            {
              image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
              title: "Join Exciting Events & Meetups",
              subtitle: "Participate in fun activities and make lifelong friends.",
            },
          ].map((slide, index) => (
            <div key={index} className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover brightness-75" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h2>
                <p className="text-lg md:text-xl max-w-xl">{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>
  </Fade>

      {/* Featured Groups */}
      <Fade direction="bottom-left" triggerOnce={true}>
        <section>
          <h3 className="text-4xl dark:text-amber-100 font-semibold mb-8 text-center text-primary">
            Featured Hobby Groups
          </h3>
          {groups.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {groups.map((group) => (
                <Link
                  key={group._id}
                  onClick={() => window.scrollTo(0, 0)}
                  to={`/groupdetails/${group._id}`}
                >
                  <div className="rounded-2xl dark:bg-gray-800 bg-base-100 hover:shadow-xl overflow-hidden shadow-sm  cursor-pointer transition-shadow flex flex-col h-full">
                    <img
                      src={group.imageUrl || "https://via.placeholder.com/400"}
                      alt={group.groupName}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold">{group.groupName}</h4>
                      <p className="text-sm text-cyan-600">Category: {group.category}</p>
                      <p className="text-sm text-fuchsia-700 dark:text-amber-400">Location: {group.location}</p>
                      <p className="text-sm text-red-600 dark:text-amber-400 mb-4">
                        Max Members: {Number(group.maxMembers).toLocaleString()}
                      </p>
                      <button className="mt-auto btn btn-secondary rounded-lg btn-sm w-full">
                        See More
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No groups available at this time.</p>
          )}
        </section>
      </Fade>

      {/* Categories Section */}
      <Fade direction="up" triggerOnce={true}>
        <section className=" mx-auto">
          <h3 className="text-4xl font-semibold mb-8 text-center text-primary">Categories We Have</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-6 text-center">
            {categories.map(({ name, icon }) => (
              <div
                key={name}
                className="rounded-lg shadow-md p-4 cursor-pointer bg-white dark:bg-gray-800 hover:shadow-xl transition"
              >
                <div className="text-4xl mb-2">{icon}</div>
                <div className="text-sm font-semibold">{name}</div>
              </div>
            ))}
          </div>
        </section>
      </Fade>

      {/* Promotional Banner */}
      <Fade direction="right" triggerOnce={true}>
        <section className="bg-gradient-to-r from-primary to-secondary rounded-lg p-12 text-center text-white shadow-lg max-w-full mx-auto">
          <h3 className="text-3xl font-semibold mb-4">Join HobbyHub Today!</h3>
          <p className="mb-6 max-w-xl mx-auto">
            Create your own group, join meetups, and connect with others who share your passion.
          </p>
          <Link
            to="/register"
            className="btn btn-outline btn-light btn-lg mx-auto"
            onClick={() => window.scrollTo(0, 0)}
          >
            Get Started
          </Link>
        </section>
      </Fade>

      {/* Blog Section */}
      <Fade direction="left" triggerOnce={true}>
        <section className="max-w-full mx-auto">
          <h3 className="text-4xl font-semibold mb-8 text-center text-primary">Latest from Our Blog</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map(({ id, title, snippet, url }) => (
              <article
                key={id}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">{snippet}</p>
                <a
                  href={url}
                  className="text-primary font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More →
                </a>
              </article>
            ))}
          </div>
        </section>
      </Fade>

     {/* Promotional & Offers Section */}
<Fade direction="up" triggerOnce={true}>
  <section className="bg-gray-800 dark:bg-gray-900 rounded-lg p-10 max-w-full mx-auto shadow-lg text-white text-center">
    <h3 className="text-4xl font-bold mb-4 text-lime-400">Special Offers Just for You!</h3>
    <p className="mb-6 max-w-3xl mx-auto text-lg text-gray-300">
      Join HobbyHub now and get exclusive early access to premium groups, event discounts, and free workshops.  
      Don’t miss out on the chance to connect with passionate hobbyists near you!
    </p>
    <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
      <div className="bg-gray-700 rounded-lg p-6 flex-1 shadow-md">
        <h4 className="text-2xl font-semibold mb-2 text-lime-300">🎉 20% Off Event Fees</h4>
        <p className="text-gray-300">Register for upcoming meetups and get a 20% discount.</p>
      </div>
      <div className="bg-gray-700 rounded-lg p-6 flex-1 shadow-md">
        <h4 className="text-2xl font-semibold mb-2 text-lime-300">🚀 Premium Group Access</h4>
        <p className="text-gray-300">Unlock special hobby groups available only for premium members.</p>
      </div>
    </div>
    <button
      onClick={() => window.location.href = "/register"}
      className="mt-8 btn btn-lg btn-outline btn-lime-400 mx-auto"
    >
      Get Started Now
    </button>
  </section>
</Fade>



      {/* Newsletter Section */}
      <Fade direction="up" triggerOnce={true}>
        <section className="bg-primary rounded-lg p-10 max-w-full mx-auto text-white text-center shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">Stay Updated with HobbyHub</h3>
          <p className="mb-6 max-w-lg mx-auto">
            Subscribe to our newsletter to get the latest updates, events, and exclusive offers.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for subscribing!");
            }}
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="btn btn-secondary px-8">
              Subscribe
            </button>
          </form>
        </section>
      </Fade>
    </div>
  );
}

export default Home;
