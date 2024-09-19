const course={
    coursename:"javascript",
    courseid: 123,
    coursefee: 10000,
    instructor:{
        name:"pawan",
        id:123
    }
}

const {instructor}= course
console.log(instructor.name, instructor.id)