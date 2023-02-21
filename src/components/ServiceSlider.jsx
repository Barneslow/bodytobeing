import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Container } from "@mui/system";

import image1 from "../assets/images/yogatherapy.jpg";
import image2 from "../assets/images/yoganidra.jpg";
import image3 from "../assets/images/consciousconnection.jpg";
import { Typography, useTheme } from "@mui/material";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import IconButton from "../components/ui/IconButton";
import styles from "./ui/IconButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "framer-motion";

const services = [
  {
    image: image1,
    title: "What Is Yoga Therapy?",
    p1: "Yoga is an ancient practice that originated in India. It is a system of physical and mental disciplines that aim to transform the body and mind.",
    p2: "Yoga is often practiced as a form of exercise, but it can also be used as a form of therapy.",
    p3: "Yoga therapy & yoga nidra is the use of yoga to treat or prevent physical, mental, and emotional conditions. We offer classes in private and group settings.",
    price: "*Price: 888 SEK (60 min) / 1190 SEK (120 min)",
  },
  {
    image: image2,
    title: "What Is Thai Massage?",
    p1: "Thai massage is a traditional healing system that combines acupressure, Indian Ayurvedic principles, and assisted yoga postures.",
    p2: "Our masseuse will use their hands, knees, legs, and feet to move you into a series of stretches and compressions. Thai massage is both energizing and relaxing.",
    price: "*Price: 888 SEK (60 min) / 1190 SEK (90min)",
  },
  {
    image: image3,
    title: "What Is Conscious Connection?",
    p1: "Conscious Connection offers a set of practices that help you connect with yourself and your community through presence, embodiment and curiosity.",
    p2: "By learning how to be intimate with the present moment, we enter realms where healing happens through intuitive living, vulnerability and support.",
    p3: "Simultaneously, we become skilled in how we communicate our experiences. We offer this in both group and private settings.",
    price: "*Price: 888 SEK (60 min) / 1190 SEK (120 min)",
  },
];

const SlideContent = ({ content }) => {
  const theme = useTheme();
  return (
    <div className={styles.container}>
      <Box sx={{ padding: "1rem" }}>
        <img
          src={content.image}
          style={{
            width: "100%",
            borderRadius: 30,
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          position: "relative",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            padding: ".25rem",
          }}
        >
          <IconButton icon={faArrowLeft} className="custom-prev" />

          <Typography
            variant="h4"
            sx={{
              color: theme.palette.primary.main,
              fontFamily: "Playfair Display",
              fontWeight: "bold",
              fontSize: "var(--title-size)",
            }}
          >
            {content.title}
          </Typography>
          <IconButton icon={faArrowRight} className="custom-next" />
        </Box>

        <Typography
          variant="p"
          sx={{
            fontFamily: "Varela Round",
            color: "#13070C",
            lineHeight: "2rem",
            fontSize: "var(--text-size)",
          }}
        >
          {content.p1}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Varela Round",
            color: "#13070C",
            lineHeight: "2rem",
            fontSize: "var(--text-size)",
          }}
          variant="p"
        >
          {content.p2}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Varela Round",
            color: "#13070C",
            lineHeight: "2rem",
            fontSize: "var(--text-size)",
          }}
          variant="p"
        >
          {content.p3}
        </Typography>
      </Box>
    </div>
  );
};

const ServiceSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const options = {
    opacity: isInView ? 1 : 0,
    transition: "all 1.2s ease-in",
  };

  return (
    <Container
      ref={ref}
      style={options}
      maxWidth="xl"
      sx={{ minHeight: "80vh" }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".custom-nav.prev",
          nextEl: ".custom-nav.next",
        }}
        // onBeforeInit={(swiper) => {
        //   swiper.params.navigation.prevEl = navigationPrevRef.current;
        //   swiper.params.navigation.nextEl = navigationNextRef.current;
        // }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SlideContent content={services[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent content={services[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent
            content={services[2]}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default ServiceSlider;
