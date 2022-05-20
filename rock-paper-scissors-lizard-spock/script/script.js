$('document').ready(()=>{
  

    const rulesContainer = $('.RulesContainer')
    const rulesPage = $('.RulesPage')
    const battleResult = $('.BattleResult')
    const chooseOptions = $('.ChooseOptions')
    const resultPlayerShadow = $(".PlayerResult .ShadowResult")
    const resultPCShadow = $(".PCResult .ShadowResult")
    const resultPlayerCircle = $(".PlayerResult div .Circle")
    const resultPCCircle = $(".PCResult div .Circle")
    const scoreCounter = $("header .ScoreCounter h2")
    const resultMessage = battleResult.children(".ResultMessage")
    const resultMessageText = resultMessage.children("h1")
    const playAgainButton = resultMessage.children(".PlayAgainButton")
  
    let score = 0
    let numOfOptions = 5
    let idIconPlayer
    let idIconPC
  
  
  
    chooseOptions.children().children(".Circle.Icon").on('click', function () {
      
      resultPlayerShadow.removeClass("ShadowPulse")
      resultPCShadow.removeClass("ShadowPulse")
  
      idIconPlayer = parseInt($(this).attr("id"))
      idIconPC = Math.floor((Math.random() * numOfOptions) + 1)
      
      classForPCResult = ""
      switch(idIconPC){
        case 1: classForPCResult = "Siccors"; break
        case 2: classForPCResult = "Paper"; break
        case 3: classForPCResult = "Rock"; break
        case 4: classForPCResult = "Lizard"; break
        case 5: classForPCResult = "Spock"; break
      }
  
      resultPlayerCircle.removeClass("Icon Siccors Paper Rock Lizard Spock").addClass("Icon " + $(this).attr("class").split(' ').pop() + "")
      resultPCCircle.removeClass("Icon Siccors Paper Rock Lizard Spock").addClass("Icon " + classForPCResult)
   
      if (idIconPlayer == idIconPC) {
        console.log("player: " + idIconPlayer + ", PC: " + idIconPC + ", Tie")
        resultMessageText.text("tie!")
      }
      else if (
        idIconPlayer+1 == idIconPC||
        idIconPlayer == numOfOptions && idIconPC == 1||
        idIconPlayer>= Math.ceil(numOfOptions/2) && idIconPlayer-2 == idIconPC||
        idIconPlayer < Math.ceil(numOfOptions/2) && idIconPlayer+3 == idIconPC
      ){
        console.log("player: " + idIconPlayer + ", PC: " + idIconPC + ",you win pc lose")
        resultPlayerShadow.addClass("ShadowPulse")
        scoreCounter.text("" + ++score)
        resultMessageText.text("you win")
  
      }
      else{
        console.log("player: " + idIconPlayer + ", PC: " + idIconPC + ",pc win you lose")
        resultPCShadow.addClass("ShadowPulse")
        scoreCounter.text("" + --score)
        resultMessageText.text("you lose")
      }
  
      chooseOptions.hide()
      battleResult.css("display","flex")
  
    })
  
    playAgainButton.on('click', function () {
      
      
      battleResult.hide()
      chooseOptions.show()
  
    })
  
    $('.RulesButton').on('click', function () {
      rulesContainer.show().animate({opacity: '1'},500)
      rulesPage.animate({ top: "-=1000",}, 200);
    })
  
    rulesPage.children('span').on('click', function () { 
      rulesPage.animate({ top: "+=1000px",}, 200);
      rulesContainer.animate({opacity: '0.0'},500,()=>{rulesContainer.hide()})
    })
  
  })