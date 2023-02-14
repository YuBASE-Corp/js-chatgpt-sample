## Requirement

- node >=18.0.0

## Installation

```bash
# install npm packages
npm i
# create env.js
cp env.js.example env.js
```

Then, access to [Account API Keys - OpenAI API](https://platform.openai.com/account/api-keys) and generate your own API key.  
After that, open `env.js` and replace `YOUR_OPENAPI_KEY` to your API key.  

```javascript
const env = {
  OPENAI_API_KEY: 'YOUR_OPENAPI_KEY', // replace your API key info
};
export default env;
```

## How to use

Open `index.js` and set your question to `str` constant

```javascript
const str = 'chatGPTとはなんですか。説明してください。'; // set question
```
  
... and exec `node index.js` !