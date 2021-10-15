const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

let myLeads = []

function renderLeads() {
  var listItems = ''
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
        <li>
            <a target="_blank" href="${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li>
    `
  }
  ulEl.innerHTML = listItems
}

function saveLead() {
  myLeads.push(inputEl.value)
  renderLeads()
  inputEl.value = ''
}

inputBtn.addEventListener('click', saveLead)
