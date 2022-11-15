import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
 

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
         
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
