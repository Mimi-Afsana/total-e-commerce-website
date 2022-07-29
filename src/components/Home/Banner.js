import React from "react";

const Banner = () => {
  return (
    <div className="bg-red-200">
      <div class="carousel w-full mt-12">
        <div id="slide1" class="carousel-item relative w-full">
          <div class="card-body">
            <h2 class="card-title">New movie is released!</h2>

            <p>
              Click the button to watch on Jetflix
              app.fbhbhfbhgbhfgbhbhbhgbhbghbgbghvfbghbghvbgbghbghbhgbhgbhbghbghbghbghbghbgh
            </p>
          </div>

          <figure>
            <img src="https://placeimg.com/200/280/arch" alt="Movie" />
          </figure>

          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
        <div id="slide3" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
        <div id="slide4" class="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"></div>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#slide1" class="btn btn-xs"></a>
        <a href="#slide2" class="btn btn-xs"></a>
        <a href="#slide3" class="btn btn-xs"></a>
      </div>
    </div>
  );
};

export default Banner;
