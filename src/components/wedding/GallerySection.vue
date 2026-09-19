<script setup lang="ts">
import { weddingData } from '../../data/wedding';
</script>

<template>
  <section class="section" id="gallery">
    <h2>Galeri Momen</h2>
    <p class="caption">Placeholder galeri — aset final bisa langsung mengganti file di folder public/assets/images.</p>
    <div class="gallery-grid">
      <figure v-for="item in weddingData.gallery" :key="item.src">
        <img :src="item.src" :alt="item.alt" loading="lazy" />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 2rem 1rem 0.7rem;
}

h2 {
  color: #f6e2c0;
  text-align: center;
  margin-bottom: 0.35rem;
  font-family: 'Georgia', 'Times New Roman', serif;
}

.caption {
  text-align: center;
  color: #d2b389;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
  max-width: 920px;
  margin: 0 auto;
}

figure {
  margin: 0;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(231, 209, 173, 0.2);
  background: rgba(70, 40, 24, 0.68);
}

img {
  width: 100%;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transform: scale(1.001);
  transition: transform 220ms ease;
}

figure:hover img {
  transform: scale(1.05);
}

@media (max-width: 760px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
}
</style>
