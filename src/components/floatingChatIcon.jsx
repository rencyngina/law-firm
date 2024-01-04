import React from 'react';
import { IconContext } from 'react-icons';
import { FaComments } from 'react-icons/fa';
import { BsChatRightTextFill } from "react-icons/bs";
import { BsChatSquare } from "react-icons/bs";



const floatingButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '40px',
  background: '#D0B216',
  color: 'white',
  borderRadius: '50%',
  padding: '10px',
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
};

function FloatingChatButton(props) {
  return (
    <div style={floatingButtonStyle} onClick={props.handleChatButtonClick}>
      <IconContext.Provider value={{ size: '2.8rem' }}>
        <FaComments className='text-3xl lg:text-6xl xl:text-5xl'/>
      </IconContext.Provider>
    </div>
  );
}

export default FloatingChatButton;