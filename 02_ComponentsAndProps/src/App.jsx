import "./App.css"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Box from "./components/box/box"
import Counter from "./components/Counter"
function App() {
  return (
    <>
      <Header />
      <section>
        <Box size="small" style={{ backgroundColor: "red" }}>
          box1
        </Box>
        <Box size="medium" style={{ backgroundColor: "green" }}>
          box2
        </Box>
        <Box
          size="large"
          style={{ backgroundColor: "blue" }}
          children={"box3"}
        ></Box>
      </section>
      <Counter />
      <Footer>Footer</Footer>
    </>
  );
}

export default App
