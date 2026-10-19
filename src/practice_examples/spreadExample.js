// Spread operator
let students = ["Matt", "Daniel", "Bryan"];
let copiedStudents = [...students, ...students, ...students];

// Array would now be ["Matt", "Daniel", "Bryan" "Matt", "Daniel", "Bryan" "Matt", "Daniel", "Bryan"]


userData = {
    user:"Matt",
    age:19,
    food:"Pizza"
}

//et userName = userData.name;
//let userAge = userData.age;
//let food = userdata.food;

let {userName, userAge, food} = userData;
