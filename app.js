
const notes = require('./notes.js');
const yargs = require('yargs');

// Create add command 
yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
        title:{
            describe:'Note title',
            type: 'string',
            demandOption:true
        },
        body:{
            describe:"Note Body",
            type:'string',
            demandOption: true
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
});
// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe:"Note Title",
            type: 'string',
            demandOption: true
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
});

// Create a list command
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler(){
        notes.listNotes()
    }
});

// create a read command
yargs.command({
    command: 'read',
    describe: 'read note',
    builder:{
        title:{
            describe:'Note title',
            type:'string',
            demandOption: true
        }  
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
});
yargs.parse()
// console.log(yargs.argv);