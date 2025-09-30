const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const heading = document.querySelector(".guidance")



// Loop through each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button's ID (which is the color name)
    const color = button.id;

    // Change the background color of body
    body.style.backgroundColor = color;
    
    if (color==="Blue") {
        heading.style.color="White";
    } else if (color==="Yellow") {
         heading.style.color="#F54927";
    }else if (color==="Gray") {
         heading.style.color="#D6D3D1";
    }else{
        heading.style.color="#0C0A09";
    }
  });
});