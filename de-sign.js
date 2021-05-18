function sketch_idnameofdiv(p) {

 p.setup = function() {
  p.createCanvas(400, 400);
}

 p.draw = function() {
  p.background("white");

  // Constants definition

  const textDe = "de";
  const textDeColor = "";
  const textDeStroke = "black";
  const textDeStrokeWeight = 2;
  const textDeFont = "Roboto";

  const textSign = "sign";
  const textSignColor = "#C93C20";
  const textSignStroke = "#C93C20";
  const textSignStrokeWeight = 0;
  const textSignFont = "Roboto";

  // How much vertical deviations the words "de" and "sign" have. This variable should
  // take values between 0 and 1. 1 means start from the edge and 0 means no offset
  const initialOffsetProportionY = 1;
  // Size of the text with respect to the minimum of the canvas axes
  const textSizeProportion = 1 / 4;
  // Parameter controlling the transition speed. The value of beta should be between
  // 0 and 1. The smaller the beta, the slower the transition.
  const beta = 0.015;

  // Text sizes calculation
  let textDeWidth = p.textWidth(textDe);
  let textSignWidth = p.textWidth(textSign);
  let textTotalWidth = textDeWidth + textSignWidth;
  let textHeight = p.textAscent();

  // Final insertion positions calculation
  let textFinalPosX = p.width / 2 - textTotalWidth / 2;
  let textFinalPosY = p.height / 2 + textHeight / 3;

  // Dynamic positions
  let textInsertYDe = textFinalPosY - (1 - transition(beta)) * initialOffsetProportionY * p.height / 2;
  let textInsertYSign = textFinalPosY + (1 - transition(beta)) * initialOffsetProportionY * p.height / 2;

  // Adjust size of the text
  p.textSize(p.min(p.width, p.height) * textSizeProportion);


  // Draw "de"
  p.stroke(textDeStroke);
  p.strokeWeight(textDeStrokeWeight);
  p.fill(textDeColor);
  p.textFont(textDeFont);
  p.text(textDe, textFinalPosX, textInsertYDe);

  // Draw "sign"
  p.stroke(textSignStroke);
  p.strokeWeight(textSignStrokeWeight);
  p.fill(textSignColor);
  p.textFont(textSignFont);
  p.text(textSign, textFinalPosX + textDeWidth, textInsertYSign);

  function transition(beta) {
    return Math.tanh(beta * p.frameCount);
  }
}
}




new p5(sketch_idnameofdiv, 'de-sign')
