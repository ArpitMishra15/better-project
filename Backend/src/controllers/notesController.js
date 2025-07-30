import Note from "../models/Note.js";
// Showing
export async function getAllNotes (req, res) {
   try {
    const notes = await Note.find().sort({createdAt: -1});
    res.status(200).json(notes);
   } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({message: "Internal server error"});
   }
}

//To fetch notes by Id
export async function getNoteById(req, res) {
    try {
        const noteById = await Note.findById(req.params.id);
        if (!noteById) return res.status(404).json({message: "Note not found!"});

        res.json(noteById);
    } catch (error) {
        console.error("Error in getNoteById controller", error);
    res.status(500).json({message: "Internal server error"});
    }    
}

// Creating Note
export async function createNote (req, res)  {
    try {
        const {title, content} = req.body
        const newNote = new Note ({title: title, content: content})

        await newNote.save()
        res.status(201).json({message: "Note created successfully"})
    } catch (error) {console.error("Error in createNote controller", error);
    res.status(500).json({message: "Internal server error"});
    }
}

// Updating Notes
export async function updateNote (req, res) {
    try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title, content},                                // Using it to find the id of the note and update
            {new: true})                                                                                                // gives value it after the update was applied
        res.status(200).send("Your Notes Updated");
        
        if(!updatedNote) return res.status(404).json({message: "Note not found"})                                        // if  doesn't find a matching note(id)

    } catch (error) {console.error("Error in updateNote controller", error);
    res.status(500).json({message: "Internal server error"});
    }
}

// Deleting Notes
export async function deleteNote  (req, res)  {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Note deleted!"});
        if(!deletedNote) return res.status(404).json({message: "Note not found"});
    } catch (error) {console.error("Error in deleteNote controller", error);
    res.status(500).json({message: "Internal server error"});
    }
}
