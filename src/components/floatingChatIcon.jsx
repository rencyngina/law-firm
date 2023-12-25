import React from 'react';
import { IconContext } from 'react-icons';
import { FaComments } from 'react-icons/fa';
import { BsChatRightTextFill } from "react-icons/bs";


const floatingButtonStyle = {
  position: 'fixed',
  bottom: '20px',
  right: '40px',
  background: `radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
              radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)`,
  color: 'white',
  borderRadius: '50%',
  padding: '10px',
  boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.3)',
  cursor: 'pointer',
};

function FloatingChatButton(props) {
  return (
    <div style={floatingButtonStyle} onClick={props.handleChatButtonClick}>
      <IconContext.Provider value={{ size: '2.5rem' }}>
        <FaComments />
      </IconContext.Provider>
    </div>
  );
}

export default FloatingChatButton;