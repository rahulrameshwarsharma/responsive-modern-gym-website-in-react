import { useState } from "react";
import SectionHead from "./SectionHead";

import { ImQuotesLeft } from "react-icons/im";

import avatar1 from '../images/avatar1.jpg';
// , avatar2, avatar3, avatar4, avatar5, avatar6, avatar7,

import Card from "../UI/Card"
import {testimonials} from "../data.js"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Testimonials = () => {
    const [index, setIndex] = useState(0)
    const {name, quote, job} = testimonials[index];

    const preTestimonialHandler = () => {
        setIndex(prev => prev - 1);

        if(index <= 0) {
            setIndex(testimonials.length - 1);
        }
    }

    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);

        if(index >= testimonials.length -1) {
            setIndex(0);
        }
    }


  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft />} title="Testimonials" className="testimonials__head" />
            <Card className="testimonial">
                <div className="testimonial__avatar">
                    <img src={avatar1} alt={name} />
                </div>
                <p className="testimonial__quote">{`"${quote}"`}</p>
                <h5>{name}</h5>
                <small className="testimonial__title">{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={preTestimonialHandler}><IoIosArrowDropleftCircle /></button>
                <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle /></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials
