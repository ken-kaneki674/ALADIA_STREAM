<template>
  <section id="portfolio" class="py-20 sm:py-16 bg-white overflow-hidden">
    <div class="w-[90%] max-w-[1200px] mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div class="md:max-w-xl">
          <h2 class="font-montserrat font-bold text-4xl leading-tight mb-4 text-dark relative inline-block">
            Nos Domaines d'Activité
            <span class="block w-20 h-1.5 bg-primary mt-2 rounded-full"></span>
          </h2>
          <p class="text-dark-lighter">
            Découvrez en images la diversité et la qualité de nos réalisations et services.
          </p>
        </div>
        
        <!-- Navigation Buttons (Desktop) -->
        <div class="hidden md:flex gap-3">
          <button @click="prevSlide" :disabled="currentIndex === 0"
            class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-dark">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button @click="nextSlide" :disabled="currentIndex >= maxIndex"
            class="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-dark hover:bg-primary hover:text-white hover:border-transparent transition-all duration-300 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-dark">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      <!-- Carousel Container -->
      <div class="relative">
        <!-- Buttons (Mobile) -->
        <button @click="prevSlide" :disabled="currentIndex === 0"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white/80 backdrop-blur-sm text-dark w-10 h-10 rounded-full shadow-lg flex items-center justify-center md:hidden disabled:opacity-0 transition-all">
          <i class="fas fa-chevron-left"></i>
        </button>

        <button @click="nextSlide" :disabled="currentIndex >= maxIndex"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white/80 backdrop-blur-sm text-dark w-10 h-10 rounded-full shadow-lg flex items-center justify-center md:hidden disabled:opacity-0 transition-all">
          <i class="fas fa-chevron-right"></i>
        </button>

        <!-- Slides -->
        <div class="overflow-hidden py-4 -mx-4 px-4" 
             @touchstart="handleTouchStart" 
             @touchend="handleTouchEnd">
          <div class="flex gap-8 transition-transform duration-500 ease-out will-change-transform"
            :style="{ transform: `translateX(${-currentIndex * itemWidth}px)` }">
            
            <div v-for="(item, index) in portfolioItems" :key="index"
              class="flex-shrink-0 w-[350px] md:w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer">
              <!-- Image -->
              <img :src="item.image" :alt="item.alt"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy">
              
              <!-- Gradient Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              <!-- Content -->
              <div class="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div class="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-md flex items-center justify-center text-white mb-4 transform -translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  <i :class="['fas', item.icon]"></i>
                </div>
                
                <h3 class="font-montserrat font-bold text-white text-xl leading-tight mb-2">
                  {{ item.title }}
                </h3>
                
                <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 line-clamp-3">
                  {{ item.desc }}
                </p>
                
                <div class="h-1 w-0 bg-primary mt-4 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center gap-3 mt-8">
          <button v-for="(_, index) in Math.ceil(portfolioItems.length / itemsPerView)" :key="index"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="index === Math.floor(currentIndex / itemsPerView) ? 'bg-primary w-8' : 'bg-gray-200 w-2 hover:bg-gray-300'"
            @click="goToSlide(index * itemsPerView)" 
            :aria-label="`Aller à la slide ${index + 1}`">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const portfolioItems = [
  {
    image: '/IMG/Découvrez le projet réalisé pour la société….jpg',
    alt: 'Services bureautiques et administratifs',
    icon: 'fa-file-alt',
    title: 'Services Administratifs',
    desc: 'Traitement professionnel, numérisation haute définition et impressions de documents. Gestion complète de vos démarches administratives et saisie de données sécurisée.'
  },
  {
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Photographie et graphisme',
    icon: 'fa-camera',
    title: 'Studio Créatif',
    desc: "Shooting photo professionnel, photos d'identité normes officielles. Création graphique sur mesure pour votre communication visuelle (logos, flyers, affiches)."
  },
  {
    image: '/IMG/From KlickPin CF Home & Lifestyle _ Cool tech gifts Phone accessories shop Mobile accessories shop.jpg',
    alt: 'Vente de produits',
    icon: 'fa-shopping-bag',
    title: 'Boutique High-Tech',
    desc: 'Une sélection premium d\'accessoires informatiques et gadgets électroniques. Équipements durables pour la maison et le bureau.'
  },
  {
    image: '/IMG/From KlickPin CF Les Dangers Méconnus des Cosmétiques Périmés  Protégez Votre Peau et Votre Santé en 2025 _ Cosmetique Peau Ombre à paupières.jpg',
    alt: 'Produits cosmétiques',
    icon: 'fa-spa',
    title: 'Espace Beauté',
    desc: 'Produits cosmétiques authentiques et sûrs. Maquillage de grandes marques, soins du visage et du corps, parfumerie fine.'
  },
  {
    image: '/IMG/From KlickPin CF Tout pour lHomme la Femme et lEnfantdu Bébé a lAdulte chez (wwwfacebookcom_GRAINEDEMARIN) _ Vetements marins Vetements Enfant.jpg',
    alt: 'Vente de vêtements',
    icon: 'fa-tshirt',
    title: 'Mode & Style',
    desc: 'Collections tendances pour hommes, femmes et enfants. Service de retouches express et confection sur mesure par nos couturiers experts.'
  }
];

const currentIndex = ref(0);
const windowWidth = ref(window.innerWidth);

// Determine item width based on screen size (must match CSS w-[350px] or md:w-[300px] + gap)
// Gap is 32px (gap-8)
const itemWidth = computed(() => {
  return windowWidth.value >= 768 ? 332 : 382; // 300+32 or 350+32
});

const itemsPerView = computed(() => {
  // Adjust calculation based on container width typically available
  const containerWidth = Math.min(windowWidth.value * 0.9, 1200);
  return Math.floor(containerWidth / itemWidth.value) || 1;
});

const maxIndex = computed(() => {
  return Math.max(0, portfolioItems.length - 1); // Allow scrolling one by one for smoother feel
});

function nextSlide() {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
}

function prevSlide() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

function goToSlide(index) {
  currentIndex.value = Math.min(index, maxIndex.value);
}

// Touch handling
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX;
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 50) nextSlide();
  if (touchEndX - touchStartX > 50) prevSlide();
}

// Resize handling
function handleResize() {
  windowWidth.value = window.innerWidth;
  // Optional: Adjust index if out of bounds after resize
  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value;
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
