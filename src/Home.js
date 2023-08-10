import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className=" Page_Home">
      <div>
        <form className="search_block">
          <input placeholder=" Enter a city name">search</input>
          <button>
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKSnkOet_Ztae33DuxFf0UcgqKr4HiYXuzSA&usqp=CAU"
              alt="logo"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
