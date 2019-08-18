const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todolist', { useNewUrlParser: true });

const taskSchema = new mongoose.Schema({
    task: 'string',
})

const Tasks = mongoose.model('tasks', taskSchema);


// // for testing
// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     const entry = new Tasks({
//         task: 'Get this app to work!',
//     })
//     const entry2 = new Tasks({
//         task: 'Get this app to work as well!',
//     })
//     entry.save()
//     .then(() => {
//         return entry2.save();
//     })
//     .then(result => {
//         console.log('entry 2 saved');
//         console.log(Tasks);
//         res.json(result);
//     })
//     .catch(err => {
//         throw err;
//     });

// })

// app.listen(3000);
