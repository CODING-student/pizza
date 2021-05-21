menu_list_array = ["Pepperoni pizza", "regular cheese pizza", "mushroom and sausage pizza", "any pizza without pineapple"];
function getmenu(){
    var hungry;
hungry="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0; i<menu_list_array.length;i++){
    hungry=hungry+'<li>'+menu_list_array[i] + '</li>'
}
hungry + hungry + "</ol>"
document.getElementById("display_menu").innerHTML=hungry;
}
function add_item(){
    var hungry;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    hungry="<section class='cards'>"
    for(var i=0; i<menu_list_array.length;i++){
        hungry=hungry + '<div class="card">' + '<img src="images/pizzaImg.png">'+ menu_list_array[i] + '</div>'
    }
    hungry = hungry + "</section>"
    document.getElementById("display_addedmenu").innerHTML=hungry;

}