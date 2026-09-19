<script setup lang="ts">
import { weddingData } from '../../data/wedding';
</script>

<template>
  <section class="hero" id="home">
    <p class="eyebrow">The Wedding Of</p>
    <h1>{{ weddingData.couple.display }}</h1>
    <p class="date">{{ weddingData.date.display }}</p>
    <p class="quote">“{{ weddingData.quote }}”</p>
    <a class="cta" href="#event">Lihat Detail Acara</a>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 4.5rem 1rem 3.5rem;
  animation: fade-up 900ms ease both;
}

.eyebrow {
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #d7b98f;
  font-size: 0.75rem;
  margin-bottom: 1rem;
}

h1 {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(2.2rem, 5vw, 4rem);
  color: #f8ecd8;
  margin-bottom: 0.8rem;
}

.date {
  color: #e6cda7;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
}

.quote {
  max-width: 700px;
  margin: 0 auto 1.8rem;
  color: #f1dfc6;
  line-height: 1.75;
}

.cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  background: linear-gradient(130deg, #d1a469, #b28044);
  color: #2a160d;
  transition: transform 180ms ease, box-shadow 180ms ease;
}

.cta:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow: 0 12px 28px rgba(210, 164, 105, 0.32);
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
