function cutoff(){
    let M=document.getElementById("maths").value;
    let P=document.getElementById("physics").value;
    let C=document.getElementById("chemistry").value;
    let m=parseFloat(M);
    let p=parseFloat(P);
    let c=parseFloat(C);
    let co=m+(p+c)/2;
if (M < 0 || M > 100 || P < 0 || P > 100 || C < 0 || C > 100) {
    document.getElementById("result").innerHTML =
        "<h1 id='res4'>Invalid Marks</h1>";
}

     else if (co >= 0 && co <= 100) {
    document.getElementById("result").innerHTML =
        "<h1 id='res1'>Cutoff Marks: " + co + "</h1>";
}
else if (co >= 101 && co <= 150) {
    document.getElementById("result").innerHTML =
        "<h1 id='res2'>Cutoff Marks: " + co + "</h1>";
}
else if (co >= 151 && co <= 200) {
    document.getElementById("result").innerHTML =
        "<h1 id='res3'>Cutoff Marks: " + co + "</h1>";
}
else {
    document.getElementById("result").innerHTML =
        "<h1 id='res4'>Invalid Marks</h1>";
}
}