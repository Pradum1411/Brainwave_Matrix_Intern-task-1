import style from "./css/footer.module.css"

export const Footer=()=>{
    return <>
    <hr />
    <div className={`${style.footer_grid}`} >
        <div>
            <h4>Resources</h4>
            <span>Getting Started <br/> Documentation <br/> Tutorials <br/> API Reference <br/> Community Forums</span>
        </div>
        <div><h4>Platform</h4>
        
        <span>Features <br/> Supported Devices <br/> System Requirments <br/> Downloads <br/> Release Notes</span>
        </div>
        <div><h4>Community</h4>
        <span>Events <br/> Meetups <br/> Conferences <br/> Hackthons <br/> Jobs</span>
        </div>
    </div>
    </>
}