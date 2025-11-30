# 📘 SchoolWeb — Clean Architecture ASP.NET MVC Project

A modular, extensible school website built using:

- **ASP.NET 8 MVC**
- **Clean Architecture**
- **SOLID Principles**
- **Repository + Service Pattern**
- **Industry branching strategy**
- **CI/CD with GitHub Actions**
- **Reusable template for future projects**

---

## 🏛 Architecture Overview


### 🔍 Why Clean Architecture?
- UI is independent of the business logic  
- Business logic is independent of infrastructure  
- Easy to maintain, extend, and reuse  
- Perfect for long-term projects and enterprise setups  

---

## 🧱 SOLID Principles Applied

### **S — Single Responsibility**
Each layer and each service handles exactly one responsibility.

### **O — Open/Closed**
Services and repositories can be extended without modifying core logic.

### **L — Liskov Substitution**
Interfaces allow switching implementations safely.

### **I — Interface Segregation**
Small, focused interfaces (e.g., `INewsRepository`, `IImageService`).

### **D — Dependency Inversion**
Domain/Application do not depend on Infrastructure — but the opposite.

---

## 🔥 Branching Strategy (Professional)

### **Main Branches**
| Branch | Description |
|--------|-------------|
| `main` | Stable production-ready code |
| `develop` | Development integration branch |

### **Feature Branch Naming Convention**


### **Workflow**


Everything goes through Pull Requests.

---

## 🚀 CI/CD (GitHub Actions)

CI pipeline runs automatically on:

- pushes to `develop`, `main`, or `develop-NM-*` branches  
- all PRs into `develop` or `main`

### Pipeline tasks:
- Restore dependencies  
- Build solution  
- Run tests  
- Publish build artifacts  

