import { Note } from "./Note.js";
const inputForm = document.querySelector('.form');
const list = document.querySelector('.list');
const input = document.querySelector('.form__input')
const startNotes = [
  'Sleep',
  'Eat',
  'Sleep'
];

function AddNote(item) {
  // create new note
  const card = new Note(item);
  const cardElement = card.generateNote()
  list.prepend(cardElement)
}


const handleSubmit = (evt) => {
  evt.preventDefault()
  AddNote(input.value)
  input.value = ''
}

inputForm.addEventListener('submit', handleSubmit);

startNotes.forEach((item) => {
  AddNote(item)
})

