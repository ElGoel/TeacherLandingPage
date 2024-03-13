<template>
   <section class="p-relative testimonial__area testimonial__overlay pt-175 pb-170">
      <div class="container section__title-wrapper mb-50">
         <h2 class="section__title text-center">Testimonios de estudiantes</h2>
         <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br> Atque a, voluptates eaque
            quod numquam </p>
      </div>
      <div class="container d-flex justify-content-center align-item-center">
         <div class="col-xxl-12 rotating-border-testimonials rotating-border--card testimonial__container">
            <div class="testimonial__slider">
               <swiper ref="mySwiper" :modules="modules" :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false,
               }" :loop="true" :navigation="{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev'
               }">
                  <swiper-slide v-for="testimonial in testimonialData" :key="testimonial.id">
                     <div class="testimonial__slider-inner swiper-wrapper">
                        <div class="testimonial__item text-center swiper-slide">
                           <div class="testimonial__thumb">
                              <img src="../../assets/img/testimonial/testi-1.jpg" alt="">
                           </div>
                           <div class="testimonial__content">
                              <p>“ Barmy loo sloshed porkiesdo with me down the pub say bubble and squeak. ”</p>

                              <div class="testimonial__info">
                                 <h4>Jason Response</h4>
                                 <span>UX Designer</span>
                              </div>
                           </div>
                        </div>
                        <div class="testimonial__item text-center swiper-slide">
                           <div class="testimonial__thumb">
                              <img src="../../assets/img/testimonial/testi-1.jpg" alt="">
                           </div>
                           <div class="testimonial__content">
                              <p>“ Barmy loo sloshed porkiesdo with me down the pub say bubble and squeak. ”</p>

                              <div class="testimonial__info">
                                 <h4>Jason Response</h4>
                                 <span>UX Designer</span>
                              </div>
                           </div>
                        </div>
                        <div class="testimonial__item text-center swiper-slide">
                           <div class="testimonial__thumb">
                              <img src="../../assets/img/testimonial/testi-1.jpg" alt="">
                           </div>
                           <div class="testimonial__content">
                              <p>“ Barmy loo sloshed porkiesdo with me down the pub say bubble and squeak. ”
                              </p>

                              <div class="testimonial__info">
                                 <h4>Jason Response</h4>
                                 <span>UX Designer</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </swiper-slide>
                  <div class="swiper-button-next swiper-nav">
                     <i class="far fa-arrow-right"></i>
                  </div>
                  <div class="swiper-button-prev swiper-nav">
                     <i class="far fa-arrow-left"></i>
                  </div>
               </swiper>
            </div>
         </div>
      </div>
      <div class="testimonial__thumbAb">
         <img class="testimonial__thumbAb-1" src="../../assets/img/testimonial/testi-1.jpg" alt="">
         <img class="testimonial__thumbAb-2" src="../../assets/img/testimonial/testi-1.jpg" alt="">
         <img class="testimonial__thumbAb-3" src="../../assets/img/testimonial/testi-1.jpg" alt="">
         <img class="testimonial__thumbAb-4" src="../../assets/img/testimonial/testi-1.jpg" alt="">
         <img class="testimonial__thumbAb-5" src="../../assets/img/testimonial/testi-1.jpg" alt="">
         <img class="testimonial__thumbAb-6" src="../../assets/img/testimonial/testi-1.jpg" alt="">
      </div>
   </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, EffectFade } from "swiper";

export default {
   name: 'TestimonialArea',
   data() {
      return {
         testimonialData: [
            {
               id: 1,
            },
            {
               id: 2,
            }
         ]
      }
   },
   components: {
      Swiper,
      SwiperSlide,
   },
   setup() {
      return {
         modules: [Autoplay, Navigation, EffectFade],
      };
   },
};
</script>
