const input = document.querySelector('input[type="color"]');

input.addEventListener('input', (event) => {
    const color = event.target.value;
    console.log(color);
    document.querySelector("html").style.backgroundColor = color;
    document.querySelector("p").innerHTML = color;
    document.querySelectorAll("h2")[0].style.color = color;
    document.querySelectorAll("h2")[1].style.color = color;
    document.querySelector("p").style.color = color;
});