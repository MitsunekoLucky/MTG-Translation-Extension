var root = "https://khrysystem.dev/mtg-translated/";

const processRequest = details => 
{
  const url = new URL(details.url);
  const retObj = {
      queryParams: new URLSearchParams(url.search)
  };

  lastSegment = url.href.split("/").pop();
  typecheck = url.href.split(".").pop();

}

chrome.webRequest.onBeforeRequest.addListener(
  processRequest,
  { urls: ["https://assets.mist-train-girls.com/production-client-web/*"] },
);

