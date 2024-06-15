import React from 'react'

const Cargando = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* <img src="img/loading.gif" style={{ width: '30vw' }} /> */}


            {/*  <img src="public/img/loading12.gif" style={{ width: '10vw', opacity: 0.2, margin: '60px' }} />  */} {/* 11 y 12 gif van */}




            {/* <img src="public/img/loading9.gif" style={{ width: '20vw', margin: '60px' }} /> */}


            {/*   <img src="public/img/loading18.gif" style={{ width: '10vw', opacity: 0.25, margin: '60px' }} /> */}  {/* 16 y 15 okok */}



            {/* fontawesome era mejor    https://docs.fontawesome.com/v5/web/style/animate */}

            <i class="fas fa-spinner fa-spin" style={{ display: 'block', margin: '60px', fontSize: '50px', color: '#877be7' }} ></i>

            {/* <i class="fas fa-spinner fa-pulse" style={{ display: 'block', margin: '60px', fontSize: '50px', color: '#5878e5' }} ></i>
            
            <i class="fas fa-circle-notch fa-spin" style={{ display: 'block', margin: '60px', fontSize: '50px', color: '#5878e5' }} ></i> */}


        </div>
    )
}

export default Cargando