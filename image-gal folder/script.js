const filterItem=document.querySelector(".items");
const filterImg=document.querySelectorAll(".image");


window.onload=()=>{
    filterItem.onclick=(selectedItem)=>{
  if(selectedItem.target.classList.contains("item")){ //if user click ele has .item class
    filterItem.querySelector(".active").classList.remove("active"); //remove the active class in the first el
  selectedItem.target.classList.add("active"); //add that active class on the user selected

  let filterName=selectedItem.target.getAttribute("data-name");
 filterImg.forEach((image)=>{
let filterImages=image.getAttribute("data-name");
if(filterName==filterImages || filterName=="all"){
  image.classList.remove("hide");
  image.classList.add("show")
}
else{
  image.classList.add("hide");
  image.classList.remove("show")
}
 });
  }
}
}

//

// const previewBox=document.querySelector(".preview-box");
// previewImg=previewBox.querySelector("img");
// closeicon=previewBox.querySelector('.fa-solid');

