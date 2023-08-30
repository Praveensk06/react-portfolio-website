import React from "react";
import "./testimonials.css";

import AVTR2 from "../../assets/avatar 2.jpg";
import AVTR3 from "../../assets/avatar 3.jpg";
import AVTR1 from "../../assets/gayu.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// data
const data = [
  {
    image: AVTR1,
    name: "K.Gayathri-HR",
    review:
      "Mr.Praveen,He is a person who is always looking for new challenges, a motivated and hardworking individual,He is one of the person with Time management, Having Leadership skill, Proper Attendance with punctual,I am confident that he can be a valuable asset to your team and he is excited to learn more about the web development ",
  },
  {
    image: AVTR2,
    name: "Dharani G - HR",
    review:
      "Praveen is the type of student who manages to give an output that's beyond expectations. And the good part, he doesn't intentionally do it to outperform but he simply enjoys doing his task and his complete investment and curiosity to learn makes him a extraordinary candidate to count on. Proud of say, he's one of my best students.",
  },
  {
    image: AVTR3,
    name: "Dr.K.Chandrakumar-HOD",
    review:
      "Mr.Praveen, proved himself to be a highly skilled and exceptionally talented student in the various areas of Master of Business Administration,He has the right attitude coupled with sharp quantitative skills and reasoning acumen and him passion will induce zeal to peers around him. His passion for excellence, boldness to achieve his objective and strong spirit to strive for perfection. and I am sure he will put forth all his effort into any task that he confronts.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review from My Mentors</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonial__container"
        // install Swiper modules
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ image, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
