 const Tour =({props})=>{
     return(
   props.map(item=>{
   const{id,image,name,info,price}=item
   return(
<article className='article'  key={id} >
<img src={image} alt={name}/>
<div className="main-content">
<div className="title-price">
<h4>{name}    </h4> <span className='tag' >{price} $</span>
</div>
<p>{info}</p>
<button className='btn' >Not Interested</button>
 </div>

</article>
   )
   })
     )
 }

 export default Tour