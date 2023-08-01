
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import section from '../../../assest/section.png'
import section2 from '../../../assest/section2.png'
import section3 from '../../../assest/section3.png'
import section4 from '../../../assest/section4.png'
import section5 from '../../../assest/section5.png'
import section6 from '../../../assest/section6.png'
import section7 from '../../../assest/section7.png'
import section8 from '../../../assest/section8.png'

register();

export const Section = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('progress', (e) => {
      const [progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <swiper-container className='swiper-container'
      ref={swiperElRef}
      slides-per-view="8"
      navigation="true"
    >
    <swiper-slide><img  src={section} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section2} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section3} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section4} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section5} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section6} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section7} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section8} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section2} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section3} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section4} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section5} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section6} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section7} alt="logo" /></swiper-slide>
      <swiper-slide><img src={section8} alt="logo" /></swiper-slide>
      ...
    </swiper-container>
  );
};
export default Section