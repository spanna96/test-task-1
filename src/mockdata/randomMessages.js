const randomMessages = [
  "Hi!",
  "How things are going?",
  "Hello!",
  "How are you?",
  "Cool!",
  "See you!",
  "And you?",
  "Fine.",
  "Have a nice day!",
  "Good luck!",
  "Nice to hear!",
];

export const getRandomMessage = () => {
  const messagesNumber = randomMessages.length;
  const number = randomInteger(0, messagesNumber);

  return randomMessages[number];
};

const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min);

  return Math.round(rand);
};

export default randomMessages;
