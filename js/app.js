document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")
  form.addEventListener("submit", handleFormSubmit)

  const deleteButton = document.querySelector(".delete-button")
  deleteButton.addEventListener("click", deleteContent)

})

const handleFormSubmit = function (event) {
  event.preventDefault()
  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value
  const createListItem = document.createElement("li")
  createListItem.classList.add('list-card')
  const createCardTitle = document.createElement("h2")
  createCardTitle.textContent = `${title}`
  const createCardContent = document.createElement("p")
  createCardContent.textContent = `author: ${author} category: ${category}`
  const list = document.querySelector("#reading-list")
  list.appendChild(createListItem)
  createListItem.appendChild(createCardTitle)
  createListItem.appendChild(createCardContent)
}

const deleteContent = function () {
  const list = document.querySelector("#reading-list")
  list.innerHTML = ""
  console.log(list)
}


