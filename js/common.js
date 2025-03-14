document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", function (e) {
        cursor.style.left = `${e.pageX}px`; // 마우스 X 좌표
        cursor.style.top = `${e.pageY}px`; // 마우스 Y 좌표
    });

    // 클릭 가능한 요소 위에서 커짐

    document.querySelectorAll("a").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });
    });
    document.querySelectorAll(".skills-con").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.classList.add("active");
        });
        el.addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });
    });

    // 콘텐츠 영역에서 색상 반전
    document.querySelectorAll(".content-area").forEach((el) => {
        el.addEventListener("mouseenter", () => {
            cursor.style.backgroundColor = "white";
        });
        el.addEventListener("mouseleave", () => {
            cursor.style.backgroundColor = "black";
        });
    });
});
