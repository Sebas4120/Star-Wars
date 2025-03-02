
//Wait until the document is ready to be manipulated
document.addEventListener("DOMContentLoaded", function(){ 
  //select the figure elements with ID jedis.
  const jedis = document.getElementById("Jedis");
  console.log(jedis);

  //Jedis figures array
  const arrayJedis = jedis.querySelectorAll("img");
  console.log(arrayJedis);

  //Get the element with the ID="description" to set a new description later.
  let setNewDescription = document.getElementById("description");
  console.log(setNewDescription);

  //Creation of two variables which contain different CSS style
  const newStyle = "selectedImage";
  const oldStyle = "firstStyle";

  //Loop with the Jedis array created.
  for (let i=0;i < arrayJedis.length;i++){ 
      
    //for each of the Jedis images, an anonymous function will be call with the click
    arrayJedis[i].addEventListener("click", function(evt){    
      
      //reseting the style "firstStyle" for all images in order that the selected image with the click would be the only one with the style "selectedImage"
      for(let j=0;j<arrayJedis.length;j++){
        arrayJedis[j].setAttribute("class",oldStyle)
      };

      //Setting the new style to the selected image with the click        
      arrayJedis[i].setAttribute("class",newStyle);

      //get the "alt" attribute value of the selected image 
      let jediName = arrayJedis[i].getAttribute ("alt");
      console.log(jediName);

      //get the element with the ID="Name"
      let Name = document.getElementById("name");
        console.log(Name);
      //change the text of the element with "name" id with the jediName
        Name.textContent=jediName;
      
      //Variable creation to set the description for each Jedi
      let descriptionJedi;

      //Each description will be set according to the Jedi name - IF STATEMENT
      if(jediName==="Anakin Skywalker"){
        descriptionJedi="The chosen one who, in order to save his beloved, joins the dark side with deceit on the part of the Sith Lord.";
      }else if (jediName==="Obi-Wan Kenobi") {
        descriptionJedi="Friend, you could even say brother, of Anakin SkyWalker who taught him everything he knows but had to fight against him when he joined the dark side.";
      }else if (jediName==="Yoda") {
        descriptionJedi="Jedi Grandmaster who warned Obi-Wan that his apprentice was very powerful, but that there was a small darkness in him that could be deadly to all Jedi.";
      }else if (jediName==="Luke SkyWalker") {
        descriptionJedi="Son of Anakin SkyWalker, who freed his father from darkness and trained the last Jedi.";
      }else  {
        descriptionJedi="No Description";
      }
      //Checking if it works...
      console.log(descriptionJedi);
      
      //if my variable "setNewDescription" either is not null or it has a value so the text content of my varible will be replaced by "descriptionJedi" variable
      if (setNewDescription) {
        setNewDescription.textContent = descriptionJedi;
      }

    });
    
  };

});

