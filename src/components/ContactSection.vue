<template>
  <section class="bg-gradient-to-br from-dark to-[#0f2418] text-white py-20 sm:py-16 relative overflow-hidden" id="contact">
    <!-- Background Patterns -->
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
    <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>
    
    <div class="w-[90%] max-w-[1200px] mx-auto px-4 relative z-10">
      <div class="text-center mb-16" v-reveal="'blur'">
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
        <div class="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10 shadow-glass" v-reveal="'left'">
          <form @submit.prevent="handleSubmit" @invalid.capture="triggerShake"
                class="space-y-6" :class="{ 'animate-shake': isShaking }" @animationend="isShaking = false">
            <!-- Champs à label flottant -->
            <div v-for="field in fields" :key="field.id" class="relative">
              <textarea v-if="field.tag === 'textarea'"
                :id="field.id"
                v-model="form[field.id]"
                rows="4"
                placeholder=" "
                required
                class="peer w-full bg-white/5 border border-white/10 rounded-xl px-5 pt-6 pb-2 text-white focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 focus:bg-white/10 transition-all duration-300 resize-none"
              ></textarea>
              <input v-else
                :id="field.id"
                v-model="form[field.id]"
                :type="field.type"
                placeholder=" "
                required
                class="peer w-full bg-white/5 border border-white/10 rounded-xl px-5 pt-6 pb-2 text-white focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 focus:bg-white/10 transition-all duration-300"
              >
              <label :for="field.id"
                class="absolute left-5 top-4 text-gray-400 pointer-events-none origin-left transition-all duration-300
                       peer-focus:top-1.5 peer-focus:scale-75 peer-focus:text-primary-light
                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:scale-75">
                {{ field.label }}
              </label>
            </div>

            <button 
              type="submit" 
              v-ripple
              :disabled="isSubmitting || isSuccess"
              class="relative overflow-hidden w-full py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-90 disabled:cursor-not-allowed disabled:transform-none"
              :class="isSuccess ? 'bg-green-600 shadow-none' : 'bg-primary hover:bg-primary-dark shadow-lg hover:shadow-primary/30'"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                <i class="fas fa-circle-notch fa-spin"></i> Envoi en cours...
              </span>
              <span v-else-if="isSuccess" class="flex items-center justify-center gap-2 animate-pop">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" class="check-draw" style="--len: 63" />
                  <path d="M7 12.5l3.5 3.5L17 9" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="check-draw [animation-delay:350ms]" style="--len: 16" />
                </svg>
                Message envoyé !
              </span>
              <span v-else class="flex items-center justify-center gap-2 group">
                Envoyer le message
                <i class="fas fa-paper-plane text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></i>
              </span>
            </button>
          </form>
        </div>

        <!-- Contact Info Grid -->
        <div class="space-y-8">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6" v-stagger="'right'">
            <!-- Contact Cards -->
            <a href="https://wa.me/2290143841045" target="_blank" class="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <div class="relative w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <span class="absolute inset-0 rounded-full bg-primary/30 animate-ping [animation-duration:2s]"></span>
                <i class="fab fa-whatsapp relative"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold text-lg mb-1 group-hover:text-primary transition-colors">WhatsApp & Appel</h4>
                <p class="text-gray-300 mb-2">Discutez en direct avec nous</p>
                <span class="text-white font-medium">+229 01 4384 1045</span>
              </div>
            </a>

            <div class="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
              <div class="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4 class="font-montserrat font-bold text-lg mb-1 group-hover:text-secondary transition-colors">Localisation</h4>
                <p class="text-gray-300 mb-2">Venez nous rendre visite</p>
                <span class="text-white font-medium">En face de COURS SONOU CABOMA</span>
              </div>
            </div>

            <div class="group flex items-start gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
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

const fields = [
  { id: 'name', label: 'Nom complet', tag: 'input', type: 'text' },
  { id: 'email', label: 'Email', tag: 'input', type: 'email' },
  { id: 'subject', label: 'Sujet', tag: 'input', type: 'text' },
  { id: 'message', label: 'Message', tag: 'textarea' }
];

const isShaking = ref(false);
const triggerShake = () => {
  isShaking.value = true;
};

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

<style scoped>
.check-draw {
  stroke-dasharray: var(--len);
  stroke-dashoffset: var(--len);
  animation: draw 0.5s ease-out forwards;
}
@keyframes draw {
  to { stroke-dashoffset: 0; }
}
</style>
