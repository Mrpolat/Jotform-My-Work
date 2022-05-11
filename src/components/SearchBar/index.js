import React from 'react'

const SearchBar = ({keyword,setkeyword}) => {
    
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", cursor:"pointer",padding:"0.5rem"};
    return (
      <input 
        type="text"
       style={BarStyling}
       key="random1"
       value={keyword}
       placeholder={"search"}
    //    onChange={(e) => setKeyword(e.target.value)}
      />
    );
}

export default SearchBar