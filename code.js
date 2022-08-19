var arrTitle = ["ברוכים הבאים ללומדה על מכות חום!", "איך אתם אוהבים את ההמבורגר שלכם?", "", "", "עזרו לבובספוג!", "", "", "העברה למקום מוצל", "הסרת שכבות בגדים", "הרטבת גוף הנפגע", "מה לדעתכם רוב האנשים הכי שונאים?", "החזרת נוזלים", "כל הכבוד! הצלחתם להציל את בובספוג!", "הוצבתם לשמירות בסרטן הפריך!", "", "עצרו את פלנקטון!", "", "הצלחתם לעצור את פלנקטון!", "כדורים הם מסוכנים!", "סיכום", "עכשיו עזרו לפטריק!", "גררו את פטריק למקום המתאים", "בחרו את כל הציוד המתאים", "גררו את החפצים לפי הסדר המתאים", "אופס..."];
var arrText = ["", "", "כולם מסכימים ש:", "מכת חום היא מצב שבו טמפרטורת הגוף עולה בצורה קיצונית כתוצאה מחשיפה לחום סביבתי גבוה או בעקבות מאמץ גופני.<br><br>או בדומה להמבורגר שרוף-", "בובספוג וסנדי יצאו לסיור על פני היבשה, אבל בובספוג שכח את קסדת המים שלו!<br> בגלל שהוא לא שתה כל היום ונחשף לחום השמש הלוהט על האי, בובספוג חטף מכת חום!", "שנו את המעלות במדחום כדי לגלות מה הייתה טמפרטורת הגוף של בובספוג!", "על מנת להציל נפגע ממכת חום יש לטפל בו ב-<p id='big-num'>4 שלבים<p>", "יש להעביר את הנפגע למקום מוצל וקריר.<br>אין להעביר את הנפגע למקום קר מידי על מנת שלא ייכנס למצב של היפותרמיה כתוצאה מהפרשי הטמפרטורות הקיצוניים.", "יש להסיר שכבות בגדים תוך שמירה על צנעת הפרט.", "יש לשפוך מים פושרים על פלג גופו העליון של הנפגע ולהרטיב את פניו.", "", "אם הנפגע נמצא בהכרה, יש לתת לו מים או נוזל לרה-הידרציה מסוג מינרלי או הידראן.<br>לאחר מכן יש לתת לו עירוי נוזל תוך ורידי.", "", "סרקו את השטח באמצעות סמן העכבר בשביל למצוא גורמים עוינים...", "", "יש לכם רובה עם שלושה כדורים, וסמן העכבר הוא הכוונת שלכם.<br> עליכם לפגוע בפלנקטון לפני שהוא מגיע למסעדת הדלי!", "", "אבל תראו איזה מסכן הוא...", "לעולם אל תתנו לנפגע ממכת חום כדורים להורדת חום.<br>במקרה זה הם לא יורידו את החום, והם עלולים אף להחמיר את הפגיעה באיברי הגוף.", "מכת חום היא מצב שבו טמפרטורת הגוף עולה מעל ל-40°c<br>על מנת לטפל בנפגע ממכת חום צריך:", "תראו את פטריק הטיפשון! בטח גם הוא שכח לשתות היום... תוכלו לעזור לו?", "", "", "", "מסתבר שפטריק סתם ישן...<br>אבל עשיתם עבודה טובה!"];
// array that includes the IDs of all the screens
var arrPagesContent = ["opening-screen", "first-page", "second-page", "third-page", "forth-page", "fifth-page", "sixth-page", "seventh-page", "eight-page", "ninth-page", "tenth-page", "eleventh-page", "twelfth-page", "thirteenth-page", "fourteenth-page", "fifteenth-page", "sixteenth-page", "seventeenth-page", "eighteenth-page", "nineteenth-page", "twentieth-page", "twenty-first-page", "twenty-second-page", "twenty-third-page", "twenty-fourth-page"];
var arrSlider = [false, false, false, true, true, true];
// array that contains the different images of spongebob in the slider. 
// the src position in the array matches the degree in the slider.
var arrSpongeImgSrc = ["assets/media/spongebob/happy_sponge.png", "assets/media/spongebob/worried_sponge.png", "assets/media/spongebob/worried_sponge.png", "assets/media/spongebob/red_sponge.png", "assets/media/spongebob/red_sponge.png", "assets/media/spongebob/sponge2.png"];
var arrSliderFeedbackSrc = ["assets/media/speech_bubble/37_feedback.png", "assets/media/speech_bubble/38_feedback.png", "assets/media/speech_bubble/39_feedback.png", "assets/media/speech_bubble/40_feedback.png", "assets/media/speech_bubble/40_feedback.png", "assets/media/speech_bubble/40_feedback.png"];
var arrSock = [false, false, true, false, false, false];
var arrEnvironment = [false, false, true];
var arrCard = [false, true, false, false, true];
var nPageCounter = 0;
var nThermoCounter = 0;
var runningPlankton;
var nBullets = 3;
var timer;
var min;
var sec;
var nTime;

// loading function
$(function() {
  init();
});

// loads elements and adds event listeners
function init() {
  $("img").attr("draggable", "false");
  $(".buttons").on("mouseover", function() {
    $(this).css({
      "z-index": "1",
      "height": "+=1vh",
      "width": "+=1vw"
    })
  })
  $(".buttons").on("mouseout", function() {
    $(this).css({
      "z-index": "0",
      "height": "-=1vh",
      "width": "-=1vw"
    })
  })
  // third page
  $("#burned-krabby-patty").on("mouseover", function() {
    $("#burned-hover-krabby-patty").css("display", "block");
  })
  $("#burned-krabby-patty").on("mouseout", function() {
    $("#burned-hover-krabby-patty").css("display", "none");
  })
  //fourteenth page
  $("#chimney").on("mouseover", function() {
    $("#hiding-plankton-background").css("display", "none");
    $("#hiding-plankton").animate({
      top: '26.4vh'
    }, 800);
    setTimeout(function() {
      $("#chimney").removeClass("on-hover");
    }, 500);
    $("#fourteenth-page").removeClass("hide-next-button");
    $("#fourteenth-page").addClass("show-next-button");
    $("#next").css("display", "block");
    $("#page-fourteen-speech-bubble").css("display", "block");
  })
  // event listeners
  $("#about").on("click", movePage);
  $(".move-buttons").on("click", movePage);
  $(".krabby-patty").on("click", burgerType);
  $("#retry").on("click", movePage);
  $("#retry-2").on("click", movePage);
  $("#retry-test").on("click", movePage);
  $("#restart").on("click", movePage);
  // checking if the slider is correct and giving the matching feedback
  $("#check").on("click", function() {
    if (checkIfCorrect("Slider" + String($("#slider").slider("option", "value") - 37))) {
      $(this).attr("src", "assets/media/buttons/correct.png");
      if ($("#fifth-page").hasClass("hide-next-button")) {
        $("#fifth-page").removeClass("hide-next-button");
        $("#next").css("display", "block");
      }
    } else {
      $(this).attr("src", "assets/media/buttons/incorrect.png");
    }
    // slider feedback
    if ($("#page-five-speech-bubble").css("display") === "none") {
      $("#page-five-speech-bubble").css("display", "block");
    }
    $("#page-five-speech-bubble").attr("src", arrSliderFeedbackSrc[$("#slider").slider("option", "value") - 37]);
  });
  // checking sock-question
  $(".sock").on("click", sock);
  slider();
  dragToShadow();
  dragCloths();
  wetSponge();
  // opening screen
  setTimeout(showDiv, 1000);
  setTimeout(function() {
    $("#logo").toggle("fade", 500);
  }, 1500);
  $("#start").on("click", movePage);
}

// displays or hides the main div with animation effect, and sets the background's opacity
function showDiv() {
  $(".move-buttons").off("click", movePage);
  setTimeout(function() {
    $(".move-buttons").on("click", movePage);
  }, 800);
  if (($("#opacity-div").css("opacity") === "0") && (nPageCounter !== 14) && (nPageCounter !== 16)) {
    $("#opacity-div").animate({
      opacity: '0.479'
    }, 1100);
  } else {
    $("#opacity-div").animate({
      opacity: '0'
    }, 1100);
  }
  $("#main-div").slideToggle(800);
  currPage();
}

// updates the page according to the page number
function currPage() {
  // changing title according to the page number
  $("#title").text(eval("arrTitle[nPageCounter]"));
  // changing text according to the page number
  $("#text").html(eval("arrText[nPageCounter]"));
  // changing the page's content according to the page number
  $("#" + eval("arrPagesContent[nPageCounter]")).css("display", "block");
  // updating progress bar
  if ($("#" + eval("arrPagesContent[nPageCounter]")).hasClass("update-nevigation-bar")) {
    updateProgressBar();
  }
  // showing and hiding "previous" and "next" buttons according to the page counter
  if ($("#" + eval("arrPagesContent[nPageCounter]")).hasClass("show-previous-button")) {
    $("#previous").css("display", "block");
  }
  if ($("#" + eval("arrPagesContent[nPageCounter]")).hasClass("hide-previous-button")) {
    $("#previous").css("display", "none");
  }
  if ($("#" + eval("arrPagesContent[nPageCounter]")).hasClass("show-next-button")) {
    $("#next").css("display", "block");
  }
  if ($("#" + eval("arrPagesContent[nPageCounter]")).hasClass("hide-next-button")) {
    $("#next").css("display", "none");
  }
  if ($("#" + eval("arrPagesContent[nPageCounter]")).hasClass("original-src")) {
    $("body").css("background-image", "url('assets/media/backgrounds/new-background.png')");
  }
  // specific pages
  if (nPageCounter === 1) {
    $("#timer").css({
      "color": "black",
      "display": "none"
    });
    min = 1;
    sec = 30;
  } else if (nPageCounter === 3) {
    $("#nevigation-bar").css("display", "block");
    $("#nevigation-bar-text-flexbox").css("display", "flex");
  } else if (nPageCounter === 4) {
    if ($("#page-three-speech-bubble").css("display") === "block") {
      $("#page-three-speech-bubble").css("display", "none");
    }
  } else if ((nPageCounter === 14) || (nPageCounter === 15)) {
    if ($("body").css("background-image") !== "url('assets/media/backgrounds/krusty_krub.png')") {
      $("body").css("background-image", "url('assets/media/backgrounds/krusty_krub.png')");
    }
  } else if (nPageCounter === 16) {
    $("body").css("background-image", "url('assets/media/backgrounds/chum_bucket.jpg')");
    $("body").css("cursor", "url('assets/media/objects/cursor_target.png'), pointer");
    $("#plankton-run").css("cursor", "url('assets/media/objects/cursor_target.png'), pointer");
    setTimeout(function() {
      runningPlankton = setInterval(runPlankton, 50);
      // stop plankton
      $("#plankton-run").on("click", stopPlankton);
      $("body").on("click", bullets);
    }, 50);
  } else if (nPageCounter === 20) {
    $("#timer").text("01:30");
    $("#timer").css({
      "color": "black",
      "display": "none"
    });
    min = 1;
    sec = 30;
  } else if (nPageCounter === 21) {
    dragPatrick();
    $(".cards").on("click", cards);
    savePatrick();
    // resetting the test
    $("#nevigation-bar").css("display", "none");
    $("#nevigation-bar-text-flexbox").css("display", "none");
    $("#unconscious-patrick").css({
      "left": "35vw",
      "top": "67vh"
    });
    $(".environments").removeClass("incorrect");
    $("#Environment2").removeClass("correct");
    $(".twenty-first-speech-bubble").css("display, none");
    $(".cards").removeClass("correct");
    $(".cards").removeClass("incorrect");
    $("#patricks-pants").css({
      "top": "67.2vh",
      "left": "44vw",
      "opacity": "0"
    });
    $("#drop-bucket").css("background-color", "rgb(194, 188, 188)");
    $("#drop-patricks-pants").css("background-color", "rgb(194, 188, 188)");
    $(".twenty-second-speech-bubble").css("display", "none");
    $("#draggable-bucket").css({
      "top": "35vh",
      "left": "28vw",
      "transform": "rotate(0deg)"
    });
    $(".twenty-third-speech-bubble").css("display", "none");
    $("#asleep-patrick").attr("src", "assets/media/secondary_characters/unconscious-patrick.png");
    $("#water-fall").css({
      "z-index": "-5",
      "top": "0vh"
    });
    timer = setInterval(setTimer, 1000);
    $("#timer").css({
      "color": "black",
      "display": "block"
    });
  } else if (nPageCounter === 24) {
    $(".cards").off("click");
  }
}

// updates the page counter
function movePage() {
  // plankton game restart
  $(".bullets").css("display", "block");
  nBullets = 3;
  // hide last pages content
  $("#" + eval("arrPagesContent[nPageCounter]")).css("display", "none");
  if (($(this).attr("id") === "retry") || ($(this).attr("id") === "retry-2")) {
    nPageCounter--;
  } else if ($(this).attr("id") === "retry-test") {
    nPageCounter = 20;
  } else if ($(this).attr("id") === "restart") {
    nPageCounter = 1;
  } else if ($(this).attr("id") === "previous") {
    if (nPageCounter === 17) {
      nPageCounter -= 2;
    } else {
      nPageCounter--;
    }
  } else if (($(this).attr("id") === "next") || ($(this).attr("id") === "start")) {
    if ($(this).attr("id") === "start") {
      arrTitle[1] = "איך אתם אוהבים את ההמבורגר שלכם?";
      arrText[1] = "";
      arrPagesContent[1] = "first-page";
    }
    nPageCounter++;
  } else if ($(this).attr("id") === "about") {
    arrTitle[1] = "אודות";
    arrText[1] = "תכנות: טור' טל סרוסי<br>גרפיקה: טור' טל סרוסי<br>פיצוח הדרכתי: טור' טל סרוסי<br>מומחה תוכן: סגן ג'וליאן מוסקוביץ'";
    arrPagesContent[1] = "about-screen";
    nPageCounter++;
  } else if (((sec === 0) && (min === 0)) && (nPageCounter !== 1) && (nPageCounter !== 20)) {
    nPageCounter = 24;
    console.log("arrrrrr");
  } else {
    nPageCounter++;
  }

  if (($("#" + eval("arrPagesContent[nPageCounter]")).hasClass("show-div")) && ($("#main-div").css("display") === "none")) {
    showDiv();
    clearInterval(runningPlankton);
    $("#plankton-run").css({
      "top": "79vh",
      "right": "15vw",
      "height": "16vh",
      "width": "5.25vw"
    });
    $("#plankton-run").attr("src", "assets/media/secondary_characters/plankton_run_three.png");
  } else if ($("#" + eval("arrPagesContent[nPageCounter]")).hasClass("hide-div")) {
    showDiv();
  } else {
    currPage();
  }
}

// inserts the burger type the user chose to the second page's text
function burgerType(event) {
  movePage();
  if ($(this).attr("id") !== "squid") {
    $("#text").html("נחמד שאתם אוהבים את זה " + $(this).attr("alt") + ", אבל בכל אופן");
  } else {
    $("#text").html("אז בכל מקרה אתם בטח תסכימו ש:");
  }
}

// progress bar
function updateProgressBar() {
  if (nPageCounter > nThermoCounter) {
    $("#nevigation-bar").attr("src", "assets/media/nevigation_bar/page" + String(nPageCounter) + ".png");
    if (nPageCounter !== 20) {
      $("#page" + nPageCounter).on("click", nevigate);
      $("#page" + nPageCounter).on("mouseover", function() {
        $(this).css({
          "z-index": "1",
          "font-size": "1.1vw",
          "cursor": "pointer"
        })
      })
      $("#page" + nPageCounter).on("mouseout", function() {
        $(this).css({
          "z-index": "0",
          "font-size": "1vw",
          "cursor": "default"
        })
      })
    }
    nThermoCounter = nPageCounter;
  }
}

function nevigate(event) {
  $("#" + eval("arrPagesContent[nPageCounter]")).css("display", "none");
  if (Number($(this).attr("id").slice(-2)) > 10) {
    nPageCounter = $(this).attr("id").slice(-2);
  } else {
    nPageCounter = $(this).attr("id").slice(-1);
  }
  if (($("#" + eval("arrPagesContent[nPageCounter]")).hasClass("show-div")) && ($("#main-div").css("display") === "none")) {
    showDiv();
  } else {
    currPage();
  }
}

// slider
function slider() {
  $("#slider").slider({
    orientation: "vertical",
    range: "min",
    min: 37,
    max: 42,
    value: 38,
    start: function(event, ui) {
      if (($("#check").attr("src") === "assets/media/buttons/correct.png") || ($("#check").attr("src") === "assets/media/buttons/incorrect.png")) {
        $("#check").attr("src", "assets/media/buttons/check.png");
      }
      if ($("#page-five-speech-bubble").css("display") === "block") {
        $("#page-five-speech-bubble").css("display", "none");
      }
    },
    slide: function(event, ui) {
      $("#switch-faces-sponge").attr("src", arrSpongeImgSrc[ui.value - 37]);
    }
  });
}

// dragging spongebob to shadow
function dragToShadow() {
  $("#worried-sponge").draggable({
    containment: $("#containment-div")
  });
  $("#droppable").droppable({
    tolerance: "fit",
    drop: function(event, ui) {
      $("#worried-sponge").attr("src", "assets/media/spongebob/worried_sponge_shadow.png");
      if ($("#seventh-page").hasClass("hide-next-button")) {
        $("#seventh-page").removeClass("hide-next-button");
        $("#seventh-page").addClass("show-next-button");
        $("#next").css("display", "block");
      }
    },
    out: function(event, ui) {
      $("#worried-sponge").attr("src", "assets/media/spongebob/worried_sponge_little.png");
    }
  });
}

// dragging spongebob's cloths
function dragCloths() {
  $("#squarepants").draggable({
    containment: $("#containment-div-pants"),
    drag: function(event, ui) {
      $("#squarepants").css("opacity", "10");
      $("#naked-sponge").attr("src", "assets/media/spongebob/naked_sponge.png");
    }
  });
  $("#drop-pants").droppable({
    tolerance: "fit",
    drop: function(event, ui) {
      $("#drop-pants").css("background-color", "rgb(124, 198, 228)");
      if ($("#eight-page").hasClass("hide-next-button")) {
        $("#eight-page").removeClass("hide-next-button");
        $("#eight-page").addClass("show-next-button");
        $("#next").css("display", "block");
      }
    }
  });
}

function wetSponge() {
  $("#clean-sponge").draggable({
    containment: $("#main-div"),
  });
  cleanStains();
  $("#first-bucket-container").droppable({
    tolerance: "fit",
    over: function(event, ui) {
      $("#clean-sponge").attr("src", "assets/media/spongebob/blue_sponge.png");
      // cleanStains();
    },
    out: function(event, ui) {
      $("#clean-sponge").attr("src", "assets/media/spongebob/little-wet-sponge.png");
    }
  });
}

function cleanStains() {
  $(".stain").droppable({
    tolerance: "intersect",
    over(event, ui) {
      if ($("#clean-sponge").attr("src") === "assets/media/spongebob/little-wet-sponge.png") {
        $(this).css("display", "none");
        var j = 1;
        for (i = 1; i <= 25; i++) {
          if ($("#mud-" + i).css("display") === "none") {
            j++;
          }
          if (j === 26) {
            $("#ninth-page").removeClass("hide-next-button");
            $("#ninth-page").addClass("show-next-button");
            $("#next").css("display", "block");
          }
        }
      }
    }
  });

}

// feedback for sock question
function sock() {
  if (checkIfCorrect($(this).attr("id"))) {
    $(this).addClass("correct");
  } else {
    $(this).addClass("incorrect");
    $("#Sock2").addClass("correct");
  }
  $(".sock").off("click", sock);
  if ($("#tenth-page").hasClass("hide-next-button")) {
    $("#tenth-page").removeClass("hide-next-button");
    $("#next").css("display", "block");
    $("#page-ten-speech-bubble").css("display", "block");
  }
}

function runPlankton() {
  if ($("#plankton-run").attr("src") === "assets/media/secondary_characters/plankton_run_three.png") {
    $("#plankton-run").attr("src", "assets/media/secondary_characters/plankton_run_one.png");
  } else {
    $("#plankton-run").attr("src", "assets/media/secondary_characters/plankton_run_three.png");
  }
  $("#plankton-run").css({
    "top": "-=0.4vh",
    "right": "+=2vw",
    "height": "-=0.03vh",
    "width": "-=0.02vw"
  });
  // if the user failed shuting plankton
  if ($("#plankton-run").height() < 141) {
    stopPlankton();
    arrPagesContent[17] = "seventeenth-page-alternative";
    arrTitle[17] = "לא הצלחתם לעצור את פלנקטון...";
    arrText[17] = "והכדור התועה שלכם פגע בגברת פאף המסכנה!"
  }
}

function stopPlankton() {
  clearInterval(runningPlankton);
  $("#plankton-run").off("click", stopPlankton);
  $("body").off("click", bullets);
  // if the user succeded shuting plankton
  if ($(this).attr("id") === "plankton-run") {
    $("#plankton-run").attr("src", "assets/media/secondary_characters/hurt_plankton.png");
    $("#plankton-run").css({
      "top": "+=6vh",
      "height": "-=3vh",
      "width": "+=1vh"
    });
    arrPagesContent[17] = "seventeenth-page";
    arrTitle[17] = "הצלחתם לעצור את פלנקטון!";
    arrText[17] = "אבל תראו איזה מסכן הוא...";
  }
  $("body").css("cursor", "default");
  $("#plankton-run").css("cursor", "default");
  $("#previous").off("click", movePage);
  setTimeout(movePage, 1500);
}

function bullets() {
  $("#bullet-" + nBullets).css("display", "none");
  nBullets--;
  // if the user failed shuting plankton
  if (nBullets === 0) {
    stopPlankton();
    arrPagesContent[17] = "seventeenth-page-alternative";
    arrTitle[17] = "לא הצלחתם לעצור את פלנקטון...";
    arrText[17] = "והכדור התועה שלכם פגע בגברת פאף המסכנה!";
  }
}

function dragPatrick() {
  console.log("tali");
  $("#unconscious-patrick").draggable({
    containment: $("#main-div"),
    disabled: false
  });
  $(".environments").droppable({
    tolerance: "intersect",
    drop: function(event, ui) {
      if (checkIfCorrect($(this).attr("id"))) {
        $(this).addClass("correct");
        $("#unconscious-patrick").draggable({
          disabled: true
        });
        setTimeout(movePage, 600);
      } else {
        $(this).addClass("incorrect");
        $("#twenty-first-speech-bubble-" + $(this).attr("id").slice(-1)).css("display", "block");
      }
    },
    out: function(event, ui) {
      if ($(this).hasClass("correct")) {
        $(this).removeClass("correct");
      } else if ($(this).hasClass("incorrect")) {
        $(this).removeClass("incorrect");
        $(".twenty-first-speech-bubble").css("display", "none");
      }
    }
  });
}

function cards(event) {
  if (checkIfCorrect($(this).attr("id"))) {
    $(this).addClass("correct");
    if ($("#Card1").hasClass("correct") && $("#Card4").hasClass("correct")) {
      $(".cards").off("click");
      setTimeout(movePage, 600);
    }
  } else {
    $(this).addClass("incorrect");
    $("#twenty-second-speech-bubble-" + $(this).attr("id").slice(-1)).css("display", "block");
  }
}

function savePatrick() {
  $("#draggable-iv").draggable({
    containment: $("#main-div"),
    disabled: false,
    drag: function(event, ui) {
      $("#twenty-third-speech-bubble-1").css("display", "none");
    }
  });
  $("#draggable-bucket").draggable({
    containment: $("#main-div"),
    disabled: false,
    drag: function(event, ui) {
      $("#twenty-third-speech-bubble-2").css("display", "none");
    }
  });
  $("#patricks-pants").draggable({
    containment: $("#main-div"),
    disabled: false,
    drag: function(event, ui) {
      $("#patricks-pants").css("opacity", "10");
      $("#asleep-patrick").attr("src", "assets/media/secondary_characters/naked_patrick.png");
    }
  });
  $("#drop-bucket").droppable({
    disabled: true
  })
  $("#drop-patricks-pants").droppable({
    tolerance: "intersect",
    drop: function(event, ui) {
      if (ui.draggable.attr("id") === "draggable-iv") {
        $(ui.draggable).animate({
          top: '34.5vh',
          left: '20vw'
        }, 200);
      } else if (ui.draggable.attr("id") === "draggable-bucket") {
        $(ui.draggable).animate({
          top: '35vh',
          left: '28vw'
        }, 200);
      } else if (ui.draggable.attr("id") === "patricks-pants") {
        $("#drop-patricks-pants").css("background-color", "rgb(124, 198, 228)");
        $("#patricks-pants").draggable({
          disabled: true
        });
        awakePatrick();
      }
    }
  });
  $("#opacity-div").droppable({
    drop: function(event, ui) {
      if (ui.draggable.attr("id") === "draggable-iv") {
        $("#twenty-third-speech-bubble-1").css("display", "block");
        $(ui.draggable).animate({
          top: '34.5vh',
          left: '20vw'
        }, 200);
      } else if ((ui.draggable.attr("id") === "draggable-bucket") && ($("#patricks-pants").draggable("option", "disabled") === false)) {
        $("#twenty-third-speech-bubble-2").css("display", "block");
        $(ui.draggable).animate({
          top: '35vh',
          left: '28vw'
        }, 200);
      }
    }
  });
}

function awakePatrick() {
  $("#drop-bucket").droppable({
    tolerance: "intersect",
    disabled: false,
    drop: function(event, ui) {
      if (ui.draggable.attr("id") === "draggable-iv") {
        $(ui.draggable).animate({
          top: '34.5vh',
          left: '20vw'
        }, 300);
      } else if ((ui.draggable.attr("id") === "draggable-bucket")) {
        clearInterval(timer);
        $("#drop-bucket").css("background-color", "rgb(124, 198, 228)");
        $("#draggable-bucket").draggable({
          disabled: true
        });
        $("#draggable-iv").draggable({
          disabled: true
        });
        $(ui.draggable).animate({
          top: '31.5vh',
          left: '55.7vw'
        }, 200).animate({
          deg: '180'
        }, {
          duration: 1200,
          step: function(now) {
            $(this).css({
              transform: 'rotate(' + now + 'deg)'
            });
          }
        });
        setTimeout(function() {
          $("#water-fall").css("z-index", "-2");
          $("#water-fall").animate({
            top: '39vh'
          }, 800);
        }, 1200);
        setTimeout(function() {
          $("#asleep-patrick").attr("src", "assets/media/secondary_characters/asleep-patrick.png");
          setTimeout(calculateTime, 1500);
        }, 2000);
      }
    }
  });
}

function setTimer() {
  console.log("it's time");
  if ((sec === 0) && (min === 0)) {
    clearInterval(timer);
    arrText[24] = "נגמר לכם הזמן! מסכן פטריק...";
    setTimeout(movePage, 100);
  } else if (sec === 0) {
    min--;
    sec = 59;
  } else {
    sec--;
  }
  if ((sec === 10) && (min === 0)) {
    $("#timer").css("color", "red");
  }
  if (sec > 9) {
    $("#timer").text("0" + min + ":" + sec);
  } else {
    $("#timer").text("0" + min + ":" + "0" + sec);
  }
}

function calculateTime() {
  arrPagesContent[24] = "twenty-fourth-page";
  // how much time in seconds it took the user finish the exercise
  nTime = 90 - ((min * 60) + (sec));
  // if it took more than a min
  if (nTime > 60) {
    arrText[24] = "מסתבר שפטריק סתם ישן...<br>אבל עשיתם עבודה ממש טובה! עזרתם לפטריק תוך דקה ו-" + (30 - sec) + " שניות!";
  } else if (nTime > 30) {
    arrText[24] = "מסתבר שפטריק סתם ישן...<br>אבל עשיתם עבודה ממש טובה! עזרתם לפטריק תוך " + (90 - sec) + " שניות!";
  } else {
    arrText[24] = "מסתבר שפטריק סתם ישן...<br>אבל עשיתם עבודה ממש טובה! עזרתם לפטריק תוך " + (30 - sec) + " שניות!";
  }
  movePage();
}

// general function for checking answers
function checkIfCorrect(userAnswer) {
  if (eval("arr" + userAnswer.slice(0, -1))[userAnswer.slice(-1)]) {
    return true
  } else {
    return false
  }
}