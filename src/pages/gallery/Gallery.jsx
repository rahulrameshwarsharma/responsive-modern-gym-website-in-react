import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';

import image1 from '../../images/gallery1.jpg';
import image2 from '../../images/gallery2.jpg';
import image3 from '../../images/gallery3.jpg';
import image4 from '../../images/gallery4.jpg';
import image5 from '../../images/gallery5.jpg';
import image6 from '../../images/gallery6.jpg';
import image7 from '../../images/gallery7.jpg';
import image8 from '../../images/gallery8.jpg';
import image9 from '../../images/gallery9.jpg';
import image10 from '../../images/gallery10.jpg';
import image11 from '../../images/gallery11.jpg';
import image12 from '../../images/gallery12.jpg';
import image13 from '../../images/gallery13.jpg';
import image14 from '../../images/gallery14.jpg';
import image15 from '../../images/gallery15.jpg';


import "./gallery.css";

const Gallery = () => {

  // const galleryLength = 15;
  // const images = []

  // for(let i = 1; i <= galleryLength; i++) {
  //   images.push(import(`../../images/gallery${i}.jpg`))
  // }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores neque similique vero dicta temporibus eaque nulla? Unde excepturi facere iusto a provident possimus, quidem quaerat.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          
            <article>
                <img src={image1} alt="Gallery images1" />
            </article>
            <article>
                <img src={image2} alt="Gallery images2" />
            </article>
            <article>
                <img src={image3} alt="Gallery images3" />
            </article>
            <article>
                <img src={image4} alt="Gallery images4" />
            </article>
            <article>
                <img src={image5} alt="Gallery images5" />
            </article>
            <article>
                <img src={image6} alt="Gallery images6" />
            </article>
            <article>
                <img src={image7} alt="Gallery images7" />
            </article>
            <article>
                <img src={image8} alt="Gallery images8" />
            </article>
            <article>
                <img src={image9} alt="Gallery images9" />
            </article>
            <article>
                <img src={image10} alt="Gallery images10" />
            </article>
            <article>
                <img src={image11} alt="Gallery images11" />
            </article>
            <article>
                <img src={image12} alt="Gallery images12" />
            </article>
            <article>
                <img src={image13} alt="Gallery images13" />
            </article>
            <article>
                <img src={image14} alt="Gallery images14" />
            </article>
            <article>
                <img src={image15} alt="Gallery images15" />
            </article>
  
        </div>
      </section>
    </>
  )
}

export default Gallery







// const Gallery = () => {

//   const galleryLength = 15;
//   const images = []

//   for(let i = 1; i <= galleryLength; i++) {
//     images.push(import(`../../images/gallery${i}.jpg`))
//   }


//   return (
//     <>
//       <Header title="Our Gallery" image={HeaderImage}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores neque similique vero dicta temporibus eaque nulla? Unde excepturi facere iusto a provident possimus, quidem quaerat.
//       </Header>
//       <section className="gallery">
//         <div className="container gallery__container">
//           {
//             images.map((image, index) => {
//               return <article key={index}>
//                 <img src={image} alt={`Gallery Image ${index + 1}`} />
//               </article>
//             })
//           }
//         </div>
//       </section>
//     </>
//   )
// }
