const employeeStatusContainer = document.querySelector(".employee-status-container");
const page1Next = document.querySelector(".page-1-next")
let softwareContainer = document.querySelector(".software-container")
let software = [
  "Act!",
  "Asset Book",
  "Bloom Growth",
  "BombBomb",
  "Cell Trust",
  "ClickUp",
  "Design Software",
  "Dropbox",
  "Fidelity",
  "FileMaker",
  "Google Drive",
  "HubSpot",
  "OneDrive",
  "OpenPath",
  "ProSeries",
  "QuickBooks",
  "RedBlack",
  "RedTail",
  "RiskAlyze",
  "Schwab–Advisor",
  "SureLC",
  "TD–ThinkPipes",
  "TD–Veo",
  "WordPress",
  "Zoom"
]

let appState = {
  currentPage: 1,
  employee: {},
  software: [
    "Act!",
    "AssetBook",
    "BloomGrowth",
    "BombBomb",
    "CellTrust",
    "ClickUp",
    "DesignSoftware",
    "Dropbox",
    "Fidelity",
    "FileMaker",
    "GoogleDrive",
    "HubSpot",
    "OneDrive",
    "OpenPath",
    "ProSeries",
    "QuickBooks",
    "RedBlack",
    "RedTail",
    "RiskAlyze",
    "Schwab–Advisor",
    "SureLC",
    "TD–ThinkPipes",
    "TD–Veo",
    "WordPress",
    "Zoom"
  ]
}


let loadSoftWare = function(programs) {
  let html = ''
  programs.forEach(program => {
    console.log(program)
    html+= `
      <div class="tech-item">
        <input data-id="${program}" class="computer-type page-2-empInfo" type="checkbox">
        <label for="">${program}</label>
      </div>
    `
  })
  softwareContainer.innerHTML = html
}

loadSoftWare(software)


// RADIO BUTTON SELECT ONLY ONE =============================
employeeStatusContainer.addEventListener("change", (e) => {
  let target = e.target
  document.querySelectorAll(".employee-type").forEach((item) => {
    item.checked = false
  })
  target.checked = true
})

page1Next.addEventListener("click", () => {
  // SHOW LOADING =========
  // loading.style.display = "flex"


  
  let empObj = {}
  let empRadio = document.querySelectorAll(".emp-radio")
  let empInfo = document.querySelectorAll(".page-1-empInfo")

  empRadio.forEach(item => {
    // console.log(item.checked)
    if (item.type === 'radio' && item.checked === true) {
      empObj["EmployeeType"] = item.dataset.id
    }
  })


  empInfo.forEach(item => {
    if(item.checked === true) {
      empObj[item.dataset.id] = "Yes"
    }
    if (item.classList.contains("input-text")) {
      if(item !== "") {
        empObj[item.dataset.id] = item.value
      }
    }
  })
  console.log(empObj)
  // appState.employee = empObj
  // console.log(appState)
  // page1.style.display = "none"

  // setTimeout(() => {
  //   loading.style.display = "none"
  // }, 500);
  // page2.style.display = "block"
  // appState.currentPage = appState.currentPage + 1

})