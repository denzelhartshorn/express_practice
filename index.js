const express = require('express');
const app = express()

// different requests
// app.get() -- getting data
// app.post() -- creating data
// app.put() -- updating data
// app.delete() -- deleting data

app.use(express.json());

const courses = [
    { id: 1, name: 'course1'},
    { id: 2, name: 'course2'},
    { id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('hello world');
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

app.post('/apit/courses', (req, res) => {
    const { error } = validateCourse(req.body); //result.error
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    if(!req.body.name || req.body.name.length < 3) {
        //400 bad request
        res.status(400).send(result.err)
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(eq.params.id));
    if (!course) res.status(404).send('we couldnt find your shit');
    
    
    const { error } = validateCourse(req.body); //result.error
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    

    const schema ={
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    //in invalid, reutrn 400 - bad request 
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    //update course
    course.name = req.body.name
    //return the updated course
    Response.send(course);
});

function validateCourse(course) {
    const schema ={
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(eq.params.id));
    if (!course) res.status(404).send('we couldnt find your shit');
    res.send(course);
});

//PORT
const port = process.env.PORT || 3000
//correct way to summon a listening port to your environment

app.listen(port, () => console.log(`listening on port ${port}...`))
// '/' = root of website, (callback function request (req) & response (res))

app.delete('/api/course/:id', (req, res) => {
    //look up course
    let course = courses.find(c => c.id === parseInt(eq.params.id));
    //if not found return invalid
    if (!course) res.status(404).send('we couldnt find your shit');

    //delete
    const index = courses.indexOf(course)
    courses.splice(index, 1);

    //return the same course
    res.send(courseObject)

})