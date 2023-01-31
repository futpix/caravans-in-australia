$(document).ready(function () {
  $(".carousel").carousel({
    interval: 2000,
  });

  $("#exampleModal").on("shown.bs.modal", function () {
    $("#myInput").trigger("focus");
  });

  // THIS PUTS A SEE ALSO LINK AFTER EVERY 2nd H2 In POST
  $(function () {
    var $images = $("#images > .midArticle");

    $(".articleWrapper > h3:nth-child(3n+1)").each(function (i) {
      $(this).before($images.get(i));
    });
  });

  var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");

    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 700);
  };

  var bubblyButtons = document.getElementsByClassName("bubbly-button");

  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }

  var heightDiv = $(".articleWrapper").height();
  $(".extra").css({
    height: heightDiv - 1850,
  });
});

var stepTime = 20;
var docBody = document.body;
var focElem = document.documentElement;

var scrollAnimationStep = function (initPos, stepAmount) {
  var newPos = initPos - stepAmount > 0 ? initPos - stepAmount : 0;

  docBody.scrollTop = focElem.scrollTop = newPos;

  newPos &&
    setTimeout(function () {
      scrollAnimationStep(newPos, stepAmount);
    }, stepTime);
};

var scrollTopAnimated = function (speed) {
  var topOffset = docBody.scrollTop || focElem.scrollTop;
  var stepAmount = topOffset;

  speed && (stepAmount = (topOffset * stepTime) / speed);

  scrollAnimationStep(topOffset, stepAmount);
};
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

$(document).ready(function () {
  // Add minus icon for collapse element which is open by default
  $(".collapse.show").each(function () {
    $(this)
      .prev(".card-header")
      .find(".fa")
      .addClass("fa-minus")
      .removeClass("fa-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse")
    .on("show.bs.collapse", function () {
      $(this).prev(".card-header").find(".fa").html("-");
    })
    .on("hide.bs.collapse", function () {
      $(this).prev(".card-header").find(".fa").html("+");
    });
});
