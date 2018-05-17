const cat = document.getElementById("cat");
const counter = document.getElementById("counter");
let count = 0;

const catname1 = document.getElementById("catname1");
const catname2 = document.getElementById("catname2");

catname1.innerHTML = "I'm cat one";
catname2.innerHTML = "I'm cat two";

cat.onclick = function () {
    count += 1;
    counter.innerHTML = "Number of clicks: " + count;
};

const cat2 = document.getElementById("cat2");
const counter2 = document.getElementById("counter2");
let count2 = 0;
cat2.onclick = function () {
    count2 += 1;
    counter2.innerHTML = "Number of clicks: " + count2;
};
