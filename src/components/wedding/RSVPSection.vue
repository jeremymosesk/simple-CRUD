<script setup lang="ts">
import { weddingData } from '../../data/wedding';
</script>

<template>
  <section class="section" id="rsvp">
    <h2>RSVP & Ucapan</h2>
    <p>Konfirmasi kehadiran dan kirim doa terbaik untuk {{ weddingData.couple.display }}.</p>
    <div class="actions">
      <a href="mailto:wedding@jeremy-sylvania.com?subject=RSVP%20Wedding%20Jeremy%20%26%20Sylvania">Konfirmasi Kehadiran</a>
      <a href="https://wa.me/6200000000000" target="_blank" rel="noreferrer">Kirim Ucapan</a>
    </div>
  </section>
</template>

<style scoped>
.section {
  text-align: center;
  padding: 2rem 1rem;
}

h2 {
  color: #f8e5c5;
  margin-bottom: 0.45rem;
  font-family: 'Georgia', 'Times New Roman', serif;
}

p {
  color: #e0c198;
  margin-bottom: 1rem;
}

.actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.65rem;
}

a {
  text-decoration: none;
  color: #2e190f;
  background: linear-gradient(130deg, #d9b37f, #c79856);
  padding: 0.75rem 1rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 160ms ease;
}

a:hover {
  transform: translateY(-2px);
}
</style>
