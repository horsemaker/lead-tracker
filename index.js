const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
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

// function saveLead() {
//   myLeads.push(inputEl.value)
//   inputEl.value = ''
//   localStorage.setItem('myLeads', JSON.stringify(myLeads))
//   renderLeads()
// }

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

function deleteLeads() {
  localStorage.setItem('myLeads', "[]")
  renderLeads()
}

deleteBtn.addEventListener('click', deleteLeads)
inputBtn.addEventListener('click', saveLead)
renderLeads()
