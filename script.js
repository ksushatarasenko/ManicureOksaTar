// Увеличение картинки при клике
document.addEventListener('DOMContentLoaded', function () {
    var zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(function (img) {
        img.addEventListener('click', function () {
            // Удаляем класс 'zoomed' у всех других изображений
            zoomableImages.forEach(function (otherImg) {
                if (otherImg !== img) {
                    otherImg.classList.remove('zoomed');
                }
            });

            // Переключаем zoomed у текущего
            img.classList.toggle('zoomed');
        });
    });
});

