console.log("Hello, Chepter - 08 - #3 Revision.");


let button = document.getElementById('user_button');

button.addEventListener("click",function(){
    let url = document.getElementById('user_url').value.trim();
    if(url)
    {
        let list = document.getElementById('bookmarked');
        let list_item = document.createElement("li");
        list_item.innerHTML=`<a href="${url}" target="_blank">${url}</a>`;
        list.appendChild(list_item);
        document.getElementById('user_url').value='';
    }
    else
    {
        alert("Enter a Valid URL !!!");
    }
})