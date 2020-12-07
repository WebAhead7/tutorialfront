import React from "react";
import "./style.css";
function SearchTutorial(props) {
  const [inputTutorial, setInputTutorial] = React.useState("");
  const handleTextChanged = (event) => setInputTutorial(event.target.value);
  const sendSearch = () => props.setSearchTutorial(inputTutorial);

  React.useEffect(() => {
    sendSearch();
  }, [inputTutorial]);
  return (
    <div>
      <input
        placeholder="Tutorial Name"
        className="searchtutorial"
        type="text"
        value={inputTutorial}
        onChange={handleTextChanged}
      />
    </div>
  );
}

export default SearchTutorial;
