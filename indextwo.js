let input = document.querySelector(".inputOne");
let btn = document.querySelector(".btnOne");
let list = document.querySelector(".list");

let arr = [];
btn.addEventListener("click", () => {
  arr.push({
    name: input.value,
  });
  list.innerHTML = "";
  arr.map((item, index) => {
    list.innerHTML += `<li> ${index} ${item.name} <button  type="button" data-index="${index}" class="btnDel">delete</button> </li>`;
  });

  let btnDel = document.querySelectorAll(".btnDel");
  let btnArr = Array.from(btnDel);
  btnArr.map((item) => {
    item.addEventListener("click", () => {
      arr.splice(item.dataset.index, 1);
      list.innerHTML = "";
      arr.map((item, index) => {
        list.innerHTML += `<li> ${index} ${item.name} <button  type="button" data-index="${index}" class="btnDel">delete</button> </li>`;
      });
    });
  });
});
