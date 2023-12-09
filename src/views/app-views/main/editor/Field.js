import React from 'react';
import Draggable from 'react-draggable';

const Field = ({ selectedItems, setPosition }) => {
  const handleDrag = (item, ui) => {
    setPosition(item.id, { x: ui.x, y: ui.y }, {x: item.coords.x, y: item.coords.y});
  };
  const wrapperStyle = {
    width: "700px",
    height: '700px',
    border: '1px solid'
  };
  const draggebleStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    cursor: 'move',
    width: '100px',
    height: '100px',
    overflow: 'hidden',
  };
  const imageStyle = {
    width: '100px', 
    height: '100px',
    pointerEvents: 'none',
  };
  
  return (
    <div style={wrapperStyle}>
      {selectedItems.map((item, i) => (
        <Draggable
          bounds="parent"
          onStop={(_, ui) => handleDrag(item, ui)}
          key={item.uniqKey}
          defaultPosition={item.coords ? item.coords : { x: 0, y: 0 }}>
          <div id={item.id + Math.random()} style={draggebleStyle}>
            <img src={item.img} alt={item.name} 
            style={{imageStyle, "transform": `rotate(${item.rotate >= 360 ? 0: item.rotate}deg)`}} />
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default Field;