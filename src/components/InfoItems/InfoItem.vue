<template>
    <div v-for="(item, index) in items" :key="index" class="why__content-item">
        <div @click="showItem(index)" class="why__content-title d-flex align-items-center justify-content-end gap-2">
            <h4>{{ item.title }}</h4>
            <i class="fas" :class="isItemShow === index ? 'fa-minus' : 'fa-plus'"></i>
        </div>
        <div v-show="isItemShow === index">
            <hr>
            <p>{{ item.content }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        title: 'My Background', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, reiciendis itaque quasi tempora, voluptates laudantium voluptate aliquid quis a maxime facilis ipsa necessitatibus sunt recusandae est dolores, delectus possimus consectetur.'
    },
    {
        title: 'Why this website', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, reiciendis itaque quasi tempora, voluptates laudantium voluptate aliquid quis a maxime facilis ipsa necessitatibus sunt recusandae est dolores, delectus possimus consectetur.'
    },
    {
        title: 'Why learning English', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, reiciendis itaque quasi tempora, voluptates laudantium voluptate aliquid quis a maxime facilis ipsa necessitatibus sunt recusandae est dolores, delectus possimus consectetur.'
    }
])

const isItemShow = ref(null);

const showItem = (index) => {
    isItemShow.value = isItemShow.value === index ? null : index;
};

</script>