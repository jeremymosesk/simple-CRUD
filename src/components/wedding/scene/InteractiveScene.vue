<template>
  <section class="scene-section" id="scene-3d">
    <h2>3D Interactive Preview</h2>
    <p>Gunakan drag untuk memutar, scroll untuk zoom, dan geser untuk melihat sudut lainnya.</p>

    <model-viewer
      class="scene"
      src="/assets/3d/wedding-rings.glb"
      poster="/assets/images/gallery-1.svg"
      alt="Preview cincin pernikahan 3D"
      camera-controls
      auto-rotate
      rotation-per-second="20deg"
      shadow-intensity="1"
      exposure="1"
      ar
      touch-action="pan-y"
    ></model-viewer>
  </section>
</template>

<style scoped>
.scene-section {
  padding: 2rem 1rem 0.7rem;
  text-align: center;
}

h2 {
  color: #f5e2c0;
  margin-bottom: 0.45rem;
  font-family: 'Georgia', 'Times New Roman', serif;
}

p {
  color: #d9ba8f;
  margin-bottom: 0.8rem;
}

.scene {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  height: 420px;
  border-radius: 14px;
  background: radial-gradient(circle at center, rgba(130, 82, 48, 0.4) 0%, rgba(44, 25, 14, 0.9) 72%);
  border: 1px solid rgba(232, 201, 157, 0.22);
}

@media (max-width: 640px) {
  .scene {
    height: 320px;
  }
}
</style>
