import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  const getBotResponse = async () => {
    try {
      const answer = await fetch('https://yesno.wtf/api');
      if (!answer.ok) {
        throw new Error(`HTTP error! status: ${answer.status}`);
      }
      const data = (await answer.json()) as YesNoResponse;
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      message: text,
      itsMine: true,
    });

    if (!text.endsWith('?')) return;

    messages.value.push({
      id: new Date().getTime(),
      message: 'Loading...',
      itsMine: false,
      isLoading: true,
    });

    await sleep();

    try {
      const { image, answer } = await getBotResponse();

      messages.value.pop();

      messages.value.push({
        id: new Date().getTime(),
        message: answer,
        itsMine: false,
        image: image,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      messages.value.pop();
      throw error;
    }
  };

  return {
    //Properties
    messages,

    //Methods
    onMessage,
  };
};
