import React, { useState } from "react";
import SearchTutorial from "../../components/SearchTutorial/index";

const Tutorials = () => {
  const [SearchTutorial, setSearchTutorial] = useState("");
  return (
    <div>
      <h4>Tutorials </h4>
      <SearchTutorial setSearchTutorial={setSearchTutorial} />;
    </div>
  );
};

export default Tutorials;
