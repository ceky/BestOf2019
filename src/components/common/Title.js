import React from 'react';

import './../../scss/components/Title.scss';

const Title = ({label}) => {

  return (
    <div className="title-container">
      <div className="title-bg"></div>
      <h1 className="title-section">{label}</h1>
    </div>
  )
}

export default Title;