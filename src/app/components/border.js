import React from 'react';

export function Border(props) {
  const { color } = props;
  return (
    <div className="border-style" style={{borderColor: color ? color : 'auto' }}>
      
    </div>
  );
}