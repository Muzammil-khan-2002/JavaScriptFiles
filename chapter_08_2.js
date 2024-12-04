aconsole.log("Hello Chapter 08 - 02 Revision.");


function bookmark()
{
    let url = document.getElementById('user_input').value.trim();

    if(url)
    {
        let list  = document.getElementById('bookmark_list');

        let list_item = document.createElement('li');

        list_item.innerHTML = `<a href="${url}" target="_blank">${url}</a>`;
        list.appendChild(list_item);
        document.getElementById('user_input').value='';
    }
    else
    {
        alert("Please enter valid URL !!!");
    }
}