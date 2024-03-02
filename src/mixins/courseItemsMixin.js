export default {
    data() {
        return {
           courseItems:  [
               {
                   id: 1,
                   courseImage: require(`@/assets/img/course/course-1.jpg`),
                   listImg:require(`@/assets/img/course/list/course_list_1.jpeg`),
                   lesson:'43',
                   title: 'Become a product Manager learn the skills & job.',
                   rating: '4.5',
                   teacherImg: require(`@/assets/img/course/teacher/teacher-1.jpg`),
                   teacherName: 'Jim Séchen',
                   category: 'Art & Design',
                   price:'21.00',
                   oldPrice:'33.00'
               },
               {
                   id: 2,
                   courseImage: require(`@/assets/img/course/course-2.jpg`),
                   listImg:require(`@/assets/img/course/list/course_list_2.jpeg`),
                   lesson:'72',
                   title: 'Fundamentals of music theory Learn new',
                   rating: '4.0',
                   teacherImg: require(`@/assets/img/course/teacher/teacher-2.jpg`),
                   teacherName: 'Barry Tone',
                   category: 'UX Design',
                   price:'32.00',
                   oldPrice:'68.00',
                   color:'sky-blue'
               },
           ]
        }
    }
}