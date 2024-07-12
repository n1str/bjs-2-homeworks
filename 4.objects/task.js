function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = []; 
  }

  Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
  };
  
  Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks) {
      this.marks.push(...marksToAdd);
    }
  };

  Student.prototype.getAverage = function() {
    if (this.marks && this.marks.length > 0) {
      return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    }
    return 0; 
  };

  Student.prototype.exclude = function(reason) {
    this.subject = undefined;
    this.marks = undefined;
    this.excluded = reason;
  };
