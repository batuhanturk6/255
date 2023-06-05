var info = ["T-shirt", "Sweatshirt", "Tracksuit", "Dress", "Sneakers", "Skirt","Boot","Coats", "Bag","Hat"];

var desc = [
    "Add casual chic to your look with this trendy t-shirt, featuring a comfortable fit and cool design as an essential wardrobe item...  ",
    "Stay cozy and stylish with this trendy sweatshirt, providing warmth and fashion-forward flair with a relaxed fit and modern design...",
    "Elevate your athleisure game with this sleek tracksuit, offering comfort and style with a contemporary silhouette and high-quality...",
    "This dress combines style and comfort effortlessly, with a flattering silhouette and exquisite details for any occasion...           ",
    "Step up your sneaker game with these stylish kicks, balancing comfort and trendiness with a modern design and durability...          ",
    "Embrace your feminine side with this chic skirt, combining style and versatility with a flattering silhouette and on-trend pattern...",
    "Complete your outfit with these fashionable boots, featuring a sleek design and high-quality craftsmanship for style and comfort...  ",
    "Stay warm and stylish with this elegant coat, crafted from premium materials, offering timeless design and superior quality...       ",
    "Carry your essentials in style with this trendy bag, designed with practicality and fashion in mind, featuring functional details... ",
    "Top off your look with this fashionable hat, offering sun protection and a trendy touch with a functional and stylish design...      ",
];

console.log(info[2]);

var score=0;
var sc;
var count=0;

var arr = [250,350,800,700,1000,900,600,1300,500,100]; //the prices of items

$(document).ready(function() {
    var firstButtonClicked = false;
    var secondButtonClicked = false;

    $("#firstbtn").click(function(){
        if (!firstButtonClicked && !secondButtonClicked) {
            firstButtonClicked = true;
            secondButtonClicked = true;

            if(arr[count] < arr[count+1]){
                $("#firstcard").css("border", "6px solid red");
                var img = document.querySelector("#firstimg");
                img.setAttribute("src","./image/game/cross1.png");
            }
            else{
                $("#firstcard").css("border", "6px solid rgb(31, 255, 31)");
                score++;
                $("#scoreText").text("Score : " + score);
                var img = document.querySelector("#firstimg");
                img.setAttribute("src","./image/game/check1.png");
            }

            setTimeout(function() {
                firstButtonClicked = false;
            }, 1000);
            count++;
        }
        else{
            alert("You Can NOT Click More Than One Button!!!");
        }
    });

    $("#secondbtn").click(function(){
        if (!secondButtonClicked && !firstButtonClicked) {
            secondButtonClicked = true;
            firstButtonClicked = true;

            if(arr[count] > arr[count+1]){
                $("#secondcard").css("border", "6px solid red");
                var img = document.querySelector("#secondimg");
                img.setAttribute("src","./image/game/cross1.png");
            }
            else{
                $("#secondcard").css("border", "6px solid rgb(31, 255, 31)");
                score++;
                $("#scoreText").text("Score : " + score);
                var img = document.querySelector("#secondimg");
                img.setAttribute("src","./image/game/check1.png");
            }

            setTimeout(function() {
                secondButtonClicked = false;
            }, 1000); 
            count++;
        }
        else{
            alert("You Can NOT Click More Than One Button!!!");
        }
    });

    $("#next").click(function(){
        if(count < arr.length-1){
        if (firstButtonClicked || secondButtonClicked) {
                secondButtonClicked = false;
                firstButtonClicked = false;
                $("#firstcard").css("border", "2px solid grey");
                var img1 = document.querySelector("#firstimg");
                img1.setAttribute("src","./image/game/img" + (count+1) + ".jpeg");
                $("#firstheader").text(info[count]);
                $("#firsttext").text(desc[count]);

                $("#secondcard").css("border", "2px solid grey");
                var img2 = document.querySelector("#secondimg");
                img2.setAttribute("src","./image/game/img" + (count+2) + ".jpeg");
                $("#secondheader").text(info[count+1]);
                $("#secondtext").text(desc[count + 1]);
        }
        else{
            alert("You Can't Continue Without Clicking More Expensive Button!!!");
        }
    }
    else{
        $("#container").hide("3000");
        $("#first").hide("3000");
        $("#scoreText").hide("3000");
        $("#next").hide("3000");
        $("#gameOver").show("2000");
        $("#overtext").text("Your Total Score : " + score);

        $("#playagain").click(function() {
            location.reload();
        });
    }
    });
});
