function crateCatTemplate(array) {

    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    let cats = [];

    for (let i = 0; i < array.length; i++) {
        let catInfo = array[i].split(' ');
        let [name, age] = [catInfo[0], catInfo[1]];

        cats.push(new Cat(name, age));
    }

    for (let cat of cats) {
        console.log(cat.meow());
    }
}

crateCatTemplate(['Mellow 2', 'Tom 5']);