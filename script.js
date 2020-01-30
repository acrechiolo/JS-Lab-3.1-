class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let myNewContact = new Contact(name, email, phone, relation);
    this.contacts.push(myNewContact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
}

let addressBook = new AddressBook();

addressBook.add(
  "Snake Man",
  "imasnakeman@gmail.com",
  "313.454.5555",
  "some weirdo"
);
addressBook.add(
  "Alyssa Crechiolo",
  "alyssacrechiolo@gmail.com",
  "810.552.7077",
  "Me"
);
addressBook.add(
  "Roniya Rojan",
  "ronirojan@gmail.com",
  "734.450.5522",
  "Friend"
);

addressBook.add(
  "Kristi Byrnes",
  "kristibyrnes@gmail.com",
  "917.502.5107",
  "Best Friend"
);

addressBook.add(
  "Randi Hudson",
  "randihudson@gmail.com",
  "313.555.5107",
  "Friend"
);
addressBook.add(
  "Ricky LaFleur",
  "conkymustdie@gmail.com",
  "1.333.444.5555",
  "Trailer Park Boy"
);

addressBook.deleteAt(0);

const print = function(addressBookReference) {
  addressBookReference.contacts.forEach(contact => {
    console.log(contact);
  });
};

print(addressBook);
