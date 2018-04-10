const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const express_graphql = require("express-graphql");
const { buildSchema } = require("graphql");
const schema = buildSchema(`
        type Query {
            course(id: Int!): Course
            courses(topic: String): [Course]
        },
        type Mutation {
            updateCourseTopic(id: Int!, topic: String!): Course
        },
        type Course {
            id: Int
            title: String
            author: String
            description: String
            topic: String
            url: String
        }
`);

const coursesData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Andrew Mead, Rob Percival',
        description: 'Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs/'
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: 'Learn by example building & deploying real-world Node.js applications from absolute scratch',
        topic: 'Node.js',
        url: 'https://codingthesmartway.com/courses/nodejs-express-mongodb/'
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        author: 'Anthony Alicea',
        description: 'An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.',
        topic: 'JavaScript',
        url: 'https://codingthesmartway.com/courses/understand-javascript/'
    }
]

const getCourse = (args) => {
    const id = parseInt(args.id);
    return coursesData.filter(course => {
        return course.id === id;
    })[0];
}

const getCourses = (args) => {
    if(args.topic){
        const topic = args.topic;
        return coursesData.filter(course => course.topic === topic);
    } else {
        return coursesData;
    }
}

const updateCourseTopic = ({ id, topic }) => {
    coursesData.map(course => {
        if(course.id === id) {
            course.topic = topic;
            return course;
        }
    });

    return coursesData.filter( course => course.id === id) [0];
}

const gqRoot = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic
};

const apiRoutes = require("./routes/apiRoutes");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


// Serve up static assets
app.use(express.static("../client/build"));




app.use("/api/graphql", express_graphql({
    schema: schema,
    rootValue: gqRoot,
    graphiql: true
}));

app.use("/api/", apiRoutes);

// Add routes, both API and view
// app.use(routes);

// Set up promises with mongoose
// Connect to the Mongo DB

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});