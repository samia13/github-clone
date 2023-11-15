import {
  Header,
  Hero,
  Productivity,
  Collaboration,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Productivity />
        <Collaboration />
        <Footer />
      </main>
    </>
  );
}

export default App;
