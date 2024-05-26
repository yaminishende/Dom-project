document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.content');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const id = button.dataset.id;

            buttons.forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            contents.forEach(content => {
                content.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        });
    });
});