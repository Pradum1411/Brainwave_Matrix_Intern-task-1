
import style from "./css/header.module.css";
import { FiAlignJustify } from "react-icons/fi";

export const Header = () => {
 
  let a = false;
  const toogle = (event) => {
    if (a) {
      document.getElementById("td").style.display = "none";
      a = false;
    } else {
      document.getElementById("td").style.display = "block";
      a = true;
    }
    console.log(event);
  };
  return (
    <>
      <div className={style["wrapper"]}>
        <div className={style["nav1"]}>
        <a href="#home" className={`${style.home} ${style.home1}`}>
            home
          </a>
          
        </div>
        <div className={style["nav2"]}>
          <a href="#feature" className={`${style.features} ${style.home}`}>
           Features 
          </a>
          <a href="#workflow" className={`${style.home}`}>
            Workflow
          </a>
          <a href="#price" className={` ${style.home}`}>
            Pricing
          </a>
          <a href="#about" className={`${style.home}`}>
            About
          </a>
          <a href="#" className={`${style.signin} ${style.home} ${style.register}`}>
            Sign in
          </a>
          <a href="#" className={` ${style.home} ${style.register}`}>
            Register
          </a>
        </div>
        <div className={style["nav3"]}>
          <button onClick={toogle}>
            <FiAlignJustify />
          </button>
        </div>
      </div>
      <div className={`${style.togle}`} id="td">
        <div className={`${style.togle1}`}>
          <a href="#feature" className={`${style.home}`}>
          Features
          </a>
        </div>
        <div className={`${style.togle1}`}>
          <a href="#workflow" className={`${style.home}`}>
          Workflow
          </a>
        </div>

        <div className={`${style.togle1}`}>
          <a href="#pricing" className={`${style.home}`}>
          Pricing
          </a>
        </div>
        <div className={`${style.togle1}`}>
          <a href="#about" className={`${style.home}`}>
            About
          </a>
        </div>
        <div className={`${style.togle1}`}>
    
            <button className={`${style.home}`}>Sign in</button>
          
      
        </div>
      </div>
      
    </>
  );
};
