const colorSelect = document.getElementById("colorSelect"); // Get the dropdown list element

document.querySelector('input[type="button"]').addEventListener("click", function() { // Add an event listener to the button
  colorSelect.remove(colorSelect.selectedIndex); // Remove the selected option from the dropdown list
});
