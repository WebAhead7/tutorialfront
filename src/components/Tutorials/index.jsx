import React from 'react';
import OneTutorial from '../OneTutorial';
import { NavLink, Route } from 'react-router-dom';

const Tutorials = (props) => {
  console.log('test');
  const [selectedId, setSelectedId] = React.useState(null);
  const list = props.list;
  console.log(list);
  if (!list) {
    return <h3>...Loading</h3>;
  }

  const buildList = () =>
    list.map((item) => (
      <div className='center' style={{ background: 'lightblue' }}>
        {/* <h3>{item.id}</h3> */}
        <h3>{item.tutorial_title}</h3>
        <button onClick={() => setSelectedId(item.id)}>Here</button>
        {item.id === selectedId && filterList()}
      </div>
    ));

  const filterList = () =>
    list
      .filter((item) => selectedId === item.id)
      .map((item) => <OneTutorial item={item} />);

  return <div>{buildList()}</div>;
};
export default Tutorials;
