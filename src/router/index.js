import { createWebHistory,createRouter } from "vue-router";
import Home from '../pages/Home.vue';
import Courses from '../pages/Courses.vue';
import CoursesList from '../pages/CoursesList.vue';
import CourseSidebar from '../pages/CourseSidebar.vue';
import CourseDetails from '../pages/CourseDetails.vue';
import Blog from '../pages/Blog.vue';
import BlogDetails from '../pages/BlogDetails.vue';
import Checkout from '../pages/Checkout.vue';
import ErrorPage from '../pages/ErrorPage.vue';
import Contact from '../pages/Contact.vue';
import CourseDetailsPage from '../pages/DynamicCourseDetails.vue';
import DynamicBlogDetails from '../pages/DynamicBlogDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name: 'Home',
            component:Home,
        },
        {
            path:'/courses',
            name: 'Courses',
            component:Courses,
        },
        {
            path:'/courses-list',
            name: 'CoursesList',
            component:CoursesList,
        },
        {
            path:'/courses-sidebar',
            name: 'CoursesSidebar',
            component:CourseSidebar,
        },
        {
            path:'/course-details',
            name: 'CourseDetails',
            component:CourseDetails,
        },
        {
            path:'/blog',
            name: 'Blog',
            component:Blog,
        },
        {
            path:'/blog-details',
            name: 'BlogDetails',
            component:BlogDetails,
        },
        {
            path:'/checkout',
            name: 'Checkout',
            component:Checkout,
        },
        {
            path:'/errorPage',
            name: 'ErrorPage',
            component:ErrorPage,
        },
        {
            path:'/contact',
            name: 'Contact',
            component:Contact,
        },
        {
            path:'/course-details/:id',
            name: 'CourseId',
            component:CourseDetailsPage,
        },
        {
            path:'/blog-details/:id',
            name: 'blogId',
            component:DynamicBlogDetails,
        },
    ]
})

router.beforeEach((to, from, next) => {
    if(!router.hasRoute(to.name)) {
        next({ name: 'ErrorPage' });
    } else {
        next();
        window.scrollTo(0, 0)
    }
});

export default router