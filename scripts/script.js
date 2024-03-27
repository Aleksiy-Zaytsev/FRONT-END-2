console.log(typeof 0);

let name = prompt("What is your name?")?.trim();

while (!name || Number(name) || name == 0) {
  alert("Incorrect name");
  name = prompt("What is your name?")?.trim();
}

let age = Number(prompt("What is your age?"));

while (!age || age < 1) {
  alert("incorrect age");
  age = Number(prompt("What is your age?"));
}

const smoke = confirm("Do you smoke?");
console.log({ name, age, smoke });

if (age < 18) {
  console.log(
    smoke
      ? `${name}, а твої батьки знають про це?`
      : `Молодець ${name}! Гарний приклад для своїх однолітків`
  );
} else {
  console.log(
    smoke
      ? `Що ж ${name}, це твій вібір. Але я не радив би курити`
      : `Супер ${name}! Мабуть ще й спортом займаєшся!`
  );
}
