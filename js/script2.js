{
    const onToggleBackgroundClick = () => {
        const body = document.querySelector(".container")
        const themeName = document.querySelector(".themeName")
        // this specific command means we can make sth happen only after clicking at the button
        body.classList.toggle("dark");//this function makes all page go to dark mode;
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";//this instruction changes text inside the button;
    };

    const init = () => {
        const toggleBackground = document.querySelector(".button");
        toggleBackground.addEventListener("click", onToggleBackgroundClick)
    };

    init();
}
{
    const sendForm = () => {
        const formElement = document.querySelector(".form")
        formElement.addEventListener("submit", () => {
            console.log('The form have been submitted');
        });

        formElement.addEventListener("reset", () => {
            console.log('The form have been reseted');
        });
    }

    sendForm();
}
{
    const calculatePrice = () => {
        const price = document.querySelector(".js-price")
        price.addEventListener("submit", (event) => {
            event.preventDefault();

            const powUz = document.querySelector(".js-PU");
            const cenaOdMetra = 250;
            const cena = cenaOdMetra * powUz.value;
            const finalPrice = document.querySelector(".js-finalPrice");
            finalPrice.innerText = cena;
        });
    }

    calculatePrice();
}