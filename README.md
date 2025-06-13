# AI-Chat-Assistant-Angular-Free-LLM-
AI Chat Assistant (Angular + Free LLM)
A sleek web app where users can interact with an AI assistant. It supports:
  - Prompt input
  - LLM response display
  - Optional conversation history
  - Uses Angular standalone components and RxJS

Integrates a free LLM via API (like Ollama on localhost or OpenRouter)

✅ Tech Stack
  - Angular 17+ (Standalone API)
  - TypeScript
  - Tailwind CSS (optional for better UI)
  - RxJS for reactive programming
  - HTTPClient for LLM API calls

Optional backend (Node.js proxy if CORS issues arise)

🚀 Features
  - Chat with LLM
  - View past responses
  - Reset session
  - Responsive UI



pre requirements

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

/--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

✅ Step-by-Step: Install Ollama on Windows
1. Download Ollama
Go to the official site:
👉 https://ollama.com/download

Click the Windows version to download the installer (OllamaSetup.exe).

2. Install Ollama
Run the installer you just downloaded.

Let it complete the installation.

It should automatically add ollama to your system PATH.

Restart Command Prompt (close and reopen).

3. Verify Installation
Open a new terminal or command prompt and run:

bash
Copy
Edit
ollama --version
You should see something like:

nginx
Copy
Edit
ollama version 0.1.x
4. Download and Run LLaMA 3
Run the following in terminal:

bash
Copy
Edit
ollama run llama3
This will:

Download the llama3 model (~4GB)

Start the LLM locally

Make it accessible at http://localhost:11434

✅ Now the backend is ready.

🔁 Next Step: Run Your Angular App
Add the proxy file if you haven’t (proxy.conf.json)

Update your Angular HTTP request to use /api/generate (not localhost)

Run:

bash
Copy
Edit
ng serve

