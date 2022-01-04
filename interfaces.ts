interface Student {
  name: string;
  id: number;
  isvalid: boolean;
  summary(): string;
}

const details = {
  name: 'Rakibul',
  id: 99,
  isvalid: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printDetails = (student: Student): void => {
  console.log(student.summary());
};

printDetails(details);
