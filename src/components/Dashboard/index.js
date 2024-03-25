// import "./styles.scss";
import React from "react";
import bg_video from "../../assets/videos/bg-video.mp4"
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

function Dashboard() {
    return ( 
        <div className="w-full min-w-full">
            <video loop autoPlay muted className="-z-10 absolute" id="bg-video">
                <source src={bg_video} type="video/mp4"/>
           </video>
           <div className="flex justify-center flex-wrap align-middle pt-10 pl-10 text-white">
            <HeaderLeft/>
            <HeaderRight />
           </div>
        </div>
     );
}

export default Dashboard;