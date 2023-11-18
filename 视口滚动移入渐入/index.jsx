import "./App.css";
import { useEffect, useRef } from "react";
function App() {
  const frist = useRef(null);
  useEffect(() => {
    let html = document.querySelector("html");
    html.style.fontSize = "32px";
  }, []);
  useEffect(() => {
    let prevY = 0;
    if (frist.current !== null) {
      let dom = frist.current;
      const intersectionObserver = new IntersectionObserver((entries) => {
        const currentY = entries[0].boundingClientRect.y;
        console.log(entries[0].boundingClientRect.y)
        let a = document.querySelector(".img")
        if (entries[0].intersectionRatio <= 0 && currentY > prevY) {
           a.classList.remove('imgani');
          return;
        } else {
            a.classList.add('imgani');
        }
        prevY = currentY;
      });
      // 开始监听
      intersectionObserver.observe(dom);
    }
  }, []);
  return (
    <div className="App">
      {Array.from({ length: 30 }, (i, index) => index).map((i, index) => (
        <div key={index}>{i}</div>
      ))}
      <div className={"m_home_card"} ref={frist}>
       <div className="box">
       <img className="img" src="https://xcx-album-img1.zmwxxcx.com/FkPhF9GNlt0CGPcNDy4SA2GuuB2x" />
       </div>
      </div>
      {Array.from({ length: 30 }, (i, index) => index).map((i, index) => (
        <div key={index}>{i}</div>
      ))}
    </div>
  );
}

export default App;
