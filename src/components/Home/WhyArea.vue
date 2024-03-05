<template>
   <section class="why__area pt-125 pb-120">
      <div class="container">
         <div class="row align-items-center">
            <div class="col-xxl-5 col-xl-5 col-lg-6 col-md-8">
               <div class="why__thumb">
                  <img src="../../assets/img/why/Mask-about.png" alt="">
                  <img class="why-green" src="../../assets/img/why/shape-blue.png" alt="">
                  <img class="why-green" src="../../assets/img/why/shape-red.png" alt="">
                  <img class="why-green" src="../../assets/img/why/shape-yellow.png" alt="">
                  <img class="why-dot" src="../../assets/img/why/why-shape-dot.png" alt="">
                  <img class="why-line" src="../../assets/img/why/why-shape-line.png" alt="">
               </div>
            </div>
            <div class="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
               <div class="why__content mt-40">
                  <div class="section__title-wrapper mb-30">
                     <h2 class="section__title">Conoce a tu instructora</h2>
                     <p class="text-start">Oxford chimney pot Eaton faff about blower blatant brilliant, bubble and
                        squeak he legged it
                        Charles bonnet arse at public school bamboozled.</p>
                  </div>
                  <div class="why__content-info">
                     <InfoItem />
                  </div>
                  <div class="why__btn d-flex justify-content-end align-items-center">
                     <a href="/contact" class="e-btn e-btn-outline mr-30">Join for Free</a>
                     <a href="/about" class="link-btn">
                        Learn More
                        <i class="far fa-arrow-right"></i>
                        <i class="far fa-arrow-right"></i>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import InfoItem from "../InfoItems/InfoItem.vue";
</script>
