import React from "react";
import { makeStyles } from "@material-ui/core";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const useStyles = makeStyles((theme) => ({
  Swiper: {
    maxWidth: "400px",
    marginLeft: "0 auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "300px",
      marginLeft: "0 auto",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "300px",
      marginLeft: "0 auto",
    },
  },
  swiperImg: {
    width: "400px",
    height: "400px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%",
    },
  },
  img: {
    width: "80px",
    height: "80px",
    [theme.breakpoints.down("md")]: {
      width: "50px",
      height: "50px",
    },
  },
  imgContainer: {
    display: "flex",
    gap: "10px",
  },
}));

const Slider = (props) => {
  const classes = useStyles();
  const path = props.path;
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

  return (
    <div className={classes.Swiper}>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        pagination={true}
      >
        {path.map((index, i) => (
          <SwiperSlide key={i}>
            <img src={index.path} className={classes.swiperImg} alt="GUNPLA" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={classes.imgContainer}>
        {path.map((index, i) => (
          <img src={index.path} className={classes.img} key={i} alt="GUNPLA" />
        ))}
      </div>
    </div>
  );
};

export default Slider;
