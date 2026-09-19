<script setup lang="ts">
import { ref, watch } from 'vue';
import { weddingData } from '../../data/wedding';

const volume = ref(0.6);
const usingYoutube = ref(true);
const playLocal = ref(false);
const localAudio = ref<HTMLAudioElement | null>(null);

watch(volume, (value) => {
  if (localAudio.value) {
    localAudio.value.volume = value;
  }
});

function toggleLocalAudio() {
  if (!localAudio.value) return;

  if (playLocal.value) {
    localAudio.value.pause();
    playLocal.value = false;
    return;
  }

  void localAudio.value.play();
  playLocal.value = true;
}
</script>

<template>
  <section class="music" id="music">
    <h2>Romantic Music</h2>
    <p>Tap untuk memulai musik. Jika embed diblokir browser, gunakan fallback audio lokal.</p>

    <div class="toggle-row">
      <button type="button" @click="usingYoutube = true" :class="{ active: usingYoutube }">YouTube Embed</button>
      <button type="button" @click="usingYoutube = false" :class="{ active: !usingYoutube }">Audio Fallback</button>
    </div>

    <div v-if="usingYoutube" class="player-shell">
      <iframe
        :src="`https://www.youtube.com/embed/${weddingData.youtube.videoId}?enablejsapi=1&rel=0&autoplay=0`"
        title="Wedding music playlist"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div v-else class="fallback-player">
      <audio ref="localAudio" :src="weddingData.localAudio.src" preload="none" @ended="playLocal = false"></audio>
      <div class="controls">
        <button type="button" @click="toggleLocalAudio">{{ playLocal ? 'Pause' : 'Play' }} Audio</button>
        <label>
          Volume
          <input v-model.number="volume" type="range" min="0" max="1" step="0.05" />
        </label>
      </div>
      <small>{{ weddingData.localAudio.title }} (ganti file di /public/assets/audio)</small>
    </div>
  </section>
</template>

<style scoped>
.music {
  padding: 2rem 1rem 0.7rem;
  text-align: center;
}

h2 {
  color: #f8e4c4;
  margin-bottom: 0.35rem;
  font-family: 'Georgia', 'Times New Roman', serif;
}

p {
  color: #d8b88d;
  margin-bottom: 0.8rem;
}

.toggle-row {
  display: flex;
  gap: 0.55rem;
  justify-content: center;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
}

button {
  border: 1px solid rgba(232, 200, 154, 0.33);
  border-radius: 999px;
  background: rgba(117, 71, 43, 0.5);
  color: #f3dec0;
  padding: 0.5rem 0.9rem;
  cursor: pointer;
}

button.active {
  background: linear-gradient(130deg, #d7b27f, #be8d51);
  color: #2c190f;
  border-color: transparent;
}

.player-shell {
  max-width: 720px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(230, 194, 145, 0.2);
}

iframe {
  width: 100%;
  height: 320px;
  border: 0;
}

.fallback-player {
  max-width: 640px;
  margin: 0 auto;
  background: rgba(83, 49, 30, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(230, 194, 145, 0.2);
  padding: 1rem;
}

.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

label {
  color: #efdbbc;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

input[type='range'] {
  accent-color: #d6ae77;
}

small {
  display: block;
  color: #d6b68a;
  margin-top: 0.65rem;
}

@media (max-width: 640px) {
  iframe {
    height: 240px;
  }
}
</style>
