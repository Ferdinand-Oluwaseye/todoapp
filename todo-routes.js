var express = require('express');
var router = express.Router();
var todoScheme = require('./todo-schema.js');


/*router.post('/createTodo', async (req, res, next) => {
    const todoItems = new todoScheme.TodoModel(req.body);

    try {
        const item = await todoItems.save();
        return res.status(201).send(item);
    } catch (error) {
        return next(error);
    }


});*/

router.post('/create', (req, res, next) => {
    const todoItems = new todoScheme.TodoModel(req.body);
    return todoItems.save().then(
        doc => res.status(201).send(doc),
        error => next(error)
    );
});

router.get('/allTodo', async (req, res) => {
    const todoItems = await todoScheme.TodoModel.find(req.params.title);
    res.status(200).send(todoItems);

}


);


router.delete('/deleteTodo', async(req,res) => {
    try {
        await todoScheme.TodoModel.findOneAndDelete(req.params.title);
        res.status(204).send;
    } catch (error) {
        console.log({ message: error.message});
        return;
    }

});



module.exports = router;