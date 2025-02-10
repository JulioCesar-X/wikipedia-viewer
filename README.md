## 🚀 Features

- 🔍 **Search Wikipedia** with live results display.
- 🎲 **Random Article Button** to explore random Wikipedia entries.
- 🎨 **Modern and Responsive Design** using Bootstrap 5.
- 🏃 **Smooth Animations** with AOS (Animate On Scroll).
- ⚡ **Fast Loading** powered by Vite.

## 📁 Project Structure

```
wikipedia-viewer/
│── public/               # Static files
│── src/
│   ├── assets/           # Styles, images, and fonts
│   ├── components/       # Reusable components
│   │   ├── SearchBox.vue      # Search input field
│   │   ├── SearchResults.vue  # Display search results
│   │   ├── RandomArticle.vue  # Random article button
│   ├── pages/
│   │   ├── Home.vue           # Main home page
│   ├── router/
│   │   ├── index.js           # Vue Router setup
│   ├── store/                 # State management (if needed)
│   │   ├── index.js           # Pinia store
│   ├── App.vue                # Root component
│   ├── main.js                # Application entry point
│── .env                       # Environment settings
│── index.html                  # Main HTML file
│── package.json                # Dependencies
│── vite.config.js              # Vite configuration
```

## 🎯 Installation & Usage

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/wikipedia-viewer.git
cd wikipedia-viewer
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Run the development server
```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

## 🛠️ Technologies Used

- **Vue 3 + Vite** → For fast and reactive development.
- **Vue Router** → To manage navigation.
- **Pinia** → Lightweight state management (optional).
- **Axios** → To fetch data from Wikipedia API.
- **Bootstrap 5** → For a modern and responsive UI.
- **AOS (Animate On Scroll)** → For smooth animations.

## 📌 API Used

The application uses the **MediaWiki API** to fetch Wikipedia search results and random articles.

Example API call:
```sh
https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=your_query&origin=*
```

## 📄 License

This project is open-source and available under the MIT License.

---

💡 **Contributions are welcome!** Feel free to open issues or submit pull requests.
---
