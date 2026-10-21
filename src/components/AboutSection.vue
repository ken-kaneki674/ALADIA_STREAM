<template>
  <section id="apropos" class="py-20 sm:py-16 bg-light overflow-hidden">
    <div class="w-[90%] max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Image Content -->
        <div class="relative" v-reveal="'left'">
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl z-0 animate-float-slow"></div>
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl z-0 animate-float-slow [animation-delay:-3s]"></div>
          
          <div class="relative z-10 rounded-2xl overflow-hidden shadow-premium transform rotate-2 hover:rotate-0 transition-transform duration-500 group">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Équipe professionnelle Aladia Stream travaillant ensemble" 
              class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-6 left-6 text-white transition-transform duration-500 group-hover:-translate-y-1">
              <p class="font-bold text-lg">Excellence & Innovation</p>
              <p class="text-sm opacity-90">Au service de votre réussite</p>
            </div>
          </div>

          <!-- Badge flottant -->
          <div class="absolute -bottom-6 right-6 sm:-right-6 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 animate-floating">
            <div class="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center">
              <i class="fas fa-award"></i>
            </div>
            <div>
              <p class="font-montserrat font-bold text-dark leading-none">100%</p>
              <p class="text-xs text-dark-lighter">Clients satisfaits</p>
            </div>
          </div>
        </div>

        <!-- Text Content -->
        <div v-reveal="{ type: 'right', delay: 150 }">
          <h2 class="font-montserrat font-bold text-4xl leading-tight mb-6 text-dark relative inline-block">
            À propos d'Aladia Stream
            <span class="block w-20 h-1.5 bg-primary mt-2 rounded-full"></span>
          </h2>
          
          <h3 class="font-montserrat font-bold text-2xl leading-tight mb-6 text-dark-light">
            Une solution unique pour tous vos besoins
          </h3>
          
          <p class="text-dark-lighter mb-6 leading-relaxed text-lg">
            Aladia Stream est plus qu'un simple prestataire : nous sommes votre partenaire multiservices dédié. 
            Nous combinons expertise professionnelle et innovation pour simplifier votre quotidien et propulser vos projets.
          </p>

          <!-- Compteurs animés -->
          <div class="grid grid-cols-3 gap-4 my-8" v-stagger="'zoom'">
            <div v-for="stat in stats" :key="stat.label" class="text-center p-4 rounded-xl bg-white shadow-sm">
              <p class="font-montserrat font-bold text-3xl text-primary">
                <CountUp :end="stat.value" :prefix="stat.prefix" :suffix="stat.suffix" />
              </p>
              <p class="text-xs sm:text-sm text-dark-lighter mt-1">{{ stat.label }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6" v-stagger>
            <div v-for="value in values" :key="value.title"
                 class="group flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <i :class="['fas', value.icon, 'text-lg group-hover:animate-wiggle']"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold mb-1 text-dark">{{ value.title }}</h4>
                <p class="text-sm text-dark-lighter">{{ value.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CountUp from './CountUp.vue';
import { services } from '../data/services';

const stats = [
  { value: services.length, prefix: '', suffix: '', label: 'Services' },
  { value: 500, prefix: '+', suffix: '', label: 'Clients servis' },
  { value: 6, prefix: '', suffix: 'j/7', label: 'Ouvert' }
];

const values = [
  { icon: 'fa-layer-group', title: 'Polyvalence', text: 'Une gamme complète de services' },
  { icon: 'fa-users', title: 'Expertise', text: 'Équipe qualifiée et dédiée' },
  { icon: 'fa-bolt', title: 'Rapidité', text: 'Service efficace et ponctuel' },
  { icon: 'fa-heart', title: 'Qualité', text: 'Satisfaction client garantie' }
];
</script>
