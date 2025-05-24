# Incubyte TDD Assessment - String Calculator

A Test-Driven Development (TDD) implementation of the String Calculator kata, demonstrating software craftsmanship principles and rigorous testing practices.

Some Screenshots are mentioned below

![Project Screenshot](https://private-user-images.githubusercontent.com/59674981/447290358-60a8186c-5776-4bec-a727-38d21e68c848.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgxMjQwMzgsIm5iZiI6MTc0ODEyMzczOCwicGF0aCI6Ii81OTY3NDk4MS80NDcyOTAzNTgtNjBhODE4NmMtNTc3Ni00YmVjLWE3MjctMzhkMjFlNjhjODQ4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI0VDIxNTUzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWUzNGUzMTA2ZTg4OTNkY2I0N2I2MzRkNTQ2OWRjM2ZhMTdkODNkZmZiMzk1ZWU3YTc0MTFkYzYxNzAzMGNmOWMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.omjmZPX8DbdffoEkaZQvZYch85DPFiU-zNR3iozv7EY) <!-- Add screenshot if available -->
![Project Screenshot](https://private-user-images.githubusercontent.com/59674981/447290357-8190c924-c6ed-4792-8528-8ac64ed845d0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgxMjQwMzgsIm5iZiI6MTc0ODEyMzczOCwicGF0aCI6Ii81OTY3NDk4MS80NDcyOTAzNTctODE5MGM5MjQtYzZlZC00NzkyLTg1MjgtOGFjNjRlZDg0NWQwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI0VDIxNTUzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVhNjM0ZTk0ZDFlZTliOTViZDY5ZjI3NWEzMWU2ZmUzZjMwYWFiNjBkZjJhMTRiYWM5MmY2Y2UxNjU5YmUyODUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.GoJl7CkqB3yciHulSkyiVDpv0m4LVGLWXbq3ckdIBRg) <!-- Add screenshot if available -->
![Project Screenshot](https://private-user-images.githubusercontent.com/59674981/447290359-ef80b56d-3642-4a76-a6b7-b7f4ee027583.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDgxMjQwMzgsIm5iZiI6MTc0ODEyMzczOCwicGF0aCI6Ii81OTY3NDk4MS80NDcyOTAzNTktZWY4MGI1NmQtMzY0Mi00YTc2LWE2YjctYjdmNGVlMDI3NTgzLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA1MjQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNTI0VDIxNTUzOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWEwYThkMWEzNjczZmEzYzkyNGFhZjNiYTkxNjFhODI5NDkxZjA1NjBmOTVlMjhhOGNiNWM5NmMwOWVmYmQ0ZDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.x47uQW-lmHfpE8L6C6GXfTA69cOSJkTMMYNK0Jx7m9s) <!-- Add screenshot if available -->

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
