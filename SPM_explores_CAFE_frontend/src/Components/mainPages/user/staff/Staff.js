import React from 'react'
import {Link} from 'react-router-dom'

function Staff() {
    return (
        <div >
        <di className="teamTxt">
            Team
        </di>
           
            <ul className="ulcheck">
            <li>
         
            <img src="https://res.cloudinary.com/afproject/image/upload/v1632911736/low_quality_rfqneh.jpg" alt='staff' className='staffImages' />    
            
            <img src="https://res.cloudinary.com/afproject/image/upload/v1632911505/118883186_1268029610206021_6926060220033478968_n_bcdyxu.jpg" alt='staff' className='staffImages'/>
           
            <img src="https://res.cloudinary.com/afproject/image/upload/v1632911259/92559709_243779283418603_8167432671908069376_n_jqvixm.jpg" alt='staff' className='staffImages' />
            
            <img src="https://res.cloudinary.com/disww9vb3/image/upload/v1633063580/test/myimg_ftdme3.jpg" alt='staff' className='staffImages' />
           

            </li>

            </ul>

            <div>
            {/* <div className="teamTxt2">Staff Links</div> */}
                    <li>
                    <div className='managerLink'>     
                    <Link to='#!' ><h2>Manager</h2></Link>
                    </div>
                 
                    <div className="kmanagerLink">
                    
                    <Link to='#!' ><h2>Kitchen Manager</h2></Link></div>
                    <div className='cashierLink'>
                   
                    <Link to='#!' ><h2>Cashier</h2></Link></div>
                    </li>

                    <img src="https://cdn.pixabay.com/photo/2019/08/22/12/06/team-4423339_960_720.png" alt='staff' className='staffImages2' />
            </div>
          
         
           
        </div>
    )
}

export default Staff
