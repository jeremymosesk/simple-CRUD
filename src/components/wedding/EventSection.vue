<script setup lang="ts">
import { weddingData } from '../../data/wedding';
</script>

<template>
  <section class="section" id="event">
    <h2>Detail Acara</h2>
    <p class="venue">{{ weddingData.venue }} • {{ weddingData.city }}</p>

    <div class="event-grid">
      <article v-for="detail in weddingData.eventDetails" :key="detail.label">
        <p class="label">{{ detail.label }}</p>
        <p class="value">{{ detail.value }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 2rem 1rem 0.7rem;
}

h2 {
  color: #f7e2c4;
  text-align: center;
  margin-bottom: 0.3rem;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.venue {
  text-align: center;
  color: #d4b689;
  margin-bottom: 1.1rem;
}

.event-grid {
  max-width: 820px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.7rem;
}

article {
  background: rgba(89, 51, 30, 0.68);
  border-radius: 12px;
  border: 1px solid rgba(227, 196, 153, 0.22);
  padding: 0.9rem;
}

.label {
  color: #d7b07c;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.value {
  color: #f4e2c3;
  margin-top: 0.3rem;
}

@media (max-width: 720px) {
  .event-grid {
    grid-template-columns: 1fr;
  }
}
</style>
