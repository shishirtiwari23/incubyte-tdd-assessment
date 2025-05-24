# Incubyte TDD Assessment - String Calculator

A Test-Driven Development (TDD) implementation of the String Calculator kata, demonstrating software craftsmanship principles and rigorous testing practices.

Some Screenshots are mentioned below

![Project Screenshot](https://ik.imagekit.io/shishirtiwari23/Screenshot%202025-05-25%20at%202.50.25%E2%80%AFAM_yfPmaI70Wp.png?updatedAt=1748124211273) <!-- Add screenshot if available -->
![Project Screenshot](https://ik.imagekit.io/shishirtiwari23/Screenshot%202025-05-25%20at%2012.03.21%E2%80%AFAM_SRyhq6amT.png?updatedAt=1748124227197) <!-- Add screenshot if available -->
![Project Screenshot](https://ik.imagekit.io/shishirtiwari23/Screenshot%202025-05-25%20at%2012.03.50%E2%80%AFAM_HPyWinfs_.png?updatedAt=1748124239914) <!-- Add screenshot if available -->

## ✨ Features

- ✅ Strict Test-Driven Development approach
- ✅ Negative number validation
- ✅ Custom delimiter support (single character)
- ✅ Newline and comma delimiters handling
- ✅ Comprehensive test coverage
- ✅ Responsive UI for project documentation
- ✅ Error handling for invalid inputs

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm (v9+)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shishirtiwari23/incubyte-tdd-assessment.git
   cd incubyte-tdd-assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### 🧪 Usage

#### Running Tests

```bash
npm run test
```

#### Starting Development Server

```bash
npm run dev
```

## 🧠 Key Implementation Details

```typescript
// Core add function signature
function add(numbers: string): number {
  // TDD-implemented logic
}
```

### Example Test Cases

```typescript
test("add with custom delimiter returns sum", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("add with negatives throws error", () => {
  expect(() => add("-1,2")).toThrow("negatives not allowed: -1");
});

test("handle newline delimiters", () => {
  expect(add("1\n2,3")).toBe(6);
});
```

## 📁 Project Structure

```
src/
├── assignment/          # Core implementation
│   ├── add.ts           # String calculator logic
│   └── add.test.ts      # Comprehensive test suite
├── App.tsx              # Documentation UI
├── main.tsx             # Application entry
└── vite-env.d.ts        # Type declarations
```

## 🛠️ Technologies

- **React 18**
- **TypeScript 5**
- **Vite**
- **Vitest** (Testing framework)
- **ESLint** (Code quality)
- **Prettier** (Code formatting)

## 📬 Contact

**Shishir Tiwari**  
📧 shishir456tiwari@gmail.com  
💻 [GitHub Profile](https://github.com/shishirtiwari23)  
📄 [View Resume](https://drive.google.com/file/d/1We9bO3vdHz2KnadqTMfevaymClAO4YoQ/view?usp=sharing)
