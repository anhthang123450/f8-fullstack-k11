function hourClock() {
    const newYear = new Date("2026-01-01T00:00:00");
    const now = new Date();
    const totalSeconds = Math.floor((newYear - now) / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);
    document.body.innerHTML = "";
    document.write(
        `Còn ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây là đến tết 2026 `
    );
}
setInterval(hourClock, 1000);
