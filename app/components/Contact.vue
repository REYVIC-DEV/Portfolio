<template>
  <div class="w-full bg-bg-accent">
    <div
      class="flex flex-col items-center w-full px-5 py-20 mx-auto max-w-360 text-text-primary"
    >
      <h1 class="text-[28px] font-bold mb-11.25">Contact</h1>
      <p class="text-[20px] text-text-secondary text-center mb-6.25">
        Send me an email at joshuavreyes.dev@gmail.com
      </p>
      <div class="w-full max-w-md">
        <input
          v-model="email"
          type="email"
          placeholder="Your email"
          class="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg"
        />
        <button
          @click="sendEmail"
          class="w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Send Email
        </button>
        <Transition name="fade">
          <p v-if="message" class="mt-4 text-sm">{{ message }}</p>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const email = ref("");
const message = ref("");

const sendEmail = async () => {
  if (!email.value) {
    message.value = "Please enter your email.";
    return;
  }

  // EmailJS configuration
  const serviceId = "service_ym7eu8y";
  const templateId = "template_p0d8lif";
  const publicKey = "C3PRj6ueSMnrThkiv";

  try {
    await emailjs.send(
      serviceId,
      templateId,
      {
        email: email.value,
        message: `Please contact this email address. ${email.value}`,
      },
      publicKey,
    );
    message.value = "Email sent successfully!";
    email.value = "";

    // Fade away message after 3 seconds
    setTimeout(() => {
      message.value = "";
    }, 3000);
  } catch (error) {
    message.value = "Failed to send email. Please try again.";
    console.error("Error sending email:", error);
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
