let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

function saveLead() {
  myLeads.push(inputEl.value)
}

inputBtn.addEventListener('click', saveLead)
