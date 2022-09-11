const quotes = [
  {
    quote: "I am able to do all things through him who gives me strength",
    chapter: "Philippians 4:13",
  },
  {
    quote:
      "But he knows what I am doing, and when he tests me, I will be pure as gold.",
    chapter: "Job 23:10",
  },
  {
    quote:
      "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
    chapter: "John 3:16",
  },
  {
    quote: "We make our own plans, but the LORD decides where we will go.",
    chapter: "Proverbs 16:9",
  },
  {
    quote:
      "For now there are faith, hope, and love. But of these three, the greatest is love.",
    chapter: "Corinthians 13:13",
  },
  {
    quote:
      "Respect and obey the LORD! This is the beginning of wisdom To have understanding, you must know the Holy God",
    chapter: "Proverbs 9:10",
  },
  {
    quote:
      "Yet to all who did received him, to those who believed his name, he gave the right to become children of God",
    chapter: "John 1:12",
  },
  {
    quote:
      "Don't worry about anything, but pray about everything. With thankful hearts offer up your prayers and requests to God ",
    chapter: "Philippians 4:6",
  },
  {
    quote: "The LORD is my shepherd, I shall not be in want",
    chapter: "Psalms 23:1",
  },
  {
    quote: "Hatred stirs up dissension, but love covers over all wrongs.",
    chapter: "Proverbs 10:12",
  },
];

const quote = document.querySelector("#quote span:first-Child");
const chapter = document.querySelector("#quote span:last-Child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
chapter.innerText = todaysQuote.chapter;
