import React from 'react'

const Failure = () => {
  return (
    <>

<div className='container'>
        <div className='row pt-5'>
        <div className='col-4'></div>
          <div style={{paddingTop:"70px"}} className='col-4 '>
           <center> <img style={{height:"200px"}} src='https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1'></img></center>



           <div className="alert alert-danger" role="alert">
<center><a href="#" className="alert-link">OOPS !!</a>.  Payment Failed </center>
</div>


          
<a style={{marginLeft:"180px"}} className="link-secondary hov " href="/"> Return to Store</a> 
            <div className='col-4'></div>
            </div>
            </div>
            </div>
           
    </>
  )
}

export default Failure