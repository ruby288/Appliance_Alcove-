//import React from 'react'
import Rating from './component/Rating'

const Success = () => {
  return (
    <>

<div className='container'>
        <div className='row pt-'>
        <div className='col-4'></div>
          <div style={{paddingTop:"70px"}} className='col-4 '>
           <center> <img style={{height:"200px"}} src='https://i.pinimg.com/originals/89/86/fe/8986fef7a58272135c7c5d006a312554.gif'></img></center>


          <div className="card text-left " style={{width:"470px",height:"80px" ,marginLeft:"", marginTop:"30px"}}>
          <div style={{backgroundColor:"lightgreen"}} data-aos="fade-down"className="card-body ">
<center><p style={{fontSize:"20px"}}>

    Payment Successfully Done !!
</p> </center>


            </div>
            </div><br></br>


            <a style={{marginLeft:"180px"}} className="link-secondary hov " href="/"> Return to Store</a> 
            </div>
            <div className='col-4'></div>
            </div>
            </div> <br /><br /> <br />
            <Rating/>
   </>
  )
}

export default Success