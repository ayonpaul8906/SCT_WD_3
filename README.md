# <img width="35" height="35" alt="image" src="https://github.com/user-attachments/assets/f6461e16-04e0-42f6-abb9-93ab657e07e3" /> QuizVerse

QuizVerse is an **advanced, interactive, and gamified quiz application** designed to provide a challenging and visually stunning user experience. It features multiple question types, a level-based progression system, and a modern, top-notch UI.

Built with **React (Vite) + TailwindCSS**, QuizVerse is a feature-rich platform with dynamic animations, persistent user profiles, and a local leaderboard, all wrapped in a sleek "glassmorphism" design.

---

## 🌟 Features

-   🏆 **Multi-Level Progression** – Journey through three distinct levels (Easy, Medium, Hard), unlocking the next stage only by achieving a score of 70% or higher.
-   ❓ **Diverse Question Types** – Stay engaged with a variety of formats including Single-Select, Multi-Select, Image-Based, and Fill-in-the-Blanks questions.
-   👤 **Persistent User Profiles** – A one-time setup for your name and avatar, with progress and unlocked levels saved locally. Your name is editable at any time.
-   🎮 **Gamification** – A countdown timer adds urgency to each question, and correct answers are celebrated with a burst of confetti.
-   📈 **Local Leaderboard** – Compete for the high score! The top 10 scores from full playthroughs are saved on your local device.
-   🎨 **Modern UI** – A top-notch user interface featuring a dynamic particle background, "glassmorphism" for all components, glowing effects, and 3D tilt animations.

---

## 🛠️ Tech Stack

-   **Frontend**: [React](https://react.dev/) (with [Vite](https://vitejs.dev/))
-   **Styling**: [TailwindCSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Particle Background**: [@tsparticles/react](https://particles.js.org/)
-   **3D Tilt Effect**: [react-parallax-tilt](https://www.npmjs.com/package/react-parallax-tilt)
-   **Confetti**: [react-confetti](https://www.npmjs.com/package/react-confetti)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 📂 Project Structure

```plaintext
quizverse/
│── src/
│   ├── assets/         # Avatars and other static app images
│   ├── components/     # All UI components (Navbar, Quiz, Profile, etc.)
│   ├── data/           # Leveled question data and avatars data
│   ├── App.jsx         # Root component and layout manager
│   └── main.jsx        # Application entry point
│
├── public/             # Static question images (flags, diagrams, logos)
├── package.json        # Project dependencies & scripts
├── tailwind.config.js  # TailwindCSS configuration
└── vite.config.js      # Vite configuration
```

## 📸 Screenshots  

| **Home** | **Quiz** | **Profile** |
|:------------:|:------------:|:------------:|
| ![Home](https://github.com/user-attachments/assets/b2f1cce1-304b-4f3d-a7f7-f0d68a6fc27f) | ![Quiz](https://github.com/user-attachments/assets/da0515fd-aff8-41a2-8488-43f2b7bbd8df) | ![Profile](https://github.com/user-attachments/assets/652c19b0-de1f-4a5c-bbe1-c7ff14b093bf) |

---

## 🚀 Getting Started

Follow these steps to run Logix locally:

### 1️⃣ Clone the Repository
```bash
git clone [https://github.com/your-username/quizverse.git](https://github.com/your-username/quizverse.git)
cd quizverse
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Start Development Server
```bash
npm run dev
```
Your project will be running at: http://localhost:5173/

---

## 🎯 Future Improvements

- Implement a functional Achievements/Badges system.
- Track and display real stats on the profile page (Highest Score, Games Played).
- Develop a Global Leaderboard using a backend service like Firebase.
- Add more complex question types like Drag-and-Drop.

---

## 🤝 Contributing
1. Contributions are always welcome!
2. Fork the repo
3. Create a new branch (git checkout -b feature/YourFeature)
4. Commit your changes (git commit -m "Add YourFeature")
5. Push to branch (git push origin feature/YourFeature)
6. Open a Pull Request

---

## 🙌 Acknowledgements
Special thanks to **SkillCraft Technology** for providing the opportunity to work on this project as part of the **Web Development Internship Program**.  

---

## 📬 Contact
👤 **Ayon Paul**  

🔗 [LinkedIn](https://www.linkedin.com/in/ayon2407s/)  
🔗 [GitHub](https://github.com/ayon8906)  
