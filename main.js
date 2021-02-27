var ebookpages = ["https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12-1.png" , 
                  "https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12-2.png" , 
                  "https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12-3.png" , 
                  "https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12-4.png" , 
                  "https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12-5.png" , 
                  "https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12-6.png" , 
                  "https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12-7.png" , 
                  "https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12-8.png" , "https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12-9.png"];
var i = 0;
function ebookNext() { 

  if(i == 9)
  {
    i=0;
  }

  document.getElementById("main-ebook").src = ebookpages[i];
  i++;

}
function ebookDownload() {
  window.open("https://shivampai.github.io/ncert-class6-science-electricity-and-circuits/NCERT-Books-for-class-6-Science-Chapter-12.pdf");
};
var points = 0;
var wrong = [""]
function checkans() {
  if(document.getElementById("I_one").value == "Switch" || "switch"){
    points = points + 1;
  } else {
    wrong.push("I question 1 Wrong . Correct Ans: Switch");
  }
  if(document.getElementById("I_two").value == "2"){
    points++;
  } else {
    wrong.push("I question 2 Wrong . Correct Ans: 2");
  }
  if(document.getElementById("tfans1").value == "True"){
    points++;
  } else {
    wrong.push("II question 1 Wrong . Correct Ans: True");
  }
  if(document.getElementById("tfans2").value == "False"){
    points++;
  } else {
    wrong.push("II question 2 Wrong . Correct Ans: False");
  }
  if(document.getElementById("tfans3").value == "False"){
    points++;
  } else {
    wrong.push("II question 3 Wrong . Correct Ans: False");
  }
  window.alert(points + " / 5");
  window.alert(wrong);
  points = 0;
}