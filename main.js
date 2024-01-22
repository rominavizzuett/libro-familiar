var images = ["Beige Minimalist Family Photo Collage.png","papá.jpg", "mamá.jpg" , "yo.jpg", "gaby.jpg", "Abuelo.jpg"];
           
var names = ["Libro familiar","Papá Victor", "Mamá Faby", "yo Romi", "Tia Gaby", "Abuelos Chejo y Rosa"];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}