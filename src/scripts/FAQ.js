function toggleAccordion(index) {
    const contents = document.querySelectorAll(".faq-content");
    contents.forEach((content, i) => {
        if (i === index) {
            content.classList.toggle("hidden");
        } else {
            content.classList.add("hidden");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".accordion-toggle");
    const icons = document.querySelectorAll(".accordion-icon");
    
    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const content = this.nextElementSibling;
            content.classList.toggle("hidden");
            
            icons[index].textContent = content.classList.contains("hidden") ? "▼" : "▲";
        });
    });
});
