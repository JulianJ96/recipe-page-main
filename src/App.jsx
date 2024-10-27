import "./index.css";
import Header from './components/header'; 
import Hero from './components/hero'; 

function App() {
  return (
    <div className="flex flex-col items-center justify-start md:justify-center min-h-screen bg-white md:bg-stone-100">
      {/* Card Container, visible only on md and larger screens */}
      <div className="md:hidden flex flex-col items-center justify-center w-full">
        {/* ONLY SHOWING ON MOBILE */}
        <Header />
        <Hero />
      </div>

      <div className="hidden md:block w-screen md:w-[724px] p-4">
        <div className="flex-grow bg-white shadow-lg md:rounded-lg p-6 md:p-8">
          <Header />
          <Hero />
        </div>
      </div>
    </div>
  );
}

export default App;


