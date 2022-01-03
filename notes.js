const fs = require('fs')
const chalk = require('chalk');

function getNotes(){

}

const removeNote = (title) =>{
    const notes = loadNotes()

    finalNotes = notes.filter((note) =>(note.title !== title))
    if(notes.length > finalNotes.length){
        saveNotes(finalNotes)
        console.log(chalk.green("note removed!"))
    }else{
        console.log(chalk.red('title not found!'))
    }
    
}

const addNote = (title, body) => {
    const notes = loadNotes()

    duplicateNote = notes.find((note)=> note.title === title)

    if(!duplicateNote){
        notes.push({
            title:title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse('new note Added!'))
    }else{
        console.log(chalk.red.inverse('title already Taken!'))
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json',JSON.stringify(notes))
}

const loadNotes = () => {
    try{
        dataBuffer = fs.readFileSync('notes.json')
        dataArray = JSON.parse(dataBuffer.toString())
        return dataArray
    }catch{
        return []
    }

}
const listNotes = () =>{

    console.log(chalk.green.inverse('Notes list'))

    const notes = loadNotes()
    notes.forEach((note) => console.log(chalk.green(note.title)))
}

const readNote = (title) =>{

    const notes = loadNotes()
    note = notes.find((note)=> note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red.inverse('note not found!'))
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote
}