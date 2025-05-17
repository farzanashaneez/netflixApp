import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "./context/AuthContext";
import { db } from "./services/Firebase";
import { createImageUrl } from "./services/movieServices";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import MovieItem from "./components/MovieItem";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows);
      });
    }
  }, [user?.email]);
  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + offset;
  };
  if (!user) {
    return (
      <>
        <p>fetching shows...</p>
      </>
    );
  }
  
  return (
    <>
      <div>
        <div>
          <img
          className="block w-full h-[500] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/AE-en-20240909-TRIFECTA-perspective_fdcd0c88-7cba-4832-a5fc-f2de08256acb_large.jpg"
            alt="//"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-full"/>
          <div className="absolute top-[20%] p-4 md:p-8">
            <p className="font-nsans-light text-gray-400 text-lg"></p>
          </div>
          <div>
  
      <div 
      
      className="relative flex items-center group mb-10">
        <MdChevronLeft
          onClick={() => {
            slide(-500);
          }}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer "
          size={40}
        />
        
        <div
      id='slider'

          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >   
               <h1 className="text-3xl md:text-5xl font-nsans-bold my-2 " >My shows</h1>

          {movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} isfav={true} />
          ))}
        </div>
      <MdChevronRight
          onClick={() => {
            slide(500);
          }}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer "
          size={40}
        />
       
      </div>
    
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
