import { ChatGPTAPI } from 'chatgpt';
import env from '../env.js';

const useChatGPT = () => {
  const init = () => (
    new ChatGPTAPI({
      apiKey: env.OPENAI_API_KEY,
    })
  );

  const generateText = async (str) => {
    const api = init();
    try {
      const res = await api.sendMessage(str);
      return res.text;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  return {
    generateText,
  };
};

export default useChatGPT;
