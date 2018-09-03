import React from 'react';
import Button from './Button';
import Author from './Author';
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.img} className='Story-img'/>
      <div className='story-info'>
        <div>
          <h3 className='story-info'>{props.title}</h3>
          <p className='story-info'>{props.desc}</p>
        </div>
        {/* create an Author component and add it here */}
        {Author(props)}
        {/* it will need properties of the author image, name, and the estimated reading time of the story */}
      </div>
    </div>
  )
}

export default Story;
