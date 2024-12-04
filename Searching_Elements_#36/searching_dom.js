console.log("hello, Searching Dom Practice.");

const cardtitle = document.body.getElementsByClassName("card-title");
cardtitle[0].style.color='red'; // card k title ko red color diya mene

cardtitle[0].style.backgroundColor='cyan'; // card k title ko background ko cyan color diya mene

document.body.getElementsByClassName("card")[0].style.width='30rem'; //card ki size update kra 

document.body.getElementsByClassName("card")[0].children[1].children[2].style.height='20rem';

ocument.body.getElementsByClassName("card")[0].children[1].children[2].style.width='40rem';

const cardcontent = document.body.getElementsByClassName("card");

cardcontent[0].style.width='60rem';