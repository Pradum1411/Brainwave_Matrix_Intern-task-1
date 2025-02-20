import style from "./css/pricing.module.css"
import { SlActionRedo } from "react-icons/sl";
export const Pricing=()=>{
    return <>
    <div className={`${style.main_price}`} id="price">
        <div className={`${style.price}`}>Pricing</div>
        <div className={`${style.grid_price}`}>
            <div className={`${style.dis_price}`}>
                
                <h2>Free</h2>
                <h2>$ 0 <sub>/month</sub></h2>
                <p> <SlActionRedo/ > Private board sharing</p>
                <p> <SlActionRedo/ > 5 Gb Storage</p>
                <p ><SlActionRedo/ > Web Analytics</p>
                <p> <SlActionRedo/ >  <SlActionRedo/ > Private Mode</p>

                </div>
            <div className={`${style.dis_price}`}>
                
            <h2>Pro</h2>
                <h2>$ 10 <sub>/month</sub></h2>
                <p> <SlActionRedo/ > Private board sharing</p>
                <p> <SlActionRedo/ > 15 Gb Storage</p>
                <p> <SlActionRedo/ > Web Analytics(Advance)</p>
                <p> <SlActionRedo/ > Private Mode</p></div>
            <div className={`${style.dis_price}`}>
            <h2>Enterprise</h2>
                <h2>$ 200 <sub>/month</sub></h2>
                <p> <SlActionRedo/ > Private board sharing</p>
                <p> <SlActionRedo/ > Unlimited Storage</p>
                <p> <SlActionRedo/ > High Performance Network</p>
                <p> <SlActionRedo/ > Private Mode</p></div>
            </div>
       
    </div>
    </>
}