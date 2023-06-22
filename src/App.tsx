import "./App.css";
import "./style.css";

import upArrowIcon from "./assets/up-arrow.svg";
import { useCustomJs } from "./hooks/use-custom-js";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ArticleSection from "./components/feed/article-section";

function App() {
  useCustomJs();

  return (
    <div className="text-gray-700 pt-9 sm:pt-10">
      <Header />

      <main id="content">
        {/* <Category /> */}

        <ArticleSection />
      </main>

      <Footer />

      <a
        href="#"
        className="back-top fixed p-4 rounded bg-gray-100 border border-gray-100 text-gray-500 dark:bg-gray-900 dark:border-gray-800 right-4 bottom-4 hidden"
      >
        <img src={upArrowIcon} alt="Up" />
      </a>
    </div>
  );
}

export default App;
