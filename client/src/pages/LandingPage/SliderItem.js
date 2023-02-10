import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function SliderItem({ sliderItem }) {
  const [item, setItem] = useState([]);
  return (
    <div>{sliderItem && sliderItem.map(i=>(
      <SubCardBox key={i}>
          <ItemImg alt="SliderItem" src={`http://localhost:5001/uploads/${i._id}.png`} />
          <p>{i.name}&nbsp;&nbsp;&nbsp;&nbsp;{i.price} KRW</p>
      </SubCardBox>
    ))}</div>
  );
}


const SubCardBox = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 0px 0 17.5vh;
  text-align: center;
  border-radius: 25px;
  float: left;
  background: rgba(153, 164, 151, 1);
`;

const ItemImg = styled.img`
  width: 300px;
  height: 230px;
  border-radius: 25px 25px 0 0;
`;

export default SliderItem;
