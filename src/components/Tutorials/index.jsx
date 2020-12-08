import React from 'react';
import OneTutorial from '../OneTutorial';
import SearchTutorial from '../SearchTutorial/index';
import { NavLink, Route } from 'react-router-dom';
import './style.css';

const Tutorials = (props) => {
  console.log('test');
  const [selectedId, setSelectedId] = React.useState(null);
  const [searchTutorial, setSearchTutorial] = React.useState('');
  const list = props.list;
  console.log(list);
  if (!list) {
    return <h3>...Loading</h3>;
  }

  const buildList = () =>
    list
      .filter(
        (item) =>
          item.tutorial_title
            .toLowerCase()
            .indexOf(searchTutorial.toLowerCase()) !== -1
      )
      .map((item) => (
        <div className='center' style={{ background: 'lightblue' }}>
          {/* <h3>{item.id}</h3> */}
          <h3>{item.tutorial_title}</h3>
          <button onClick={() => setSelectedId(item.id)}>More Details</button>
          {item.id === selectedId && filterList()}
        </div>
      ));

  const filterList = () =>
    list
      .filter((item) => selectedId === item.id)
      .map((item) => <OneTutorial item={item} />);

  return (
    <div>
      <div>
        <SearchTutorial
          searchTutorial={searchTutorial}
          setSearchTutorial={setSearchTutorial}
        />
      </div>

      <div>{buildList()}</div>
    </div>
  );
};
export default Tutorials;
