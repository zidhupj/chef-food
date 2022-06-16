const screen = document.querySelector(".screen");
const startBooking = () => {
    screen.style.display = "grid";
}
const closeBooking = () => {
    screen.style.display = "none";
}
const book = () => {
    alert("Booking Successful");
    screen.style.display = "none";
}