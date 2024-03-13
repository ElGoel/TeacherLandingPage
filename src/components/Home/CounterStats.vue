<template>
  <div class="hero">
    <div class="hero__stadistics d-flex justify-content-between">
      <div v-for="stat in stats" :key="stat.name"
        :class="`hero__cart${stat.class}`" class="hero__cart education flex-column d-flex gap-3 white-bg layer" data-depth="0.2">
        <div class="hero__cart-icon">
          <span class="cap">
            <img :src="stat.icon" alt="">
          </span>
        </div>
        <div class="hero__cart-text">
          <h5 :style="{ color: stat.color }"><span class="counter">{{ stat.count }}</span></h5>
          <p>{{ stat.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StatsMixin from '@/mixins/statsMixin';
import { onMounted, ref } from 'vue';

const stats = ref(StatsMixin.data().stats);

onMounted(() => {
  stats.value.forEach((stat) => {
      const interval = setInterval(() => {
        if (stat.count < stat.amount) {
          stat.count++;
        } else {
          clearInterval(interval);
        }
      }, 150);
    });
})
</script>