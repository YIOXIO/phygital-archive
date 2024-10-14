import './index.css'


    const tabs = document.querySelectorAll('.tabs__button');
    const panes = document.querySelectorAll('.tabs__pane');
    const buttons = document.querySelectorAll('.card__button');
    

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            tabs.forEach(t => t.classList.remove('tabs__button_is-active'));
            // Добавляем активный класс к текущей кнопке
            this.classList.add('tabs__button_is-active');

            // Скрываем все панели
            panes.forEach(pane => pane.classList.remove('tabs__pane_is-active'));
            // Показываем панель, соответствующую текущей вкладке
            const targetPaneId = this.getAttribute('data-tab');
            document.getElementById(targetPaneId).classList.add('tabs__pane_is-active');
        });
    });



        

    
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.card');
                const descriptionWrapper = card.querySelector('.card__description-wrapper');
                const cardImg = card.querySelector('.card__img');
                const cardInfo = card.querySelector('.card__info');


    
                descriptionWrapper.classList.toggle('card__description-wrapper_appear');
                button.classList.toggle('card__button_is-active');
                cardImg.classList.toggle('card__img_is-active');
                cardInfo.classList.toggle('card__info_is-active');

            });
        });
