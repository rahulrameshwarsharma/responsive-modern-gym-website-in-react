// Icons
import { FaCrown } from "react-icons/fa";
import { SiOpenaigym } from 'react-icons/si';
import { AiFillCaretRight } from "react-icons/ai";

// Components
import SectionHead from "./SectionHead";
import {programs} from '../data.js';
import Card from "../UI/Card.jsx";

import {Link} from "react-router-dom";

const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown />} title="Programs" />
            <div className="programs__wrapper">
                {
                    programs.map(({id, title, info, path}) => {
                        return (
                        <Card className="programs__program" key={id}>
                            <span>{<SiOpenaigym />}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className="btn sm">Learn More <AiFillCaretRight /></Link>
                        </Card>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Programs