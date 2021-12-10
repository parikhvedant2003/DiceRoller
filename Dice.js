function RollTheDice()
{
    // Method -> 1 // Accurate Method
    
    var RandomNumber = Math.floor(Math.random() * 6) + 1;
    var Number = document.getElementById("random");
    
    Number.innerHTML = RandomNumber;
    
    if (RandomNumber == 1)
    {
        document.getElementById("myImg").src = "Dice-1.svg";
    }
    if (RandomNumber == 2)
    {
        document.getElementById("myImg").src = "Dice-2.svg";
    }
    if (RandomNumber == 3)
    {
        document.getElementById("myImg").src = "Dice-3.svg";
    }
    if (RandomNumber == 4)
    {
        document.getElementById("myImg").src = "Dice-4.svg";
    }
    if (RandomNumber == 5)
    {
        document.getElementById("myImg").src = "Dice-5.svg";
    }
    if (RandomNumber == 6)
    {
        document.getElementById("myImg").src = "Dice-6.svg";
    }

    // Method -> 2 // Simple Method

    // var d = new Date;
    // var RandomNumber = (d.getSeconds() % 6) + 1;
    // var Number = document.getElementById("random");

    // Number.innerHTML = RandomNumber;

    // if (RandomNumber == 1)
    // {
    //     document.getElementById("myImg").src = "Dice-1.svg"; // You can put image as your choice.
    // }
    // if (RandomNumber == 2)
    // {
    //     document.getElementById("myImg").src = "Dice-2.svg";
    // }
    // if (RandomNumber == 3)
    // {
    //     document.getElementById("myImg").src = "Dice-3.svg";
    // }
    // if (RandomNumber == 4)
    // {
    //     document.getElementById("myImg").src = "Dice-4.svg";
    // }
    // if (RandomNumber == 5)
    // {
    //     document.getElementById("myImg").src = "Dice-5.svg";
    // }
    // if (RandomNumber == 6)
    // {
    //     document.getElementById("myImg").src = "Dice-6.svg";
    // }

}