import React from 'react';

import './../../scss/components/Title.scss';

const Title = ({label}) => {

  return (
    <h1 className="title-section">{label}</h1>
  )
}

export default Title;