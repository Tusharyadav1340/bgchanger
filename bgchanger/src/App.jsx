import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [color, setColor] = useState("rgba(46, 46, 46, 0.979)");
  const [click, setClick] = useState({})

  function handleMouseEnter(event) {
    if(click.btn !== color){
      setClick({});
    }
    setColor(event.target.style.backgroundColor);
  }

  function handleMouseLeave(event) {
    if(event.target.style.backgroundColor === color){ 
      if(click.btn !== color){
        setColor("rgba(46, 46, 46, 0.979)");
      }
    }
  }

  function handleButtonClick(event) {
    setClick({ btn:event.target.style.backgroundColor});
    setColor(event.target.style.backgroundColor)
  }
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h2 style={{ fontSize: "90px" , display:"flex", justifyContent:'center'}}>BG CHANGER</h2>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3" id="wrapper-btn">
          <motion.button
            className="btn outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            id="redbtn"
            onClick={handleButtonClick}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Red
          </motion.button>
          <motion.button
            className="btn outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            id="bluebtn"
            onClick={handleButtonClick}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Blue
          </motion.button>
          <motion.button
            className="btn outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "cyan" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            id="redbtn"
            onClick={handleButtonClick}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            cyan
          </motion.button>
          <motion.button
            className="btn outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "skyblue" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            id="redbtn"
            onClick={handleButtonClick}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            skyblue
          </motion.button>
          <motion.button
            className="btn outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            id="redbtn"
            onClick={handleButtonClick}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            pink
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default App;