import style from "./css/about.module.css"
import { FaRegUserCircle } from "react-icons/fa";
export const About=()=>{
    return <>
    <hr />
    <h1 id="about"><center>What People Are Saying</center></h1>
    <div className={`${style.about_grid}`}>
    <div className={`${style.about_inside}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis quae vitae reiciendis saepe aut, repellendus inventore dolorem ipsum officiis deleniti, quibusdam qui sit perspiciatis magnam. Aliquid sint dolores soluta.
        <br /><h2> < FaRegUserCircle/>
        -- John doe</h2>
    </div>
    <div className={`${style.about_inside}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis quae vitae reiciendis saepe aut, repellendus inventore dolorem ipsum officiis deleniti, quibusdam qui sit perspiciatis magnam. Aliquid sint dolores soluta.<br /><h2> < FaRegUserCircle/>
    -- John doe</h2></div>
    <div className={`${style.about_inside}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis quae vitae reiciendis saepe aut, repellendus inventore dolorem ipsum officiis deleniti, quibusdam qui sit perspiciatis magnam. Aliquid sint dolores soluta.<br /><h2> < FaRegUserCircle/>
    -- John doe</h2></div>
    <div className={`${style.about_inside}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis quae vitae reiciendis saepe aut, repellendus inventore dolorem ipsum officiis deleniti, quibusdam qui sit perspiciatis magnam. Aliquid sint dolores soluta.<br /><h2> < FaRegUserCircle/>
        -- John doe</h2></div>
    <div className={`${style.about_inside}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis quae vitae reiciendis saepe aut, repellendus inventore dolorem ipsum officiis deleniti, quibusdam qui sit perspiciatis magnam. Aliquid sint dolores soluta.<br /><h2> < FaRegUserCircle/>
        -- John doe</h2></div>
    <div className={`${style.about_inside}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quis quae vitae reiciendis saepe aut, repellendus inventore dolorem ipsum officiis deleniti, quibusdam qui sit perspiciatis magnam. Aliquid sint dolores soluta.<br /><h2> < FaRegUserCircle/>
        -- John doe</h2></div>
        
        
    </div>
    </>
}