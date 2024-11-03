// Get a reference to the select element and the word links
const selectElement = document.querySelector('#dictionaries')
const linkElements = document.querySelectorAll('.word')
let dict_lbl = document.querySelector('#current_dict')

window.onload=window.onpageshow= function() {
   if ("createEvent" in document) {
        var evt = document.createEvent("HTMLEvents")
        evt.initEvent("change", false, true)
        selectElement.dispatchEvent(evt)
   }
   else {
        selectElement.fireEvent("onchange")
   }
}

// Save the current scroll position in the session storage when the page is unloaded
window.addEventListener("beforeunload", function () {
  sessionStorage.setItem("scrollTop", window.pageYOffset);
});

// Get the scroll position from the session storage when the page loads
window.addEventListener("load", function () {
  var scrollTop = sessionStorage.getItem("scrollTop");
  if (scrollTop) {
    window.scrollTo(0, scrollTop);
  }
});

// Add an event listener to the select element that updates the links when the user changes the selection
selectElement.addEventListener('change', () => {
  // Get the value of the selected option
  const selectedValue = selectElement.value
  const selectedText = selectElement[selectElement.selectedIndex].text
  dict_lbl.innerText = selectedText

  // Loop through the word links and update their URLs based on the selected value
  linkElements.forEach((linkElement) => {
    // Get the current URL of the word's link
    const currentUrl = linkElement.href
    const word = linkElement.textContent
    linkElement.href=selectedValue + word
    linkElement.target=""
  })
})
