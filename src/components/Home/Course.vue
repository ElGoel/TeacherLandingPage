<template>
   <section id="course" class="course__area pt-115 pb-120">
      <div class="container">
         <div>
            <div class="section__title-wrapper mb-60">
               <h2 class="section__title text-center m-4">Our Popular Courses
               </h2>
               <p class="text-center">Discover some of the many benefits you will enjoy when you
                  <br> add us to your online learning platform
               </p>
            </div>
         </div>
         <div class="row grid tab-content">

            <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
               <CourseItems :itemNumberStart='0' :itemNumberEnd="6" />
            </div>

            <div className="tab-pane fade" id="nav-trending" role="tabpanel" aria-labelledby="nav-trending">
               <CourseItems :itemNumberStart='1' :itemNumberEnd="5" />
            </div>

            <div className="tab-pane fade" id="nav-popularity" role="tabpanel" aria-labelledby="nav-popularity">
               <CourseItems :itemNumberStart='2' :itemNumberEnd="5" />
            </div>

            <div className="tab-pane fade" id="nav-featured" role="tabpanel" aria-labelledby="nav-featured">
               <CourseItems :itemNumberStart='4' :itemNumberEnd="6" />
            </div>

            <div className="tab-pane fade" id="nav-art-design" role="tabpanel" aria-labelledby="nav-art-design">
               <CourseItems :itemNumberStart='3' :itemNumberEnd="6" />
            </div>

         </div>
      </div>
   </section>
</template>

<script>
import CourseItems from '../courseItems/CoursesItems.vue';

export default {
   name: 'homeCourse',
   components: { CourseItems }
};
</script>
