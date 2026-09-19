<script setup lang="ts">
import { weddingData } from '../../data/wedding';
</script>

<template>
  <footer class="footer">
    <p>Terima kasih atas doa dan kehadiran Anda.</p>
    <strong>{{ weddingData.couple.display }} • {{ weddingData.date.display }}</strong>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding: 1.5rem 1rem 2rem;
  color: #cfae82;
}

strong {
  display: block;
  margin-top: 0.45rem;
  color: #f2ddbc;
  font-weight: 600;
}
</style>
