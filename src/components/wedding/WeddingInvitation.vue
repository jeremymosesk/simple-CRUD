<script setup lang="ts">
import HeroSection from './HeroSection.vue';
import CountdownSection from './CountdownSection.vue';
import StorySection from './StorySection.vue';
import GallerySection from './GallerySection.vue';
import EventSection from './EventSection.vue';
import RSVPSection from './RSVPSection.vue';
import FooterSection from './FooterSection.vue';
import MusicPlayer from './MusicPlayer.vue';
import InteractiveScene from './scene/InteractiveScene.vue';
</script>

<template>
  <div class="wedding-page">
    <div class="glow glow-a"></div>
    <div class="glow glow-b"></div>

    <nav class="nav">
      <a href="#home">Home</a>
      <a href="#countdown">Countdown</a>
      <a href="#story">Story</a>
      <a href="#gallery">Gallery</a>
      <a href="#event">Event</a>
      <a href="#rsvp">RSVP</a>
    </nav>

    <HeroSection />
    <CountdownSection />
    <StorySection />
    <InteractiveScene />
    <GallerySection />
    <EventSection />
    <MusicPlayer />
    <RSVPSection />
    <FooterSection />
  </div>
</template>

<style scoped>
.wedding-page {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid rgba(233, 200, 157, 0.2);
  background: linear-gradient(180deg, #2f1a11 0%, #1d100a 100%);
  box-shadow: 0 26px 52px rgba(9, 4, 2, 0.48);
}

.nav {
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.8rem;
  background: rgba(33, 17, 10, 0.72);
  border-bottom: 1px solid rgba(232, 198, 149, 0.15);
  backdrop-filter: blur(7px);
}

.nav a {
  text-decoration: none;
  color: #efd9b6;
  font-size: 0.86rem;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: border-color 160ms ease, color 160ms ease;
}

.nav a:hover {
  border-color: rgba(238, 207, 166, 0.4);
  color: #fff2dd;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(2px);
  pointer-events: none;
}

.glow-a {
  width: 280px;
  height: 280px;
  top: -90px;
  left: -80px;
  background: radial-gradient(circle, rgba(198, 136, 70, 0.25) 0%, rgba(31, 18, 11, 0) 72%);
}

.glow-b {
  width: 300px;
  height: 300px;
  right: -100px;
  bottom: 14%;
  background: radial-gradient(circle, rgba(169, 115, 56, 0.19) 0%, rgba(31, 18, 11, 0) 72%);
}
</style>
