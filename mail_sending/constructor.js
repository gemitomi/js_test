const Person = function (name) {
    this.name = name;
    this.introduce = function() {
      console.log("Hello, a nevem " + this.name);
    };
  };
  const berry = new Person("Berry");
  berry.introduce(); 