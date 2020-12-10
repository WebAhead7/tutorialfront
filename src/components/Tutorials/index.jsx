import React, { useState } from 'react';
import { useEffect } from 'react';
import OneTutorial from '../OneTutorial';
import SearchTutorial from '../SearchTutorial/index';
import './style.css';
import getUser from '../Users/index';

const Tutorials = (props) => {
  // console.log('test');
  const [selectedId, setSelectedId] = React.useState(null);
  const [searchTutorial, setSearchTutorial] = React.useState('');
  const [visibile, setVisibile] = React.useState(false);
  const list = props.list;
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [user, setUser] = useState({})
  // console.log(list);
  // useEffect(() => {
  //   const token = window.localStorage.getItem('access_token')

  //   if (token) {
  //     getUser(token)
  //       .then((data) => {
  //         setUser(data)
  //         setIsLoggedIn(true)
  //       })
  //       .catch((error) => {
  //         console.log(error)
  //       })
  //   }
  // }, [])

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
      .map((item, i) => (
        <div key={i} className='center' style={{ background: 'lightblue' }}>
          {/* <h3>{item.id}</h3> */}
          <h3>{item.tutorial_title}</h3>
          <button
            style={{ visibility: visibile }}
            onClick={() => {
              !visibile ? setVisibile(true) : setVisibile(false);
              setSelectedId(item.id);
            }}
          >
            More Details
          </button>
          {item.id === selectedId && visibile && filterList()}
        </div>
      ));

  const filterList = () =>
    list
      .filter((item) => selectedId === item.id)
      .map((item, i) => <OneTutorial key={i} item={item} />);

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
