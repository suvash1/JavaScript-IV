// CODE here for your Lambda Classes

class Person{
    constructor(props){
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

class Instructor extends Person{
    constructor(InstructorProps){
        super(InstructorProps);
        this.specialty = InstructorProps.specialty;
        this.favLanguage = InstructorProps.favLanguage;
        this.catchPhrase = InstructorProps.catchPhrase;
    }

    demo(subject){
        console.log(` Today we are learning about ${subject}`);
    }

    grade(student){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

}

class Studentt extends Person{
    constructor(Sattributes){
        super(Sattributes);
        this.previousBackground = Sattributes.previousBackground;
        this.className = Sattributes.className;
        this.favSubjects = Sattributes.favSubjects;
    }

    listsSubjects(favSubjects){
        favSubjects.forEach(function(element) {
            console.log(element);
        })
    }

    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject){
        console.log(`${this.name} has begun challenge on ${subject}`);
    }
}

class PM extends Instructor{
    constructor(PMprops){
        super(PMprops);
        this.gradClassName = PMprops.gradClassName;
        this.favInstructor = PMprops.favInstructor;
    }

    standUP(slackChannel){
        console.log(`${this.name} announces to ${slackChannel}, @channel standy times!`);
    }

    debugsCode(Student){
        console.log(`${this.name} debugs ${Student.name}`);
    }


}