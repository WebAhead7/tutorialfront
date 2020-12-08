import React from 'react';
import DeleteTutorial from '../DeleteTutorial';

const OneTutorial = (props) => {
  // console.log('test');
  const item = props.item;
  if (!item) {
    return <h3>...Loading</h3>;
  }
  // console.log(list.map((item) => item.id));
  // return <h1>test</h1>;
  // console.log(item);

  return (
    <div className='center' style={{ background: 'whitesmoke' }}>
      <h2>{item.tutorial_title}</h2>
      <ul>
        {/* <li>Tutorial ID: {item.id}</li> */}
        <li>Instructor's First Name: {item.firstname}</li>
        <li>Instructor's Last Name: {item.lastname}</li>
        <li>Instructor's Contact Info: {item.email}</li>
      </ul>
      <div>
        <p>Tutorial Description: {item.tutorial_description}</p>
        <p>
          Status:
          {item.tutorial_status
            ? ' Tutorial Currently Available'
            : ' Tutorial Not Available at This Time'}
        </p>
      </div>
      <br />
      <div>
        <button onClick={() => {}}>Edit Tutorial</button>
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            <DeleteTutorial id={item.id} />;
          }}
        >
          Delete Tutorial
        </button>
      </div>
    </div>
  );
};
export default OneTutorial;
