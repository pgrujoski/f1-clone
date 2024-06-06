import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white p-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Welcome to Formula One World
      </h1>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">About Formula One</h2>
        <p className="mb-4">
          Formula One (also known as Formula 1 or F1) is the highest class of
          international single-seater auto racing sanctioned by the Fédération
          Internationale de l'Automobile (FIA) and owned by the Formula One
          Group. The World Drivers' Championship, which became the FIA Formula
          One World Championship in 1981, has been one of the premier forms of
          racing around the world since its inaugural season in 1950.
        </p>

        <p>
          Formula One cars are the fastest regulated road-course racing cars in
          the world, owing to very high cornering speeds achieved through the
          generation of large amounts of aerodynamic downforce. The cars are
          heavily dependent on electronics, aerodynamics, suspension, and tyres.
          The formula has undergone constant and frequent regulation changes
          throughout its history, in order to improve safety and reduce costs,
          and to increase the level of competition.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">News Headline 1</h3>
            <p>
              This is a brief description of the latest news in Formula One.
              Stay updated with the recent happenings in the world of F1.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">News Headline 2</h3>
            <p>
              This is another brief description of the latest news in Formula
              One. Follow the recent updates and news stories.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">News Headline 3</h3>
            <p>
              Stay informed about the latest news and stories in Formula One.
              This is a brief description of the current news.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img
            src="https://cdn-3.motorsport.com/images/amp/6xEXD9r0/s1000/red-bull-racing-rb19-front-win.jpg"
            alt="Formula Red Bull"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://cdn-2.motorsport.com/images/amp/YBe5yXW2/s1000/ferrari-sf-24.jpg"
            alt="Formula Ferrari"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://cdn-8.motorsport.com/images/amp/68ylgvl0/s1000/lando-norris-mclaren-mcl60-1.jpg"
            alt="Formula McLaren"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <br></br>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Story 1</h3>
            <p>
              Read about the fascinating stories from the history of Formula
              One. This section covers various interesting aspects of F1.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Story 2</h3>
            <p>
              Discover more stories from the world of Formula One. From historic
              races to legendary drivers, this section has it all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
