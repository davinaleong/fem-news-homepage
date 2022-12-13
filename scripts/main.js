console.log(`main.js loaded.`)

// Variables
const dataOpenAttr = `data-open`

const primaryHeaderEl = document.querySelector(
  `[data-element="primary-header"]`
)
const primaryHeaderToggleMenuEl = document.querySelector(
  `[data-element="primary-header-menu-icon"]`
)
const primaryHeaderToggleCloseEl = document.querySelector(
  `[data-element="primary-header-close-icon"]`
)

primaryHeaderToggleMenuEl.addEventListener(`click`, (event) => {
  primaryHeaderEl.setAttribute(dataOpenAttr, true)
})

primaryHeaderToggleCloseEl.addEventListener(`click`, (event) => {
  primaryHeaderEl.removeAttribute(dataOpenAttr)
})
