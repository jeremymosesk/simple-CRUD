<script setup lang="ts">
import { weddingData } from '../../data/wedding';
</script>

<template>
  <section class="section" id="story">
    <h2>Perjalanan Cinta Kami</h2>
    <ol class="timeline">
      <li v-for="item in weddingData.story" :key="item.year + item.title">
        <p class="year">{{ item.year }}</p>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.section {
  padding: 2rem 1rem 0.5rem;
}

h2 {
  text-align: center;
  color: #f4dfbf;
  margin-bottom: 1.2rem;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.timeline {
  display: grid;
  gap: 0.8rem;
  max-width: 820px;
  margin: 0 auto;
}

li {
  list-style: none;
  background: rgba(100, 59, 35, 0.5);
  border: 1px solid rgba(230, 199, 154, 0.2);
  border-radius: 12px;
  padding: 1rem;
  transition: transform 180ms ease, border-color 180ms ease;
}

li:hover {
  transform: translateY(-2px);
  border-color: rgba(230, 199, 154, 0.42);
}

.year {
  color: #d8b17a;
  font-size: 0.82rem;
  margin-bottom: 0.3rem;
}

h3 {
  color: #f6e6ce;
  margin-bottom: 0.35rem;
}

p {
  color: #e9d5b6;
  line-height: 1.65;
}
</style>
