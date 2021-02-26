import React from "react";

function Head(props) {
  var urli = props.link;
    return (
<section className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={ props.imgSrc}/>
    <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{ props.heading}</h1>
                    <p className="leading-relaxed mb-8">Type <b>{props.type}</b><br />episodes <b>{props.episodes}</b><br />Starting Date <b>{props.startDate}</b><br />End Date <b>{props.endDate}</b><br />score <b>{ props.score}</b></p>
      <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={() => window.location.assign(urli)}>Watch</button>
        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Share</button>
      </div>
    </div>
  </div>
</section>
    );
}

export default Head;