<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>ChatBot</span>
    </div>

    <ChatMessages :messages="messages" />

    <MessageBox @send-message="onMessage($event)" />


  </div>
</template>

<script setup lang="ts">
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
  {
    id: new Date().getTime(),
    message: 'Hola Mundo',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: '¿Quieres tomar café',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'NO!!',
    itsMine: false,
    image: 'https://yesno.wtf/assets/no/26-34b31d1f0777f70c61488f67a36576a9.gif',
  }
]);

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    message: text,
    itsMine: true,
  });
};

</script>
