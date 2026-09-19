<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { weddingData } from '../../data/wedding';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const targetDate = new Date(weddingData.date.iso).getTime();
const now = ref(Date.now());
let timer: ReturnType<typeof setInterval> | null = null;

const countdown = computed<Countdown>(() => {
  const diff = Math.max(targetDate - now.value, 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
});

onMounted(() => {
  timer = setInterval(() => {
    now.value = Date.now();
  }, 1000);
});

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<template>
  <section class="section" id="countdown">
    <h2>Menuju Hari Bahagia</h2>
    <div class="timer-grid">
      <article>
        <strong>{{ countdown.days }}</strong>
        <span>Hari</span>
      </article>
      <article>
        <strong>{{ countdown.hours }}</strong>
        <span>Jam</span>
      </article>
      <article>
        <strong>{{ countdown.minutes }}</strong>
        <span>Menit</span>
      </article>
      <article>
        <strong>{{ countdown.seconds }}</strong>
        <span>Detik</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.section {
  text-align: center;
  padding: 1.5rem 1rem 0.5rem;
}

h2 {
  color: #f5e2c4;
  margin-bottom: 1rem;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.timer-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(70px, 1fr));
  gap: 0.7rem;
  max-width: 640px;
  margin: 0 auto;
}

article {
  background: rgba(88, 52, 33, 0.75);
  border: 1px solid rgba(231, 205, 166, 0.22);
  border-radius: 14px;
  padding: 0.95rem 0.6rem;
}

strong {
  display: block;
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #f9e8cd;
}

span {
  color: #d9bd96;
  font-size: 0.82rem;
}

@media (max-width: 640px) {
  .timer-grid {
    grid-template-columns: repeat(2, minmax(70px, 1fr));
  }
}
</style>
