import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { useNavigate, useParams } from 'react-router-dom';

import MicIcon from '../assets/mic.svg';
import ImageIcon from '../assets/image.svg';

const SearchInput = () => {
  const { query, startIndex } = useParams();
  const [searchQuary, setSearchQueary] = useState(query || '');
  const navigate = useNavigate();
  const searchQueryHandler = (event) => {
    if (event.key === 'Enter' && searchQuary.length > 0) {
      navigate(`/${searchQuary}/${1}`);
    }
  };

  return (
    <div
      id="searchBox"
      className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:bg-white hover:shadow-c hover:border-0 focus-within:shadow-c focus-within:border-0"
    >
      <AiOutlineSearch size={18} color="#9aa0a6" />
      <input
        type="text"
        onChange={(e) => setSearchQueary(e.target.value)}
        onKeyUp={searchQueryHandler}
        value={searchQuary}
        autoFocus
        className="grow outline-0 text-black/[0.87]"
      />
      <div className="flex items-center gap-3">
        {searchQuary && (
          <IoMdClose
            size={24}
            color="#70757a"
            className="cursor-pointer"
            onClick={() => setSearchQueary('')}
          />
        )}
        <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
        <img className="h-6 w-6 cursor-pointer" src={ImageIcon} alt="" />
      </div>
    </div>
  );
};

export default SearchInput;
