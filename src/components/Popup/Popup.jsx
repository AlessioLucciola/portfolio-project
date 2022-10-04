import React from 'react';

import './Popup.scss';

const Popup = (props) => {
  return (props.trigger) ? (
    <div className='app__popup-shade'>
      <div className='app__popup-inner'>
          <div className='app__popup-title'>
              <h1>{ props.title }</h1>
          </div>
          <div className='app__popup-description'>
              { props.description }
          </div>
          <div className='app__popup-button'>
            <button type='button' className='p-text' onClick={props.onClick}>Close</button>
          </div>
      </div>
    </div>
  ) : '';
}

export default Popup