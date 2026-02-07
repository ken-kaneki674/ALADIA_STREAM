<template>
  <section id="apropos" class="py-20 sm:py-16 bg-light overflow-hidden">
    <div class="w-[90%] max-w-[1200px] mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Image Content -->
        <div class="relative fade-in-section">
          <div class="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl z-0"></div>
          <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl z-0"></div>
          
          <div class="relative z-10 rounded-2xl overflow-hidden shadow-premium transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Équipe professionnelle Aladia Stream travaillant ensemble" 
              class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div class="absolute bottom-6 left-6 text-white">
              <p class="font-bold text-lg">Excellence & Innovation</p>
              <p class="text-sm opacity-90">Au service de votre réussite</p>
            </div>
          </div>
        </div>

        <!-- Text Content -->
        <div class="fade-in-section" style="animation-delay: 0.2s;">
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

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div class="flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                <i class="fas fa-layer-group text-lg"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold mb-1 text-dark">Polyvalence</h4>
                <p class="text-sm text-dark-lighter">Une gamme complète de services</p>
              </div>
            </div>
            
            <div class="flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                <i class="fas fa-users text-lg"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold mb-1 text-dark">Expertise</h4>
                <p class="text-sm text-dark-lighter">Équipe qualifiée et dédiée</p>
              </div>
            </div>

            <div class="flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                <i class="fas fa-bolt text-lg"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold mb-1 text-dark">Rapidité</h4>
                <p class="text-sm text-dark-lighter">Service efficace et ponctuel</p>
              </div>
            </div>

            <div class="flex items-start p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 flex-shrink-0">
                <i class="fas fa-heart text-lg"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold mb-1 text-dark">Qualité</h4>
                <p class="text-sm text-dark-lighter">Satisfaction client garantie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic here if needed
</script>
