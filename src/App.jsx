import Download from "./components/Download";
import Featurebox from "./components/Featurebox";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signinbox from "./components/Signinbox";

function App() {
  return (
    <div className="App min-w-screen min-h-screen font-[Poppins]">
      <Navbar />
      <main className="flex max-w-screen p-16 gap-16 max-lg:flex-col max-md:px-5">
        <Featurebox />
        <Signinbox />
      </main>
      <Download />
      <Footer />
    </div>
  );
}

export default App;
