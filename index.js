const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const tabBtn = document.getElementById('tab-btn')
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('ul-el')

// localStorage.clear()

function renderLeads() {
  let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
  var listItems = ''
  for (let i = 0; i < leadsFromLocalStorage.length; i++) {
    listItems += `
        <li>
            <a target="_blank" href="${leadsFromLocalStorage[i]}">
                ${leadsFromLocalStorage[i]}
            </a>
        </li>
    `
  }
  ulEl.innerHTML = listItems
}

function saveLead() {
  if (inputEl.value) {
    if (localStorage.getItem('myLeads')) {
      let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
      leadsFromLocalStorage.push(inputEl.value)
      localStorage.setItem('myLeads', JSON.stringify(leadsFromLocalStorage))
    } else {
      localStorage.setItem('myLeads', JSON.stringify(Array(inputEl.value)))
    }
    inputEl.value = ''
    renderLeads()
  } else {
    return
  }
}

function saveTab() {
  let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    leadsFromLocalStorage.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(leadsFromLocalStorage))
    renderLeads()
  })
}

function deleteLeads() {
  localStorage.setItem('myLeads', '[]')
  renderLeads()
}

deleteBtn.addEventListener('click', deleteLeads)
tabBtn.addEventListener('click', saveTab)
inputBtn.addEventListener('click', saveLead)
renderLeads()
