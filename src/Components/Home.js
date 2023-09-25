import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import ElV from "../Images/ELV.jpg";
import HomeAutomation from "../Images/HA.jpeg";
import HomeTheater from "../Images/HT.jpg";
import pointofsalesystems from "../Images/POS.png";
import Viewers from "./Viewers";
import ELV from "./ELV";
import MainData from "./Data/data";
import Footer from "./Footer";

function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <div>
        <h1 className="ml-4 mt-28 text-4xl font-extrabold text-black flex">
          ONE STOP <p className="text-blue-400">EXPERTS</p>{" "}
        </h1>
        <h1 className="ml-4 mt-4 text-4xl font-extrabold text-black flex">
          FOR COMPLETE{" "}
          <p className="text-blue-400">
            COMMERCIAL, INDUSTRIAL, RETAIL & RESIDENTIAL SOLUTIONS
          </p>
        </h1>
      </div>
      <Carousel {...settings}>
        <Wrap>
          <img src={ElV} alt="" />
        </Wrap>
        <Wrap>
          <img src={HomeAutomation} alt="" />
        </Wrap>
        <Wrap>
          <img src={HomeTheater} alt="" />
        </Wrap>
        <Wrap>
          <img src={pointofsalesystems} alt="" />
        </Wrap>
      </Carousel>
      <Viewers />
      {MainData.map((Data) => (
        <ELV Heading={Data.Hading} Data={Data.data} />
      ))}
      <Footer />
    </Container>
  );
}

export default ImageSlider;

const Container = styled.div`
  overflow: hidden;
`;
const Carousel = styled(Slider)`
  margin-top: 60px;
  border-radius: 109x;
  overflow: hidden;
`;

const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid trnsparent;
    border-radius: 4px;
    width: 100%;
    height: 60vh;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
