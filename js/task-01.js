const categoriesValue = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesValue.length}`);
categoriesValue.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll(`li`).length}`);
});
