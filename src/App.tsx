// App.tsx
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Incubyte TDD Assessment</h1>
        <p className="author">Shishir Tiwari</p>
      </header>

      <main className="content">
        <section className="section">
          <h2>Project Overview</h2>
          <p>
            A Test-Driven Development implementation of the String Calculator
            kata.
          </p>
        </section>

        <section className="section">
          <h2>Project Structure</h2>
          <div className="code-block">
            <span>Source Code: </span>
            <code>src/assignment</code>
          </div>
          <div className="code-block">
            <span>Tests: </span>
            <code>src/assignment/*.test.ts</code>
          </div>
        </section>

        <section className="section">
          <h2>Running Tests</h2>
          <div className="command">
            <code>npm run test</code>
          </div>
        </section>

        <section className="section links">
          <a
            href="https://github.com/shishirtiwari23/incubyte-tdd-assessment"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
          <a
            href="https://drive.google.com/file/d/1We9bO3vdHz2KnadqTMfevaymClAO4YoQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a href="mailto:shishir456tiwari@gmail.com">Contact via Email</a>
        </section>
      </main>
    </div>
  );
}

export default App;
