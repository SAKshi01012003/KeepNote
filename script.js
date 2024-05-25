let template = document.getElementById("blueprint");
let addNoteButton = document.getElementById("addnote");
let samplenote = document.getElementsByClassName("samplenote");
let noteContainer = document.querySelector(".inner2");
let pageTemplate = document.getElementById("page");
const dialog = document.querySelector("dialog");
let pageTitle = dialog.querySelector(".pageTitle");
let pagetext = dialog.querySelector(".pagetext");
let saveBtn = dialog.querySelector("#save");
let deleteBtn= document.querySelector("#deleteBtn")
let currentNote = null;

function addNewNote() {
  currentNote = null;
  pageTitle.value = "";
  pagetext.value = "";
  dialog.showModal();
}

function saveNote() {
  let newNote;
  if (currentNote == null) {
    newNote = template.cloneNode(true);
    newNote.id = "";
    newNote.style.display = "block";
    noteContainer.appendChild(newNote);
  } else {
    newNote = currentNote;
  }
  let newNoteTitle = newNote.querySelector("#title");
  let newNotetext = newNote.querySelector(".noteContent");
  newNoteTitle.textContent = pageTitle.value;
  newNotetext.textContent = pagetext.value;

  dialog.close();
  currentNote = null;
}

function deleteNote(){
  let tempNote= currentNote
    noteContainer.removeChild(tempNote)
    currentNote=null;
}

noteContainer.addEventListener("click", function (event) {
    let note= event.target.closest('.samplenote')
    if(note && !event.target.matches("#deleteBtn")){
       currentNote= note
       let title= currentNote.querySelector("#title")
       let content= currentNote.querySelector(".noteContent")
       pageTitle.value= title.textContent
       pagetext.value=content.textContent
       dialog.showModal() 
    }
    if(event.target.matches("#deleteBtn")){
      currentNote=note
      alert("Are you sure you want to delete this note")
      deleteNote()
    }

});




addNoteButton.addEventListener("click", addNewNote);
saveBtn.addEventListener("click", saveNote);
