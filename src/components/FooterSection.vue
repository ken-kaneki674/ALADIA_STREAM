<template>
  <footer class="bg-[#050505] text-gray-400 py-16 pb-8 border-t border-white/5">
    <div class="w-[90%] max-w-[1200px] mx-auto px-4">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand Column -->
        <div class="space-y-6">
          <a href="#" class="block group">
            <span class="text-3xl font-bold font-montserrat text-white group-hover:text-primary transition-colors duration-300">
              Aladia <span class="text-secondary group-hover:text-white transition-colors duration-300">Stream</span>
            </span>
          </a>
          <p class="text-sm leading-relaxed text-gray-500">
            Centre multiservices offrant des solutions complètes pour vos besoins quotidiens et
            professionnels. Qualité, rapidité et satisfaction garanties.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1" aria-label="Facebook">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://wa.me/qr/5SKL4W3B3M5EK1" target="_blank" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1" aria-label="WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1" aria-label="Email">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <!-- Links Column 1 -->
        <div>
          <h4 class="text-white font-bold font-montserrat text-lg mb-6">Nos Services</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#services" class="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Traitement Bureautique</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Graphisme & Photographie</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Vente de produits</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Restauration rapide</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Services Financiers</a></li>
          </ul>
        </div>

        <!-- Links Column 2 -->
        <div>
          <h4 class="text-white font-bold font-montserrat text-lg mb-6">Liens rapides</h4>
          <ul class="space-y-3 text-sm">
            <li><a href="#accueil" class="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Accueil</a></li>
            <li><a href="#apropos" class="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">À propos</a></li>
            <li><a href="#services" class="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Services</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">Contact</a></li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div>
          <h4 class="text-white font-bold font-montserrat text-lg mb-6">Coordonnées</h4>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <i class="fas fa-map-marker-alt text-primary mt-1"></i>
              <span>En face de COURS SONOU CABOMA</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="fab fa-whatsapp text-primary"></i>
              <a href="https://wa.me/2290143841045" target="_blank" class="text-white font-medium hover:text-primary text-gray-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1">
                +229 01 4384 1045
              </a>
            </li>
            <li class="flex items-start gap-3">
              <i class="fas fa-clock text-primary mt-1"></i>
              <div>
                <p>Lun - Sam: 8h - 19h</p>
                <p>Dimanche: 9h - 15h</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-white/10 pt-8 text-center text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {{ currentYear }} Aladia Stream. Tous droits réservés.</p>
        <p>Conçu avec <i class="fas fa-heart text-red-500 animate-pulse"></i> par Aladia Stream</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>
