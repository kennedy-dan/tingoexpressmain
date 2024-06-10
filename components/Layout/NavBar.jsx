import React,{useState} from "react";

const NavBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  return (
    <section>
      <div className="bg-white flex justify-between items-center px-10">
        <img src="images/navbarlogo.png" alt="" />
        <div>
          <div className="flex items-center h-[] py-4">
            <div className="relative h-[62px] ">
              <div className={ ` h-full rounded-l-lg custom-input ${isFocused || inputValue ? 'focused' : ''}`}>
                {!inputValue && !isFocused && (
                  <div className="placeholder">
                    <img src="images/searchicon.png" alt="Search Icon" className="icon" />
                    <span className="text font-[14px] ">Search</span>
                  </div>
                )}
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className="input-element "
                />
              </div>
            </div>
            <button className="bg-searchheader text-white h rounded-r-lg font-semibold h-[62px] text-[px] px-7 text-[18px]">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
