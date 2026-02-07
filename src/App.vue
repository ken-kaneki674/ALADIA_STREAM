<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden">
    <NavBar />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-4"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <FooterSection />

    <!-- Scroll to Top Button -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-4"
    >
      <button 
        v-show="showScrollToTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full shadow-lg z-50 flex items-center justify-center hover:bg-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Retour en haut"
      >
        <i class="fas fa-arrow-up text-lg"></i>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';

// Scroll to top logic
const showScrollToTop = ref(false);

const handleScroll = () => {
  showScrollToTop.value = window.scrollY > 400;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Intersection Observer for scroll animations
const setupObserver = () => {
  const options = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, options);

  // Select all sections/components that need animation
  // Use a MutationObserver to handle dynamically added content (like via router)
  const observeElements = () => {
      const sections = document.querySelectorAll('section:not(.fade-in-section)');
      sections.forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
      });
  }

  // Initial observation
  observeElements();

  // Re-observe when route changes
  const mutationObserver = new MutationObserver(observeElements);
  mutationObserver.observe(document.body, { childList: true, subtree: true });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Small delay to ensure DOM is ready
  setTimeout(setupObserver, 100);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
