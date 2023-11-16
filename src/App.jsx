import {
  Header,
  Hero,
  Productivity,
  Collaboration,
  Security,
  Footer,
  Contact,
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
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
