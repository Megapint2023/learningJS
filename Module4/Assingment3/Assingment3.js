'use strict';
console.log('script starts');

async function searchShow(query) {
  console.log('fetching data for', query);
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
    const data = await response.json();
    console.log(data);

    const resultsDiv = document.getElementById('results');
    if (!resultsDiv) return;
    resultsDiv.innerHTML = '';

    data.forEach(tvShow => {
      const article = document.createElement('article');

      const h2 = document.createElement('h2');
      h2.textContent = tvShow.show.name;
      article.appendChild(h2);

      const a = document.createElement('a');
      a.href = tvShow.show.url;
      a.target = '_blank';
      article.appendChild(a);

      if (tvShow.show.image?.medium) {
        const img = document.createElement('img');
        img.src = tvShow.show.image.medium;
        img.alt = tvShow.show.name;
        article.appendChild(img);
      }

      const div = document.createElement('div');
      div.innerHTML = tvShow.show.summary || 'No summary';
      article.appendChild(div);

      resultsDiv.appendChild(article);
    });

    // document.getElementById('target').textContent = JSON.stringify(data[0]?.show?.name || 'No result');
  } catch (error) {
    console.log(error.message);
    document.getElementById('target').textContent = 'Error fetching data';
  } finally {
    console.log('fetch complete');
  }
}

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('query').value;
  if (query) searchShow(query);
});

/*
Develop the app even further.
Print the following information for all series from the search result on the web page.
• required information: Name, link to details (url), medium image and summary
•show the name in <h2> element
•show the url in <a> element. Also add target="_blank" to the link.
•show the medium image with <img src="" alt="">.
Add medium image to src attribute and name property to alt attribute.
•some TV-shows don't have images. This will cause an error.
You can fix this by adding ? operator to image property.
Example: tvShow.show.image?.medium;. This is called optional chaining.
•show summary in <div> element (not <p>).
This is because the summary is already in <p> element,
and the result will not be valid if <p> is inside another <p>.
•collect the elements to <article> elements and append <article> elements to the HTML document.
•make <div id="results"> element to the HTML document where you append the <article> elements.
•clear the old results with innerHTML = '' before you append the new results.
 */