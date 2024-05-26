document.addEventListener('DOMContentLoaded', function() {
    const alert = document.querySelector('.alert');
    const form = document.querySelector('.grocery-form');
    const grocery = document.getElementById('grocery');
    const submitBtn = document.querySelector('.submit-btn');
    const groceryContainer = document.querySelector('.grocery-container');
    const groceryList = document.querySelector('.grocery-list');
    const clearBtn = document.querySelector('.clear-btn');
  
    form.addEventListener('submit', addItem);
    clearBtn.addEventListener('click', clearItems);
  
    function addItem(e) {
      e.preventDefault();
      const value = grocery.value;
      if (value) {
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        element.innerHTML = `<p class="title">${value}</p>
          <div class="btn-container">
            <button type="button" class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>`;
        const deleteBtn = element.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteItem);
        groceryList.appendChild(element);
        displayAlert('Item added to the list', 'success');
        groceryContainer.classList.add('show-container');
        setBackToDefault();
      } else {
        displayAlert('Please enter a value', 'danger');
      }
    }
  
    function displayAlert(text, action) {
      alert.textContent = text;
      alert.classList.add(`alert-${action}`);
      setTimeout(function() {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
      }, 1000);
    }
  
    function clearItems() {
      const items = document.querySelectorAll('.grocery-item');
      if (items.length > 0) {
        items.forEach(function(item) {
          groceryList.removeChild(item);
        });
      }
      groceryContainer.classList.remove('show-container');
      displayAlert('All items cleared', 'success');
    }
  
    function deleteItem(e) {
      const element = e.currentTarget.parentElement.parentElement;
      groceryList.removeChild(element);
      if (groceryList.children.length === 0) {
        groceryContainer.classList.remove('show-container');
      }
      displayAlert('Item removed', 'danger');
    }
  
    function setBackToDefault() {
      grocery.value = '';
    }
  });
  