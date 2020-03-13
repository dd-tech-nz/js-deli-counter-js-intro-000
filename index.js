//cont katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  let number = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`;
}

function nowServing(katzDeliLine) {
  let serving = [...katzDeliLine]
  if (!serving[0]){
    return "There is nobody waiting to be served!"
  } else {
    katzDeliLine.shift()
    return `Currently serving ${serving[0]}.`
  }
}
