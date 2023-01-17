const btn_on= document.querySelectorAll('.turn-off')[0];
const btn_off= document.querySelectorAll('.turn-on')[0];
const bulb_image = document.getElementById("light_image");
// console.log(bulb_image);
const turn_light_on = () => {
    bulb_image.src="./Images/lightbulb-png-833.png"
}
const turn_light_off = () => {
    bulb_image.src="./Images/lightbulb-png-830.png"
}

btn_on.addEventListener('click', turn_light_on);
btn_off.addEventListener ('click', turn_light_off );

