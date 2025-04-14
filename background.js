const blockedSites = [
  "bet365.com",
  "1xbet.com",
  "pokerstars.com",
  "888.com",
  "williamhill.com",
  "betway.com",
  "bwin.com",
  "betfair.com",
  "leovegas.com",
  "draftkings.com",
  "tiranga-games.com",
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    const hostname = url.hostname.replace("www.", "");
    console.log("Trying to access:", hostname);
    if (blockedSites.includes(hostname)) {
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
