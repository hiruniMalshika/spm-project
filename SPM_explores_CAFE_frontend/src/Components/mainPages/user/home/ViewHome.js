import React, {useState} from 'react'
import { Card, Grid } from '@material-ui/core';
// import Background from "../../Images/Background.jpg";
import { SliderData } from './SliderData';


import ImageSlider from './ImageSlider';

var sectionStyle = {
   /*  width: "100%",
    height: "850px",
    // backgroundImage: `url(${Background})`,
    paddingLeft: "40px",
    marginLeft: "270px",
    marginTop: "-300px" */
};
var setColor = {
    color: "white",
    backgroundColor: "black",
    width: "1820px",
    height: '150px'
    
}

function ViewHome(){
    
   
      return(
        <div className="homecontainer">
            <div>
            <ImageSlider slides={SliderData}/>
            </div>
            <div className="boxes">
                <Grid container spacing={2}>
                        <Grid item xs={4} className="callbox">
                                
                                <h2>  ☎ CALL US
                                <p>+94 11 716 910</p></h2>
                        </Grid>
                        <Grid item xs={4} className="callbox">
                                <h2>  ✉ EMAIL
                                <p>INFO@ECAFE.LK</p></h2>
                        </Grid>
                        <Grid item xs={4} className="callbox" >
                                
                                <h2>  ♨ ADDRESS
                                <p>NEW KANDY ROAD,
                                MALABE
                                </p>
                            </h2>
                                
                        </Grid>
                </Grid>
            </div>
                <div className="missiondescription">
                        <h2>  OUR MISSION
                            <p>“To  provide an enriching unique dining and 
                                fellowship experience; such that  guests find that 
                                being at the Old 23rd provides nourishment for the body 
                                and strength for the soul.”</p>
                        </h2>
                </div>
               
            
        </div>
    )
    
}
export default ViewHome;

/**
 *  <section style={sectionStyle}>
                <Grid xs={6} container style={{paddingTop:'150px', paddingLeft:'420px'}}>
                    <Card style={setColor}>
                        
           

                       <div>OUR MISSION</div>                                                                    

                    “We believe the choices we make about what we eat, 
                    where it comes from and how it’s prepared have a direct and 
                    powerful impact on the health of individuals, communities 
                    and the environment.”
                    </Card>

                   
                    
                </Grid>
                <div className="addressBox">
                        
                        <h2>  ☎ CALL US
                        <p>+94 11 716 910</p></h2>
                </div>
                <div className="mailBox">
                        <h2>  ✉ EMAIL
                        <p>INFO@ECAFE.LK</p></h2>
                </div>
                <div className="roadBox">
                        
                        <h2>  ♨ ADDRESS
                        <p>NEW KANDY ROAD,
                        MALABE
                        </p>
                       </h2>
                        
                </div>
                <div className="mission">
                        <h2>  OUR MISSION
                            <p>“To  provide an enriching unique dining and 
                                fellowship experience; such that  guests find that 
                                being at the Old 23rd provides nourishment for the body 
                                and strength for the soul.”</p>
                        </h2>
                </div>
               
                
                {/* <ImageSlider slides={SliderData}/> */
               
               // </section>
         
            
               // <hr/>
                
             
                
 //