<template>
    <section class="pt-120">
        <div class="container">
            <div class="contact__container contact__container-wrapper d-flex justify-content-center align-items-center">
                <div class="contact__widget contact__pl-70">
                    <div class="contact__widget-head mb-22">
                        <h3 class="section__title text-center">Subscribe</h3>
                        <p class="text-center">Get the latest news and updates right at your inbox</p>
                    </div>
                    <div class="contact__widget-body">
                        <div class="contact__subscribe">
                            <form @submit="handleSubmit" action="#">
                                <div class="contact__subscribe-input mb-15">
                                    <input type="email" v-model="email" placeholder="Your email address">
                                    <button type="submit" class="btn btn-submit">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const email = ref(null);

const handleSubmit = () => {
    console.log(email.value);
}

</script>
