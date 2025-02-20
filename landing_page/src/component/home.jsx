import style from "./css/home.module.css";
export const Home = () => {
  return (
    <>
      <hr />
      <center>
        <h2 id="home">VirtuaIR build tools for developer</h2>
        <div className={`${style.home_p}`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam id ea
          autem assumenda vitae. Minima delectus ratione assumenda libero!
          Error.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam id ea
          autem assumenda vitae. Minima delectus ratione assumenda libero!
          Error.
          </div>
          <br />
          <button className={`${style.home_button1}`}>Start For Free</button>
          <button className={`${style.home_button2}`}>Documentation</button>
        
      </center>
      <div className={`${style.home_grid}`}>
        <div>
          <img
            src="https://www.jagranimages.com/images/newimg/06092024/06_09_2024-bestvrheadsets_23792225.webp"
            alt="image loading"
            width={480}
          />
        </div>
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEUQBrhd8MlmmzOd1OHAyweMmTVpr28QFkdA&s"
            alt="image loading"
            width={480}
          />
        </div>
      </div>
    </>
  );
};
