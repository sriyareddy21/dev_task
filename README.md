# 🚀 PopX Authentication UI (React)

A clean and responsive authentication UI built using **React + React Router (Vite setup)**.  
This project simulates a mobile-style app layout with multi-step navigation, reusable components, and clean UI structure.

---

## 📱 Project Overview

PopX is a front-end authentication flow that includes:

- Welcome Screen
- Login Page
- Register Page
- Account Page
- Bottom Navigation
- Step Indicator (1–4)

The layout mimics a **mobile application interface (375px width)** centered on desktop screens.

---

## 🛠 Tech Stack

- React (Functional Components)
- React Router DOM
- Vite
- CSS (Custom styling)
- React Hooks (useState, useNavigate, useLocation)

---

## 📁 Folder Structure


src/
│
├── components/
│ ├── Header.jsx
│ ├── Button.jsx
│ ├── InputField.jsx
│ ├── StepIndicator.jsx
│ └── BottomNav.jsx
│
├── pages/
│ ├── Welcome.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ └── Account.jsx
│
├── layout/
│ └── Layout.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css


---

## 🧩 Features

### ✅ Reusable Components
- Custom Button component
- Input fields with controlled state
- Header with back navigation
- Step progress indicator
- Bottom navigation bar

### ✅ Multi-Step Flow
The step indicator dynamically updates based on current route:

| Route | Step |
|-------|------|
| / | Step 1 |
| /signin | Step 2 |
| /create-account | Step 3 |
| /account | Step 4 |

### ✅ Mobile UI Layout
- Fixed mobile frame (375px)
- Centered layout on desktop
- Scrollable content area
- Fixed bottom navigation

### ✅ Form Handling
- Controlled inputs using useState
- Dynamic validation for required fields
- Disabled button when form is incomplete

---

## 🧠 Architecture Highlights

- Layout wrapper using `Outlet`
- Route-based step detection using `useLocation`
- Clean separation of:
  - UI (components)
  - Logic (pages)
  - Layout handling

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies

```bash
npm install
2️⃣ Start development server
npm run dev
3️⃣ Open in browser
http://localhost:5173
🎯 What This Project Demonstrates

1.React component architecture

2.Routing with React Router v6

3.Controlled form components

4.Layout composition

5.CSS organization

6.Mobile-first UI thinking

7.Clean state management

🚀 Future Improvements

1.Add form validation with error messages

2.Add Protected Routes

3.Add authentication context

4.Convert project to TypeScript

5.Add dark mode

6.Connect to real backend API

📸 Screens Included

1.Welcome Page

2.Login Page

3.Register Page

4.Account Page

5.Bottom Navigation

6.Step Indicator
