import {
  Header,
  Hero,
  Productivity,
  Collaboration,
  Security,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Productivity />
        <Security />
        <Collaboration />
        <Footer />
      </main>
    </>
  );
}

export default App;
