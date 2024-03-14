<template>
    <section id="blog" class="blog__area pt-115 pb-130">
        <div class="container blog__area-container">
            <div class="row">
                <div class="col-xxl-6 offset-xxl-3">
                    <div class="section__title-wrapper text-center mb-60">
                        <h2 class="section__title text-center">My Blog</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur aut repellat quidem</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="blog in blogData" :key="blog.id" class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                    <div class="blog__item white-bg mb-30 transition-3 fix">
                        <div class="blog__thumb w-img fix">
                            <a href="#">
                                <img :src="blog.blogImg" alt="">
                            </a>
                        </div>
                        <div class="blog__content">
                            <div class="blog__tag">
                                <a href="#" :class="`${blog.color && blog.color}`">{{ blog.category }}</a>
                            </div>
                            <h3 class="blog__title">
                                <a href="#">
                                    {{ blog.title }}</a>
                            </h3>

                            <div class="blog__meta d-flex align-items-center justify-content-between">
                                <div class="blog__author d-flex align-items-center">
                                    <div class="blog__author-thumb mr-10">
                                        <img :src="blog.author" alt="">
                                    </div>
                                    <div class="blog__author-info">
                                        <h5>{{ blog.authorName }}</h5>
                                    </div>
                                </div>
                                <div class="blog__date d-flex align-items-center">
                                    <i class="fal fa-clock"></i>
                                    <span>{{ blog.date }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogArea',
    data() {
        return {
            blogData: [
                {
                    id: 1,
                    blogImg: require(`@/assets/img/blog/blog-1.jpg`),
                    title: 'The Challenge Of Global Learning In Public Education',
                    author: require(`@/assets/img/blog/author/author-1.jpg`),
                    authorName: 'Jim Séchen',
                    date: 'April 02, 2022',
                    category: 'Art & Design'
                },
                {
                    id: 2,
                    blogImg: require(`@/assets/img/blog/blog-2.jpg`),
                    title: 'Exactly How Technology Can Make Reading Better',
                    author: require(`@/assets/img/blog/author/author-2.jpg`),
                    authorName: 'Barry Tone',
                    date: 'July 02, 2022',
                    category: 'Marketing',
                    color: 'purple'
                },
                {
                    id: 3,
                    blogImg: require(`@/assets/img/blog/blog-3.jpg`),
                    title: 'New Chicago school budget relies on state pension',
                    author: require(`@/assets/img/blog/author/author-3.jpg`),
                    authorName: 'Jim Séchen',
                    date: 'March 05, 2022',
                    category: 'UX Design',
                    color: 'pink'
                },
            ]
        }
    }
};
</script>
