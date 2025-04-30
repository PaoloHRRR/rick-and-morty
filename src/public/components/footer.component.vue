<script>
export default {
  name: "footer-content"
}
</script>

<template>
  <footer class="footer-container">
    <div class="footer-section">
      <p>Copyright &copy; 2024 Rick and Morty. All rights reserved.</p>
    </div>
    <div class="footer-section">
      <p>
        {{ $t('footer.author') }} Henry Reaño
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-container {
  /**/
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  /**/
  background-color: #34d399;
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 0.95rem;
}

.footer-section {
  margin-bottom: 0.5rem;
  width: 100%;
}

@media (min-width: 768px) {
  .footer-container {
    justify-content: space-between;
    align-items: center;
  }

  .footer-section {
    width: auto;
    margin-bottom: 0;
  }
}

</style>