// Добавляем прослушку на всем окне
window.addEventListener('click', function (event) {

    // Переменная для счетчика
    let counter;

    // Проверяем клик строго по кнопкам Плюс либо Минус
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        // Обёртка счётчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Див с числом счетчика
        counter = counterWrapper.querySelector('[data-counter]');
    }


    // Проверяем, является ли элемент, по которому был клик, кнопкой Плюс
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }

    // Проверяем, является ли элемент, по которому был клик, кнопкой Минус
    if (event.target.dataset.action === 'minus') {
        // Проверяем, чтобы счётчик был > 1
        if (parseInt(counter.innerText) > 1) {
            // Изменяем текст в счетчике, уменьшая его на 1
            counter.innerText = --counter.innerText;
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // Проверка на товар, который находится в корзине
            // console.log('IN CART!');
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // Отображение статуса корзины Пустая/Полная
            toggleCartStatus();

            // Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery();

        }
    
    }   

    // Проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();

    }
});


