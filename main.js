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
}