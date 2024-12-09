class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}

const user1 = new User("Osama", "Ennabati", 21, "Treviso");
const user2 = new User("Alessandro", "Marconi", 23, "Venice");
const user3 = new User("Giovanni", "Battista", 21, "Roma");

console.log(user1.compareAge(user2));
console.log(user2.compareAge(user1));
console.log(user1.compareAge(user3));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase();
  }
}

const pets = [];

function addPet(event) {
    event.preventDefault(); 
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;

    const newPet = new Pet(petName, ownerName, species, breed);
    pets.push(newPet);

    displayPets();
   
}

function displayPets() {
    const petList = document.getElementById("petList");
    petList.innerHTML = "";
    pets.forEach((pet, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.textContent = `${pet.petName} - ${pet.ownerName} - ${pet.species} - ${pet.breed}`;

        const sameOwnerPets = pets.filter((otherPet, otherIndex) =>
            index !== otherIndex && pet.hasSameOwner(otherPet));

        if (sameOwnerPets.length > 0) {
            const sameOwnerInfo = document.createElement("small");
            sameOwnerInfo.className = "text-muted d-block mt-1";
            sameOwnerInfo.textContent = `Ha lo stesso padrone di: ${sameOwnerPets.map(sameOwnerPet => sameOwnerPet.petName).join(", ")}`;
            li.appendChild(sameOwnerInfo);
        }
        petList.appendChild(li);
    });
}

document.getElementById("petForm").addEventListener("submit", addPet);

const pet1 = new Pet("Buddy", "Giovanni", "Cane", "Golden Retriever");
const pet2 = new Pet("Max", "Alessandro", "Cane", "Labrador Retriever");
const pet3 = new Pet("Rex", "Giovanni", "Cane", "Golden Retriever");

console.log(pet1);
console.log(pet2);
console.log(pet3);

console.log(pet1.hasSameOwner(pet2));
console.log(pet1.hasSameOwner(pet3));
console.log(pet2.hasSameOwner(pet3));




