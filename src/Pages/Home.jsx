import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom"; // use 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter'

function Home() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
  fetch("http://localhost:4500/groups")
    .then((res) => res.json())
    .then((data) => {
      // Convert maxMembers to a number and filter out invalid ones
      const filtered = data
        .filter(group => !isNaN(Number(group.maxMembers)) && Number(group.maxMembers) > 0)
        .sort((a, b) => Number(b.maxMembers) - Number(a.maxMembers)); // sort descending

      setGroups(filtered.slice(0, 6)); // limit to top 6 by members
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

  return (
    <div className="max-w-7xl mx-auto px-6 py-12  space-y-20">
      

 <div className="text-center md:mt-12 px-4">
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Life is better when you{' '}
        <span className="text-primary font-extrabold">
          <Typewriter
            words={['Create', 'Connect', 'Explore', 'Share']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
     
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
      
<Fade direction='bottom-left' triggerOnce={true}>
  <section>
        <h3 className="text-4xl dark:text-amber-100 font-semibold mb-8 text-center text-primary">Featured Hobby Groups</h3>
        {groups.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {groups.map(group => (
              <Link key={group._id} to={`/groupdetails/${group._id}`}>
                <div className="rounded-lg dark:bg-gray-800 bg-base-200 hover:shadow-xl overflow-hidden shadow-sm  animate-moving-shadow cursor-pointer transition-shadow">
                  <img src={group.imageUrl || "https://via.placeholder.com/400"} alt={group.groupName} className="w-full h-48 object-cover" />
                  <div className="p-4 space-y-1">
                    <h4 className="text-xl font-bold">{group.groupName}</h4>
                    <p className="text-sm text-cyan-600">Category: {group.category}</p>
                    <p className="text-sm text-fuchsia-700 dark:text-amber-400">Location: {group.location}</p>
                    <p className="text-sm text-red-600 dark:text-amber-400">
                      Max Members: {Number(group.maxMembers).toLocaleString()}
                    </p>
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
      {/* Featured Groups */}
    

      {/* Why Join Section */}
      <section className="bg-cyan-700 text-white animate-moving-shadow2 shadow-2xl rounded-lg p-10 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">Why Join HobbyHub?</h3>
        <p className="text-lg">
          At HobbyHub, we believe every passion deserves a community. Whether you’re an
          artist, a runner, a gamer, or a book lover, we provide the tools to connect, share,
          and grow your interests locally.
        </p>
      </section>

      {/* Tagline */}
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
          The hobbies you love.<br />
          From a place that brings people together.
        </h2>
      </div>

      {/* How It Works Section */}
      <section className="bg-indigo-950 text-amber-200 animate-moving-shadow2 shadow-2xl rounded-lg p-10 text-center max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">How It Works</h3>
        <p className="text-lg">
          Explore existing groups or create your own. Join meetups, share events, and build
          friendships around what you love. Our simple, friendly platform makes community
          building easy and fun.
        </p>
      </section>
    </div>
  );
}

export default Home;
