function OrderClick(){
    document.getElementById("lblCustomer").innerHTML = document.getElementById("txtName").value;
    document.getElementById("lblMobile").innerHTML = document.getElementById("txtMobile").value;
    var imgMeal = document.getElementById("imgMeal");
    var mealName = "";
    var mealCost = 0;
    var optBurger = document.getElementById("optBurger");
    var optRoller = document.getElementById("optRoller");
    if(optBurger.checked){
        mealName = optBurger.value;
        mealCost = 120;
        imgMeal.src = "./images/kfc1.jpg";
    }
    if(optRoller.checked){
        mealName = optRoller.value;
        mealCost = 90;
        imgMeal.src = "./images/kfc2.jpg";
    }
    var adonName = "";
    var adOnCost = 0;

    var optKrusher = document.getElementById("optKrusher");
    var optWings = document.getElementById("optWings");

    if(optKrusher.checked) {
        adOnCost = 40;
        adonName += optKrusher.value + "<br>";
        mealCost = mealCost + adOnCost;
    }
    if(optWings.checked){
        adOnCost = 70;
        adonName += optWings.value + "<br>";
        mealCost = mealCost + adOnCost;
    }

    document.getElementById("lblMeal").innerHTML = mealName;
    document.getElementById("lblAdOn").innerHTML = adonName;
    document.getElementById("lblTotal").innerHTML = `&#8377; ${mealCost}`;


}