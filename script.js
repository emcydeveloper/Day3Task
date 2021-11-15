let jsonResume = {
  name: "Ganesh Kanna",
  tableHeading: ["Course", "Year", "INSTITUTION", "BOARD_UNIVERSITY"],
  EDUCATIONAL_QUALIFICATION: {
    UG: {
      Course: "BSC Cs",
      Year: "2007-2010",
      INSTITUTION: "AM. Jain College",
      BOARD_UNIVERSITY: "University of Madras",
    },
    HSC: {
      Course: "Computer Science",
      Year: "2005-2006",
      INSTITUTION: "St Johns MHSS",
      BOARD_UNIVERSITY: "Matriculation",
    },
    SSLC: {
      Course: "Computer Science",
      Year: "2002-2003",
      INSTITUTION: "St Johns MHSS",
      BOARD_UNIVERSITY: "Matriculation",
    },
  },
};

let tableHeading = jsonResume.tableHeading;
let tableData = jsonResume.EDUCATIONAL_QUALIFICATION;
// console.log(typeof(tableHeading[0]));
let divID = document.getElementById("getData");

let headingText = document.createElement("div");
let brTag1 = document.createElement("hr");
let brTag2 = document.createElement("hr");
let brTag3 = document.createElement("hr");
headingText.style.textAlign = "center";
headingText.innerHTML =
  "<div><h1>Below data generated using DOM with combination of foreach and for in loop<h1></div>";
divID.append(headingText);

let createTable = document.createElement("table");
let createTableRow = document.createElement("tr");
createTable.setAttribute("id", "myTable");
createTable.style.marginLeft = "auto";
createTable.style.marginRight = "auto";
createTable.style.border = "solid 1px";
createTable.style.borderCollapse = "collapse";

// creating header for table using forEach
tableHeading.forEach((heading) => {
  // console.log(heading);
  let tableHead = document.createElement("th");
  let headText = document.createTextNode(heading);
  tableHead.style.border = "solid 1px";
  tableHead.style.borderCollapse = "collapse";
  tableHead.appendChild(headText);
  createTableRow.appendChild(tableHead);
});

createTable.appendChild(createTableRow);

// adding data to table from JSON usin for in
for (let data in tableData) {
  let row = document.createElement("tr");
  row.style.border = "solid 1px";
  row.style.borderCollapse = "collapse";

  let get = tableData[data];
  console.log(get);
  for (split in get) {
    // console.log(get[split])

    let tableDivison = document.createElement("td");
    tableDivison.style.border = "solid 1px";
    tableDivison.style.borderCollapse = "collapse";
    let fdata = document.createTextNode(get[split]);
    // createTableRow.appendChild(get[split]);
    tableDivison.appendChild(fdata);
    row.appendChild(tableDivison);
    createTable.appendChild(row);
  }
}

divID.appendChild(createTable);
divID.append(brTag1);

// for loop

let myName = jsonResume.name;
let headingTextFor = document.createElement("div");
headingTextFor.style.textAlign = "center";
headingTextFor.innerHTML = "<h1>Using for loop on Name (GaneshKanna)</h1>";
divID.append(headingTextFor);

for (let i = 0; i < myName.length; i++) {
  let namePara = document.createElement("p");
  console.log(myName[i]);
  namePara.innerHTML = myName[i];
  divID.appendChild(namePara);
}
divID.append(brTag2);

// for of loop
let headingTextForOf = document.createElement("div");
headingTextForOf.style.textAlign = "center";
headingTextForOf.innerHTML = "<h1>Using for of loop on Name (GaneshKanna)</h1>";
divID.append(headingTextForOf);

for (nameText of myName) {
  
  let namePara = document.createElement("p");
  console.log(nameText);
  namePara.innerHTML = nameText;
  divID.appendChild(namePara);
}
divID.append(brTag3);
