import React from 'react';

const Title = ({ docNewTitle, title, subTitle }) => {
  
  document.title=docNewTitle;

  return (
    <>
      <h2>{title}</h2>
      {!!subTitle && <h3>{subTitle}</h3>}
    </>
  );
};

export default Title;
