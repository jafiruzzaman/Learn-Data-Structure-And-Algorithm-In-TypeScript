# 🚀 TypeScript DSA Mastery — FAANG / MAANG Preparation

<div align="center">

<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/DSA-Roadmap%20600%2B-success?style=for-the-badge" />
<img src="https://img.shields.io/badge/FAANG-Interview%20Prep-orange?style=for-the-badge" />
<img src="https://img.shields.io/badge/Code-Clean%20%7C%20Typed-blue?style=for-the-badge" />
<img src="https://img.shields.io/badge/Status-Active%20Learning-brightgreen?style=for-the-badge" />
<img src="https://img.shields.io/github/stars/your-username/your-repo?style=for-the-badge" />
<img src="https://img.shields.io/github/forks/your-username/your-repo?style=for-the-badge" />

</div>

---

## 🔥 Why This Repository Exists

This repository is a **single-language, industry-aligned DSA mastery system** using **TypeScript**, designed for:

- FAANG / MAANG interviews
- Product-based companies
- Strong fundamentals + clean code
- DSA + OOP + LLD in **one language**

### Why TypeScript for DSA?

- Static typing → fewer bugs
- Generics → reusable data structures
- Same language for:

  - DSA
  - OOP
  - LLD / SOLID
  - Backend (NestJS)
  - Frontend (React / Next)

---

## ✨ Repository Highlights

<div align="center">

<img src="https://img.shields.io/badge/Approach-Pattern%20Based-blueviolet?style=flat-square" />
<img src="https://img.shields.io/badge/Language-TypeScript%20Only-3178C6?style=flat-square" />
<img src="https://img.shields.io/badge/Style-Production%20Grade-success?style=flat-square" />
<img src="https://img.shields.io/badge/Focus-Interview%20Ready-critical?style=flat-square" />

</div>

---

# 📦 (2) Real TypeScript Project Structure

```
📦 typescript-dsa-mastery
│
├── 📁 src
│   ├── 🔢 array/
│   ├── 🧵 string/
│   ├── 🔁 two-pointer-sliding-window/
│   ├── 🔍 binary-search/
│   ├── 🔀 sorting/
│   ├── 🔧 bit-manipulation/
│   ├── ➗ maths-for-dsa/
│   │
│   ├── ♻️ recursion/
│   ├── 🔙 backtracking/
│   │
│   ├── 🔗 linked-list/
│   ├── 🧰 stack/
│   ├── 🛤 queue/
│   │
│   ├── 🌲 binary-tree/
│   ├── 🌳 binary-search-tree/
│   ├── 🔡 tries/
│   ├── 🔼 heap-priority-queue/
│   │
│   ├── ♟️ greedy/
│   ├── 🧭 graph/
│   ├── ⛓️ hashing/
│   ├── 🧩 dynamic-programming/
│   │
│   ├── 🧱 oop/
│   ├── 🧠 low-level-design/
│   │
│   ├── 📝 sde-sheet/
│   │   ├── striver/
│   │   ├── codehelp/
│   │   └── apna-college/
│   │   └── coder-army/
│   │
│   └── 🧪 interview/
│       ├── amazon/
│       ├── google/
│       ├── microsoft/
│       ├── meta/
│       └── others/
│
├── 📄 README.md
├── 📄 tsconfig.json
├── 📄 package.json
├── 📄 .prettierrc.json
├── 📄 .prettierignore
├── 📄 progress.md
└── 🚫 .gitignore
```

✅ **Pure TypeScript DSA**

---

# ⚙️ tsconfig.json (Strict & Interview-Safe)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

# 📦 package.json (Minimal & Clean)

```json
{
  "name": "typescript-dsa-mastery",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "node dist/index.js"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
```

---

# 🧠 TypeScript DSA Problem Template (Mandatory)

```ts
/**
 * Problem: Two Sum
 * Difficulty: Easy
 * Pattern: Hashing
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];

    if (map.has(need)) {
      return [map.get(need)!, i];
    }
    map.set(nums[i], i);
  }

  return [];
}
```

---

# 📊 (3) Auto-Updatable Progress Tracker

Create a file: **`progress.md`**

```md
# 📊 DSA Progress Tracker

## 🔵 Core Topics

- [ ] Arrays ( / 50)
- [ ] Strings (0 / 50)
- [ ] Binary Search (0 / 50)
- [ ] Sorting (0 / 50)
- [ ] Two Pointers (0 / 40)
- [ ] Sliding Window (0 / 40)

## 🟣 Data Structures

- [ ] Linked List (0 / 60)
- [ ] Stack (0 / 40)
- [ ] Queue (0 / 40)
- [ ] Trees (0 / 120)
- [ ] Tries (0 / 40)
- [ ] Heap & Priority Queue (0 / 50)
- [ ] Graph (0 / 100)

## 🟠 Algorithms

- [ ] Recursion (0 / 40)
- [ ] Backtracking (0 / 60)
- [ ] Bit Manipulation (0 / 40)
- [ ] Greedy (0 / 50)
- [ ] Dynamic Programming (0 / 150)

## 🔥 Interview

- [ ] Company-wise Questions (0 / 300)
- [ ] SDE Sheets (0 / 450)
```

## ⭐ Support This Repository

If you find this repository helpful for **TypeScript DSA, interview prep, or structured learning**, consider supporting it:

<div align="center">

⭐ **Star this repository** to show support \
🔁 **Fork it** to track your own DSA journey\
📌 **Watch** to follow future updates

<img src="https://img.shields.io/github/stars/your-username/your-repo?style=social" />
<img src="https://img.shields.io/github/forks/your-username/your-repo?style=social" />
<img src="https://img.shields.io/github/watchers/your-username/your-repo?style=social" />

</div>

> Starring this repo motivates me to keep improving it with **more problems, better patterns, and cleaner TypeScript code**.

---

## 📬 Contact & Connect

<div align="center">

<a href="mailto:mohmmadjafiruzzaman@gmail.com">
  <img src="https://img.shields.io/badge/Email-mohmmadjafiruzzaman%40gmail.com-red?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://github.com/jafiruzzaman">
  <img src="https://img.shields.io/badge/GitHub-jafiruzzaman-black?style=for-the-badge&logo=github" />
</a>

<a href="https://www.linkedin.com/in/jafiruzzaman">
  <img src="https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin" />
</a>

</div>

---

## 🤝 Contributions & Feedback

- Suggestions are welcome
- PRs are appreciated
- Issues for mistakes or improvements are encouraged

> This repository is **learning in public** — feedback helps everyone grow.

---
