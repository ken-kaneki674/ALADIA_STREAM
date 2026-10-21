<template>
  <div class="pt-24 pb-16 min-h-screen bg-light">
    <!-- Hero Banner -->
    <div class="bg-primary/5 py-16 mb-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-blob"></div>
        <div class="container mx-auto px-4 relative z-10 text-center">
            <div class="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-primary text-4xl shadow-xl mb-6 opacity-0 animate-pop">
                <i class="fas fa-utensils animate-wiggle [animation-iteration-count:3] [animation-delay:600ms]"></i>
            </div>
            <h1 class="font-montserrat font-bold text-5xl text-dark mb-4 opacity-0 animate-fade-in-up [animation-delay:150ms]">{{ service.title }}</h1>
            <p class="text-dark-lighter max-w-2xl mx-auto text-xl leading-relaxed opacity-0 animate-fade-in-up [animation-delay:300ms]">{{ service.description }}</p>
        </div>
    </div>

    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Menu Navigation (Mobile Tabs) -->
      <div class="flex overflow-x-auto pb-4 mb-8 lg:hidden no-scrollbar">
        <button 
          v-for="category in service.categories" 
          :key="category.name"
          @click="selectCategory(category.name)"
          :class="['px-6 py-2 rounded-full mr-3 whitespace-nowrap font-bold transition-all duration-300 active:scale-95', 
                   activeCategory === category.name ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' : 'bg-white text-dark shadow-sm']"
        >
          {{ category.name }}
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Sidebar Navigation (Desktop) -->
        <div class="hidden lg:block lg:col-span-3 pb-8">
            <div class="sticky top-32 space-y-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 class="font-montserrat font-bold text-lg text-dark mb-4 px-2">Catégories</h3>
                <button 
                    v-for="category in service.categories" 
                    :key="category.name"
                    @click="selectCategory(category.name)"
                    :class="['w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center', 
                             activeCategory === category.name ? 'bg-primary text-white shadow-md translate-x-1' : 'text-dark-lighter hover:bg-primary/5 hover:text-primary hover:translate-x-1']"
                >
                    <span class="h-1.5 rounded-full mr-3 transition-all duration-300" :class="activeCategory === category.name ? 'bg-white w-4' : 'bg-primary/20 w-1.5'"></span>
                    {{ category.name }}
                </button>
            </div>
        </div>

        <!-- Menu Content -->
        <div class="lg:col-span-9">
          <TransitionGroup
            enter-active-class="transition duration-500 ease-out"
            enter-from-class="opacity-0 translate-y-6"
            leave-active-class="transition duration-200 ease-in absolute"
            leave-to-class="opacity-0 -translate-y-4">
            <div v-for="category in filteredCategories" :key="category.name" :id="slugify(category.name)" class="mb-16 scroll-mt-32">
                <div class="flex items-center mb-8 border-b border-gray-100 pb-4" v-reveal="'left'">
                    <h2 class="font-montserrat font-bold text-3xl text-dark">{{ category.name }}</h2>
                    <div class="ml-4 flex-grow h-px bg-gradient-to-r from-primary/20 to-transparent"></div>
                </div>

                <!-- Juice Grid with Benefits -->
                <div v-if="category.name === 'Bien-être & Jus Naturels'" class="grid grid-cols-1 md:grid-cols-2 gap-6" v-stagger>
                    <div v-for="item in category.items" :key="item.name" 
                         class="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div class="flex items-start">
                            <div class="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-2xl mb-4 mr-4 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                <i class="fas" :class="getJuiceIcon(item.name)"></i>
                            </div>
                            <div>
                                <h3 class="font-montserrat font-bold text-xl text-dark mb-2">{{ item.name }}</h3>
                                <p class="text-secondary font-medium text-sm flex items-center">
                                    <i class="fas fa-heartbeat mr-2"></i>
                                    {{ item.benefit }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Standard Item Grid -->
                <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" v-stagger>
                    <div v-for="item in category.items" :key="item.name" 
                         class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                        <h3 class="font-montserrat font-bold text-lg text-dark mb-2">{{ item.name }}</h3>
                        <p class="text-dark-lighter text-sm italic">{{ item.description }}</p>
                    </div>
                </div>
            </div>
          </TransitionGroup>
        </div>
      </div>

      <!-- About Section -->
      <div class="mt-16 bg-white p-10 rounded-3xl shadow-sm border border-gray-100" v-reveal="'blur'">
          <div class="max-w-3xl mx-auto text-center">
              <h2 class="font-montserrat font-bold text-2xl text-dark mb-6">Notre Engagement Qualité</h2>
              <p class="text-dark-lighter text-lg leading-relaxed mb-8">
                  {{ service.details }}
              </p>
              <div class="flex flex-wrap justify-center gap-6" v-stagger="'zoom'">
                  <div class="flex items-center text-dark-lighter">
                      <i class="fas fa-leaf text-secondary mr-2 text-xl"></i> 
                      <span class="font-medium">Produits Frais</span>
                  </div>
                  <div class="flex items-center text-dark-lighter">
                      <i class="fas fa-check-circle text-secondary mr-2 text-xl"></i> 
                      <span class="font-medium">Hygiène Garantie</span>
                  </div>
                  <div class="flex items-center text-dark-lighter">
                      <i class="fas fa-heart text-secondary mr-2 text-xl"></i> 
                      <span class="font-medium">Plaisir & Santé</span>
                  </div>
              </div>
          </div>
      </div>

      <!-- CTA -->
      <div class="mt-20 text-center" v-reveal="'zoom'">
          <div class="bg-primary p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div class="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 animate-blob"></div>
              <h3 class="font-montserrat font-bold text-3xl text-white mb-6 relative z-10">Une envie particulière ?</h3>
              <p class="text-white/80 max-w-xl mx-auto mb-10 text-lg relative z-10">Commandez maintenant et profitez de la fraîcheur ALADIA directement chez vous ou en boutique.</p>
              <router-link to="/#contact" v-ripple class="overflow-hidden inline-block bg-white text-primary font-bold py-4 px-12 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 relative z-10">
                  Contactez-nous
              </router-link>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { services } from '../data/services';

const service = services.find(s => s.id === 'restauration');
const activeCategory = ref(service.categories[0].name);

// Sur mobile on n'affiche que la catégorie choisie, sur desktop tout le menu
const isMobile = ref(window.innerWidth < 1024);
const handleResize = () => {
    isMobile.value = window.innerWidth < 1024;
};

onMounted(() => window.addEventListener('resize', handleResize));
onUnmounted(() => window.removeEventListener('resize', handleResize));

const filteredCategories = computed(() => {
    if (isMobile.value) {
        return service.categories.filter(c => c.name === activeCategory.value);
    }
    return service.categories;
});

const slugify = (name) => name.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, '-');

function selectCategory(name) {
    activeCategory.value = name;
    if (!isMobile.value) {
        document.getElementById(slugify(name))?.scrollIntoView({ behavior: 'smooth' });
    }
}

const getJuiceIcon = (name) => {
    const icons = {
        'Bissap': 'fa-tint',
        'Gingembre': 'fa-bolt',
        'Baobab': 'fa-tree',
        'Orange': 'fa-sun',
        'Pomme': 'fa-apple-alt',
        'Ananas': 'fa-leaf',
        'Raisin': 'fa-wine-glass-alt'
    };
    for (let key in icons) {
        if (name.includes(key)) return icons[key];
    }
    return 'fa-glass-whiskey';
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
