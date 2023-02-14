import useChatGPT from './composables/useChatGPT.js';

const str = 'nvm で現在インストール済みのバージョン一覧を表示したいです';

const { generateText } = useChatGPT();

await generateText(str);
