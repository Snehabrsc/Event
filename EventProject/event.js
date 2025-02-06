const liitem=document.querySelector('#images')
liitem.addEventListener('click',function(e){
    // console.log(e.target)
    const targetelem=e.target.parentNode
   targetelem.remove()
})


const googl=document.querySelector('#google')
googl.addEventListener('click',function(e){
    e.stopPropagation()
    // e.preventDefault()
})