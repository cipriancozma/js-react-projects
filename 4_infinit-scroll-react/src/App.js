import { useEffect, useState } from "react";
import Button from "./components/Button/Button";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Title from "./components/Title/Title";
import "./general.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    const toogleVisibility = () => {
      if (window.pageYOffset > 1600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toogleVisibility);

    return () => {
      window.removeEventListener("scroll", toogleVisibility);
    };
  }, []);

  return (
    <>
      <div className="container">
        <Title title={"Infinite Scrolling with React"} />
        <ImageContainer />
      </div>
      <Button
        text={"Scroll Up"}
        handlerFunction={scrollToTop}
        isVisible={isVisible}
      />
    </>
  );
}

export default App;
