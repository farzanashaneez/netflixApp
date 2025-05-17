import React from "react";
import { createImageUrl } from "../services/movieServices";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../services/Firebase";
import { UserAuth } from "../context/AuthContext";

const MovieItem = ({ movie,isfav=false }) => {
  const [like, setLike] = useState(false);
  const { title, backdrop_path, poster_path } = movie;
  const {user}=UserAuth();

  const markFavShow = async () => {
    const userEmail = user?.email;
    if (userEmail) {
      const userdoc = doc(db, "users", userEmail);
      setLike(!like)
      await updateDoc(userdoc,{
        favShows:arrayUnion({...movie})
      })
    }
    else{
      alert('Login to save a movie')
    }
  };
  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
      <img
        className="w-full h-40 block object-cover object-top "
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />
    <div className="absolute top-0 left-0 w-full h-40 bg-black/50 opacity-0 hover:opacity-100">
        <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold ">
          {title}
        </p>
        {!isfav && <p onClick={markFavShow } className='cursor-pointer' size={20}>
          {like ? (
            <FaHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          ) : (
            <FaRegHeart
              size={20}
              className="absolute top-2 left-2 text-gray-300"
            />
          )}
        </p>}
      </div>
    </div>
  );
};

export default MovieItem;
