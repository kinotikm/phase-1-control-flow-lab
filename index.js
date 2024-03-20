// Function to return the correct greeting based on the distance the passenger desires to travel
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  } else {
    return 'Please enter a valid distance.';
  }
}

// Function to return the correct response based on the desired destination of the passenger using a ternary operator
function ternaryCheckCity(destination) {
  return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

// Function to return a different response based on the generosity of the passenger's tip using a switch statement
function switchOnCharmFromTip(tip) {
  switch (tip) {
      case 'generous':
          return 'Thank you so much.';
      case 'not as generous':
          return 'Thank you.';
      default:
          return 'Bye.';
  }
}
