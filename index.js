import useChatGPT from './composables/useChatGPT.js';

const str = 'chatGPTとはなんですか。説明してください。';

const { generateText } = useChatGPT();

await generateText(str);
