import React from 'react'
import Tour from './Tour'

const Tours =({tours})=>{
    return <section>
    <div className='title'>
    <h1>our tours</h1>
    <div className="underline"></div>
    </div>
<div className="component">
<Tour props ={tours} />

</div>

    
    </section>
}

export default Tours




