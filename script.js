function submitBooking() {

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();

    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;

    const guests = document.getElementById("guests").value;
    const room = document.getElementById("room").value;

    const message = document.getElementById("booking-message");


    // Мэдээлэл дутуу эсэхийг шалгах
    if (
        name === "" ||
        phone === "" ||
        checkin === "" ||
        checkout === "" ||
        room === ""
    ) {

        message.textContent =
            "⚠️ Бүх шаардлагатай мэдээллийг бөглөнө үү.";

        return;
    }


    // Огноо шалгах
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);


    if (checkoutDate <= checkinDate) {

        message.textContent =
            "⚠️ Буцах өдөр нь ирэх өдрөөс хойш байх ёстой.";

        return;
    }


    // Амжилттай
    message.textContent =
        "✅ Таны захиалгын хүсэлт амжилттай илгээгдлээ!";


    console.log("Захиалгын мэдээлэл:");
    console.log("Нэр:", name);
    console.log("Утас:", phone);
    console.log("Ирэх:", checkin);
    console.log("Буцах:", checkout);
    console.log("Зочид:", guests);
    console.log("Байр:", room);
}
/* =========================
   NAVBAR SCROLL
========================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});
/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu.style.display === "flex") {

        menu.style.display = "none";

    } else {

        menu.style.display = "flex";

    }

}