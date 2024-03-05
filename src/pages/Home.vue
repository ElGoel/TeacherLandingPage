<template>
    <Header @handleMouseMove="handleMouseMove" />
    <div class="hero-container">
        <img src="../assets/img/hero/hero-2/heroBackground.png" alt="Imagen de Fondo" class="hero-background">
        <HeroArea @HandleMouseMove="handleMouseMove" />
        <div class="d-none d-md-block" style="width: 100%; height: 200px;"></div>
        <AboutArea />
        <CounterStats />
    </div>
    <Courses />
    <WhyArea />
    <Counter />
    <Blog />
    <div class="hero-container">
        <Testimonial />
        <img src="../assets/img/footer/backgroundFooter.png" alt="footer background image" class="footer__background">
        <Footer footerPadding="true" />
    </div>
</template>

<script setup>
import Header from '../components/Home/Header.vue';
import HeroArea from '../components/Home/HeroArea.vue';
// import Services from '../components/Home/Services.vue';
import AboutArea from '../components/common/AboutArea.vue';
import Courses from '../components/Home/Course.vue';
// import WhatArea from '../components/Home/WhatArea.vue';
import WhyArea from '../components/Home/WhyArea.vue';
import Testimonial from '../components/Home/Testimonial.vue';
import Blog from '../components/Home/Blog.vue';
import Footer from '../components/Home/Footer.vue';
import CounterStats from '@/components/Home/CounterStats.vue';

const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    event.target.style.setProperty('--x', x + 'px');
    event.target.style.setProperty('--y', y + 'px');
}
</script>