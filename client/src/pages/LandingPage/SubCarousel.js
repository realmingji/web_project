import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Slider from 'react-slick';
import SliderItem from './SliderItem';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    right: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: black;
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    bottom: 30px;
    color: black;

    li button:before {
      color: black;
    }

    li.slick-active button:before {
      color: white;
    }
  }

  margin-top: 50px;
  margin-bottom: 100px;
`;

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

function SubCarousel() {
  //상품정보 받아오기
    const productId = [1, 2, 3];
    const [item, setItem] = useState([]);

    // useEffect(() => {
    //   productId.forEach((i)=>{
    //     axios.get(`http://localhost:5001/product/${i}`).then(res => {
    //       setItem(res.data);
    //       console.log(item);
    //     });
    //   })
    // }, []);

    useEffect(() => {
      productId.forEach((i)=>{
          setItem(i);
      })
    }, []);

  const settings = {
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <StyledSlider {...settings}>
        <div>
          <SliderItem sliderItem={productId} />
        </div>
        <div>
          <SubCardBox>
            <ItemImg alt="SliderItem2" src="/image/bottega2.jpg" />
          </SubCardBox>
          <SubCardBox>
            <ItemImg alt="SliderItem2" src="/image/bottega2.jpg" />
          </SubCardBox>
          <SubCardBox>
            <ItemImg alt="SliderItem2" src="/image/bottega2.jpg" />
          </SubCardBox>
        </div>
      </StyledSlider>
    </div>
  );
}

export default SubCarousel;
