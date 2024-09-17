import { useEffect, useRef } from "react";
import HomePage from "./pages/HomePage";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";

function App() {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      inertia: 0.75,
    });

    setTimeout(() => {
      scroll.update(); // Force an update after everything is rendered
    }, 1000);

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container ref={scrollRef} className="">
      <HomePage />
    </div>
  );
}

export default App;
