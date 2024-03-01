import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  return (
    <>
      <div className='border-[5px] hover:shadow-customWhiteShadow border-[rgba(0,0,0,0.1)] rounded-[15px]  flex justify-center items-center overflow-hidden m-1.5 bg-blue-500'>
        <Link to={`search`}>
          <img
            src='https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_DEFAULT-en.jpg'
            alt='Discover Weekly'
            className='rounded-[15px] hover:scale-[1.03] hover:blur-[1px] hover:opacity-75 transition duration-150 ease-in'
          />
        </Link>
      </div>
    </>
  );
};

export default Search;