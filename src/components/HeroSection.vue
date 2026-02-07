<template>
  <section id="accueil" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with Overlay -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0 bg-gradient-to-br from-dark/90 via-dark/70 to-primary/40 z-10"></div>
      <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
           alt="Bureau background" 
           class="w-full h-full object-cover animate-pulse-slow scale-105"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10 container mx-auto px-4 text-center text-white">
      <div class="animate-fade-in-up">
        <h2 class="text-secondary-dark font-bold tracking-wider uppercase mb-4 text-sm md:text-base">
          Bienvenue chez Aladia Stream
        </h2>
        
        <h1 class="font-montserrat font-bold text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-white drop-shadow-lg">
          Simplicité <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary">
            & Excellence
          </span>
        </h1>
        
        <p class="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Votre partenaire multiservices de confiance. De la bureautique à la finance, 
          nous simplifions votre quotidien avec des solutions sur mesure.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#services" 
             class="btn-primary group relative overflow-hidden">
            <span class="relative z-10">Découvrir nos services</span>
            <div class="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </a>
          
          <a href="#contact" 
             class="px-8 py-3 rounded-full font-medium border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white">
            Nous contacter
          </a>
        </div>
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow text-white/50">
      <i class="fas fa-chevron-down text-2xl"></i>
    </div>
  </section>
</template>

<script setup>
// No script logic needed for this visual component
</script>

<style scoped>
/* Custom slow pulse for the background image */
@keyframes pulse-slow {
  0%, 100% { transform: scale(1.05); }
  50% { transform: scale(1.1); }
}
.animate-pulse-slow {
  animation: pulse-slow 20s infinite alternate ease-in-out;
}
</style>
