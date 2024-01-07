document.addEventListener("DOMContentLoaded", function() {
    const stopInput = document.getElementById('stopInput');
    const stopsList = document.getElementById('stopsList');

    stopInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent form submission

            const stopText = stopInput.value.trim();
            if (stopText) {
                const listItem = document.createElement('li');
                listItem.textContent = stopText;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'delete-btn';
                deleteButton.onclick = function() {
                    stopsList.removeChild(listItem);
                };
                listItem.appendChild(deleteButton);
                stopsList.appendChild(listItem);
                stopInput.value = ''; // Clear input for next entry
            }
        }
    });
});
function isNumber(evt) {
    let charCode = (evt.which) ? evt.which : evt.keyCode;
    if ((charCode != 46 || evt.target.value.indexOf('.') !== -1) && // Check if the character is a dot and there is no existing dot in the input
      (charCode < 48 || charCode > 57)) { // Check if the character is not a number
      evt.preventDefault();
      return false;
    }
    return true;
  }
  