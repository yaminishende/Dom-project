document.querySelector('.lorem-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const amount = document.getElementById('amount').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://baconipsum.com/api/?type=all-meat&paras=${amount}&start-with-lorem=1`);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const loremText = data.join('<p>');
            document.querySelector('.lorem-text').innerHTML = loremText;
        }
    };
    xhr.send();
});
