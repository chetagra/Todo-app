$(()=>{

 let list = $('#list')
 let btnAdd = $('#btn-add')
 let btnRemove = $('#btn-remove') 






 function addItem() {
    let inpTask= $('#inpTask').val()
    let item=$('<li>').addClass("list-group-item").html('<input type="checkbox"> '+`<span>${inpTask}</span>`)
    
    
    list.append(item)
    
    let itemSpan=$('#list li span')
    itemSpan.click(()=>{
        let inp=  $('#inpTask').val()
       itemSpan.text(inp)
    })



 }

 function removeItem() {
           $('#list  li').first().remove()
 }


 btnAdd.click(addItem )

 btnRemove.click(removeItem)


})
