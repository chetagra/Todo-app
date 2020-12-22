$(()=>{

 let list = $('#list')
 let btnAdd = $('#btn-add')
 let btnRemove = $('#btn-remove') 


function addItem() {
    let inpTask= $('#inpTask').val()
    let item=$('<li>').addClass("list-group-item").html('<input type="checkbox"> '+`<span>${inpTask}</span>`)
    
    
    list.append(item)
    
    let itemSpan=$('#list li span')
  


itemSpan.on('click', function(event) {
     event.preventDefault()
     let Task= $('#inpTask').val()
     let target= $(event.target)
     target.text(Task)
})


 }

 function removeItem() {
           $('#list  li').first().remove()
 }


 btnAdd.click(addItem )

 btnRemove.click(removeItem)


})
