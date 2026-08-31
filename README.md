<div align="center">

# ⚛️ React & Node.js Training

### Full-Stack JavaScript Development Project

A full-stack training project built to practice **React, Node.js, REST APIs, routing, controllers, and structured client-server architecture**.

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

</div>

---

## 🚀 About

This repository represents a full-stack development training project focused on building and understanding the architecture behind modern JavaScript web applications.

The project explores the separation of frontend and backend responsibilities, server-side routing, controllers, configuration, API communication, and modular application structure.

It also demonstrates an iterative Git workflow using multiple branches and pull requests during development.

---

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- HTML
- CSS

### Backend
- Node.js
- Server-side JavaScript
- REST-style APIs

### Development
- Git
- GitHub
- npm
- Environment-based configuration

---

## 🏗️ Architecture

```text
              ┌────────────────────┐
              │    React Client    │
              │                    │
              │   UI / User Input  │
              └─────────┬──────────┘
                        │
                        │ API Requests
                        ▼
              ┌────────────────────┐
              │   Node.js Server   │
              │                    │
              │      Routes        │
              │    Controllers     │
              │  Application Logic │
              └─────────┬──────────┘
                        │
                        ▼
              ┌────────────────────┐
              │ Application Data   │
              └────────────────────┘
```

---

## 📁 Project Structure

```text
react_training/
│
├── backend/             # Backend application logic
├── config/              # Application configuration
├── server/              # Server and routing functionality
├── training/            # Training/frontend application
├── utils/               # Shared utilities
│
├── .env.example         # Environment configuration template
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 💡 Concepts Practiced

This project focuses on:

- React application development
- Node.js backend development
- Client-server architecture
- REST API implementation
- Server-side routing
- Controllers and application logic
- Modular project organization
- Environment configuration
- npm dependency management
- Git branching
- Pull-request workflows
- Debugging and iterative development

---

## 🔀 Development Workflow

The repository was developed using multiple Git branches to separate features and implementation stages.

This provided practical experience with:

```text
Feature Branch
      │
      ▼
Development
      │
      ▼
Testing / Fixes
      │
      ▼
Pull Request
      │
      ▼
Main Branch
```

---

## 💻 Local Development

### Clone the repository

```bash
git clone https://github.com/ameerjawa/react_training.git
cd react_training
```

### Install dependencies

```bash
npm install
```

Depending on the repository structure, additional dependencies may need to be installed inside individual frontend/backend directories.

### Configure the environment

Use the provided:

```text
.env.example
```

as a reference for local configuration.

Real credentials should be stored locally and never committed to Git.

### Start the application

Run the appropriate development scripts defined in:

```text
package.json
```

---

## 🔐 Security

Environment-specific configuration and credentials should not be committed to source control.

The repository should exclude:

```text
.env
.env.*
```

while retaining:

```text
.env.example
```

with placeholder values for development setup.

---

## 🎯 What This Project Demonstrates

This repository represents an earlier stage of my full-stack engineering development and demonstrates practical experience with:

**Frontend Development**  
Building interfaces and application functionality with React.

**Backend Development**  
Creating server-side functionality with Node.js.

**API Architecture**  
Connecting frontend and backend components through structured request/response workflows.

**Software Architecture**  
Separating configuration, backend logic, server functionality, utilities, and frontend code.

**Git Workflow**  
Working with feature branches, commits, merges, and pull requests during iterative development.

---

<div align="center">

## 👨‍💻 Developer

**Ameer Jawabra**

Full Stack Software Engineer · Ontario, Canada

[Portfolio](https://ameerjawabra.com) • [GitHub](https://github.com/ameerjawa)

---

*Full-stack React and Node.js training project.*

</div>
