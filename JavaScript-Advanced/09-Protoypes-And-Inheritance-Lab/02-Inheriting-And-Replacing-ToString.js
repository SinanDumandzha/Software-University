function toStringExtension() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let result = `Person (name: ${this.name}, email: ${this.email})`;

            if (this.constructor.name === 'Student') {
                result = `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;
            }

            if (this.constructor.name === 'Teacher') {
                result = `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
            }
            return result;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}