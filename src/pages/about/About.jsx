
import Header from "../../components/Header";
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import "./about.css";

const about = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit sint delectus libero, molestias sit molestiae ducimus cumque placeat, provident corrupti cupiditate odio aut, sequi quibusdam.
      </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
        <img src={StoryImage} alt="Our Story Image" />
        </div>
      </div>
      <div className="about__section-content">
        <h1>Our Story</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae voluptatibus laboriosam sed odit sunt magni rem debitis nihil quo, neque quos temporibus doloribus ratione architecto repellat quisquam, fugiat officia. Distinctio quidem perferendis nihil laudantium vitae, iusto totam consectetur, possimus sunt blanditiis odit optio unde obcaecati laboriosam sequi suscipit tempore pariatur placeat soluta ex accusantium commodi architecto.
        </p>
        <p>
          Magni vero ipsam doloribus quisquam quo inventore exercitationem excepturi perspiciatis vitae, officia libero dolores, minus eum id distinctio quaerat accusamus repellat blanditiis.
        </p>
        <p>
          Fugiat cupiditate debitis adipisci, blanditiis obcaecati reiciendis veniam consequatur deserunt dolore magnam, quia molestias perspiciatis minus mollitia delectus odio ipsam quaerat!
        </p>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-image">
          <img src={VisionImage} alt="Our vision Image" />
        </div>
      </div>
      <div className="about__section-content">
        <h1>Our vision</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae voluptatibus laboriosam sed odit sunt magni rem debitis nihil quo, neque quos temporibus doloribus ratione architecto repellat quisquam, fugiat officia. Distinctio quidem perferendis nihil laudantium vitae, iusto totam consectetur, possimus sunt blanditiis odit optio unde obcaecati laboriosam sequi suscipit tempore pariatur placeat soluta ex accusantium commodi architecto.
        </p>
        <p>
          Magni vero ipsam doloribus quisquam quo inventore exercitationem excepturi perspiciatis vitae, officia libero dolores, minus eum id distinctio quaerat accusamus repellat blanditiis.
        </p>
      </div>
    </section>
mission
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
        <img src={MissionImage} alt="Our Mission Image" />
        </div>
      </div>
      <div className="about__section-content">
        <h1>Our Mission</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae voluptatibus laboriosam sed odit sunt magni rem debitis nihil quo, neque quos temporibus doloribus ratione architecto repellat quisquam, fugiat officia. Distinctio quidem perferendis nihil laudantium vitae, iusto totam consectetur, possimus sunt blanditiis odit optio unde obcaecati laboriosam sequi suscipit tempore pariatur placeat soluta ex accusantium commodi architecto.
        </p>
        <p>
          Magni vero ipsam doloribus quisquam quo inventore exercitationem excepturi perspiciatis vitae, officia libero dolores, minus eum id distinctio quaerat accusamus repellat blanditiis.
        </p>
      </div>
    </section>

    </>
  )
}

export default about