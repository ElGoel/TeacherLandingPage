<template>
   <div class="container">
      <div class="row justify-content-center">
         <div v-for="(course, index) in courseItems.slice(itemNumberStart, itemNumberEnd)" :key="index"
            class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 grid-item">
            <div class="course__item rotating-border-card rotating-border rotating-border--card">
               <div class="course__thumb w-img p-relative fix">
                  <a :href="`/course-details/${course.id}`">
                     <img :src="course.courseImage" alt="">
                  </a>
                  <!-- <div class="course__tag">
                     <a href="#" :class="course.color">{{course.category}}</a>
                  </div> -->
               </div>
               <div class="course__content">
                  <div class="course__meta d-flex align-items-center justify-content-between">
                     <div class="course__lesson">
                        <span><i class="far fa-book-alt"></i>{{ course.lesson }} Lesson</span>
                     </div>
                     <div class="course__rating">
                        <span><i class="fas fa-chalkboard "></i>{{ course.modules }}</span>
                     </div>
                  </div>
                  <h3 class="course__title">
                     <a :href="`/course-details/${course.id}`">{{ course.title }}</a>
                  </h3>
               </div>
               <div class="course__more d-flex justify-content-between">
                  <div class="course__btn">
                     <a href="/#" class="link-btn">
                        <img src="@/assets/img/icon/about/playButton.svg" alt="" />
                        <img src="@/assets/img/icon/about/playButton.svg" alt="" />
                        Details
                     </a>
                  </div>
                  <div class="course__status d-flex gap-1">
                     <p>
                        Online Class
                     </p>
                     <img src="@/assets/img/icon/about/camera.svg" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import CourseItemsMixin from '../../mixins/courseItemsMixin';

export default {
   name: 'CoursesAllItems',
   mixins: [CourseItemsMixin],
   props: {
      itemNumberStart: Number,
      itemNumberEnd: Number,
   }

};
</script>
