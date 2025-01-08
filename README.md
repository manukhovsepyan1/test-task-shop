# **Test Task**

  
## Features

  
- Fetches data from a public API: [DummyJSON](https://dummyjson.com)
- Uses **Next.js 15** with the latest features like TurboPack for fast development.
- TailwindCSS integration for efficient styling.
- Modular and reusable components architecture.
- Debounce and utility functions for enhanced user experience.
- Linting with ESLint and formatting with Prettier.
- Fully typed codebase using TypeScript.
  
  
## **Getting Started**

  
### Prerequisites

Make sure you have the following installed:

- Node.js >= 18
- npm >= 9
  
add .env  file

```env
	PUBLIC_API_URL=https://dummyjson.com
```
### **1. Install Dependencies**

  

Run the following command from the root of the repository to install all dependencies:

  

```bash

npm install

```

  
#### **Start Development Server**

  

Run the following command from the project root:

  

```bash

npm run dev

```


## OR


## **Getting Started whit docker**

### **1 Build the Docker Image**

```bash

docker build -t test-app .

```

### **2 Run the Docker Container**

```bash

docker run -p 3000:3000 -t test-app .

```

  

The development server will start, and the app will be accessible at:

[http://localhost:3000](http://localhost:3000).
