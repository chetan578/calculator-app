//var add=document.querySelector("#add");
//var sub=document.querySelector("#sub");
//var mul=document.querySelector("#mul");
//var div=document.querySelector("#div");
var input1 =$("#x");
var input2 =$("#y");
//var addres=document.querySelector("#addres");
//var subres=document.querySelector("#subres");
//var mulres=document.querySelector("#mulres");
//var divres=document.querySelector("#divres");

$("#add").on("click",function()
{

var result=Number(input1.val())+Number(input2.val());
$("#addres").text(result);

});

$("#sub").on("click",function()
{
var result=Number(input1.val())-Number(input2.val());
$("#subres").text(result);
});

$("#mul").on("click",function()
{
var result=Number(input1.val())*Number(input2.val());
$("#mulres").text(result);

});

$("#div").on("click",function()
{
var result=Number(input1.val())/Number(input2.val());
$("#divres").text(result);
});

/*
add.addEventListener("click",function()
{
var result=Number(input1.value)+Number(input2.value);
addres.textContent=result;
});

sub.addEventListener("click",function()
{
var result=Number(input1.value)- Number(input2.value);
subres.textContent=result;
});

mul.addEventListener("click",function()
{
var result=Number(input1.value)*Number(input2.value);
mulres.textContent=result;
});

div.addEventListener("click",function()
{
var result=Number(input1.value)/Number(input2.value);
divres.textContent=result;
});
*/
