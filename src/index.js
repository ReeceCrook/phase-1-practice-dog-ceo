const dogImageCont = document.querySelector("#dog-image-container")
const dogBreedCont = document.querySelector('#dog-breeds')
const dropDown = document.querySelector('#breed-dropdown')
let breeds = []


window.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM content loaded");
    //console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    
    
    
    
   
    
    fetch(imgUrl)
    .then(function (response) {
        return response.json();
     })
    .then(function (object) {
        for(let i = 0; i < object.message.length; i++){
            const li = document.createElement('li')
            const img = document.createElement('img')
            img.src = object.message[i]
            li.appendChild(img)
            dogImageCont.appendChild(li)
        }
     })
    .catch(function (error) {
        alert("Nope not like that you silly willy");
        console.log(error.message);
    });


    fetch(breedUrl)
    .then(function (response) {
        return response.json();
     })
    .then(function (object) {
        breeds.push(Object.keys(object.message))

        for(let i = 0; i < Object.keys(object.message).length; i++){
            const li = document.createElement('li')
            const lis = document.getElementsByTagName('li')
            li.setAttribute('id', 'breed-list')
            li.innerHTML = Object.keys(object.message)[i]
            dogBreedCont.appendChild(li)
            lis[i].addEventListener('click', function(){ 
                li.setAttribute('style', 'color:DodgerBlue;')
            })

        }
     })
    .catch(function (error) {
        alert("Nope not like that you silly willy");
        console.log(error.message);
    });

    dropDown.addEventListener('change', function(){
        const li = document.querySelectorAll('#breed-list')
        for(let i = 0; i < li.length; i++){
         if(dropDown.value === 'a'){
             breeds[0].filter(() => {
                breeds[0].map(function(){
                    if(breeds[0][i].startsWith('a')){
                       li[i].removeAttribute('hidden')
                    } else(li[i].setAttribute('hidden', 'true'))
                 })
              })     
         }
         else if(dropDown.value === 'b'){
            breeds[0].filter(() => {
                breeds[0].map(function(){
                    if(breeds[0][i].startsWith('b')){
                       li[i].removeAttribute('hidden')
                    } else(li[i].setAttribute('hidden', 'true'))
                 })
              })   
                console.log('2')
         }
         else if(dropDown.value === 'c'){
            breeds[0].filter(() => {
                breeds[0].map(function(){
                    if(breeds[0][i].startsWith('c')){
                       li[i].removeAttribute('hidden')
                    } else(li[i].setAttribute('hidden', 'true'))
                 })
              })   
             console.log('3')
         }
         else(
            breeds[0].filter(() => {
                breeds[0].map(function(){
                    if(breeds[0][i].startsWith('d')){
                       li[i].removeAttribute('hidden')
                    } else(li[i].setAttribute('hidden', 'true'))
                 })
              })   
         )
        }
        
     }) 
 
});

