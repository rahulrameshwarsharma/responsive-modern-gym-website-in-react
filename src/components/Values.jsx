import Image from '../images/values.jpg';
import SectionHead from './SectionHead';

import { SiOpenaigym } from 'react-icons/si';
import { GiCutDiamond } from 'react-icons/gi';

import {values} from '../data.js';
import Card from '../UI/Card.jsx';

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Values Image" />
                </div>
            </div>
            <div className="values__right">
            <SectionHead icon={<GiCutDiamond />} title="values" />
            <p>
                Lorem ipsum, dolor sit amet consectetur quos repellendus vel perspiciatis, totam exercitationem harum, perferendis sit cum enim! Ducimus deleniti porro autem?
            </p>
            <div className="values__wrapper">
                {
                    values.map(({id, title, desc}) => {
                        return <Card className="values__value" key={id}>
                            <span>{<SiOpenaigym />}</span>
                            <h4>{title}</h4>
                            <small>{desc}</small>
                        </Card>
                    })
                }
            </div>
            </div>
        </div>
    </section>
  )
}

export default Values
