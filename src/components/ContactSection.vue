<template>
  <section class="bg-gradient-to-br from-dark to-[#0f2418] text-white py-20 sm:py-16 relative overflow-hidden" id="contact">
    <!-- Background Patterns -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
    
    <div class="w-[90%] max-w-[1200px] mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <h2 class="font-montserrat font-bold text-4xl leading-tight mb-4 inline-block relative">
          Contactez-nous
          <span class="block w-20 h-1.5 bg-primary mt-2 mx-auto rounded-full"></span>
        </h2>
        <p class="text-gray-300 mt-4 text-lg">
          Une question ? Un devis ? Notre équipe est à votre écoute.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <!-- Contact Form -->
        <div class="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-glass">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="space-y-1">
              <label for="name" class="text-sm font-medium text-gray-300 ml-1">Nom complet</label>
              <input 
                id="name"
                v-model="form.name" 
                type="text"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                placeholder="Votre nom"
                required
              >
            </div>

            <div class="space-y-1">
              <label for="email" class="text-sm font-medium text-gray-300 ml-1">Email</label>
              <input 
                id="email"
                v-model="form.email" 
                type="email"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                placeholder="votre@email.com"
                required
              >
            </div>

            <div class="space-y-1">
              <label for="subject" class="text-sm font-medium text-gray-300 ml-1">Sujet</label>
              <input 
                id="subject"
                v-model="form.subject" 
                type="text"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                placeholder="L'objet de votre message"
                required
              >
            </div>

            <div class="space-y-1">
              <label for="message" class="text-sm font-medium text-gray-300 ml-1">Message</label>
              <textarea 
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                placeholder="Comment pouvons-nous vous aider ?" 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="isSubmitting || isSuccess"
              class="w-full py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              :class="isSuccess ? 'bg-green-600 shadow-none' : 'bg-primary hover:bg-primary-dark shadow-lg hover:shadow-primary/30'"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                <i class="fas fa-circle-notch fa-spin"></i> Envoi en cours...
              </span>
              <span v-else-if="isSuccess" class="flex items-center justify-center gap-2">
                <i class="fas fa-check"></i> Message envoyé !
              </span>
              <span v-else>
                Envoyer le message
              </span>
            </button>
          </form>
        </div>

        <!-- Contact Info Grid -->
        <div class="space-y-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <!-- Contact Cards -->
            <a href="https://wa.me/2290143841045" target="_blank" class="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div class="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <i class="fab fa-whatsapp"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold text-lg mb-1 group-hover:text-primary transition-colors">WhatsApp & Appel</h4>
                <p class="text-gray-300 mb-2">Discutez en direct avec nous</p>
                <span class="text-white font-medium">+229 01 4384 1045</span>
              </div>
            </a>

            <div class="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div class="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold text-lg mb-1 group-hover:text-secondary transition-colors">Localisation</h4>
                <p class="text-gray-300 mb-2">Venez nous rendre visite</p>
                <span class="text-white font-medium">En face de COURS SONOU CABOMA</span>
              </div>
            </div>

            <div class="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div class="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <i class="fas fa-clock"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold text-lg mb-1 group-hover:text-purple-400 transition-colors">Horaires d'ouverture</h4>
                <ul class="text-gray-300 text-sm space-y-1">
                  <li class="flex justify-between w-full gap-8">
                    <span>Lun - Ven:</span>
                    <span class="text-white font-medium">8h00 - 19h00</span>
                  </li>
                  <li class="flex justify-between w-full gap-8">
                    <span>Samedi:</span>
                    <span class="text-white font-medium">9h00 - 15h00</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const isSuccess = ref(false);

const handleSubmit = async () => {
  if (isSubmitting.value) return;
  
  isSubmitting.value = true;
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    isSuccess.value = true;
    
    // Reset form after delay
    setTimeout(() => {
      form.name = '';
      form.email = '';
      form.subject = '';
      form.message = '';
      isSuccess.value = false;
    }, 3000);
    
  } catch (error) {
    console.error('Erreur lors de l\'envoi:', error);
    alert('Une erreur est survenue. Veuillez réessayer.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>
