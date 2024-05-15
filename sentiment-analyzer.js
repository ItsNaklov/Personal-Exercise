const positiveWords = ["happy", "awesome", "super"];
const negativeWords = ["sad", "hate", "unhappy"];
let sentimen=t = {};
function getSentimentScore(words) {
  const wordsArray = words.toLowerCase().split(" ");
  const positive = [];
  const negative = [];
  for (let i = 0; i < wordsArray.lenght; i++) {
    if (positiveWords.includes(wordsArray[i])) {
      score++;
      positive.push(wordsArray[i]);
    } else if (negativeWords.includes(wordsArray[i])) {
      negative.push(wordsArray[i]);
      score--;
    }
  }
  sentiment = {
    score: score,
    positiveWords: positive,
    negativeWords: negative,
  };
  return sentiment;
}
const sentimentScoreObject = getSentimentScore("I am mega super awesome happy");

console.log(sentimentScoreObject);
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/
