
let random=Math.floor(Math.random()*10)+1;
console.log(random);

function Guess(){
var guess=parseFloat(document.getElementById("guess").value);


if(guess==random){

    // alert("Congratulations! You guessed the number is Correct")
    showSuccess();

}else{
    // alert("Try again the number is Incorrect")
    showError();
}

}

function showSuccess() {
    Swal.fire({
      title: "🎉 Correct Guess!",
      text: "You guessed the right number!",
      icon: "success",
      confirmButtonColor: "#673ab7"
    });
  }

  function showError() {
    Swal.fire({
      title: "❌ Wrong Guess",
      text: "Try again!",
      icon: "error",
      confirmButtonColor: "#d33"
    });
  }

