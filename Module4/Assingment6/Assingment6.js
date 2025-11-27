'use strict';
console.log('script starts');

async function searchJokes(query) {
  console.log('fetching jokes for', query);
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
    const data = await response.json();

    console.log(data);

    const resultsDiv = document.getElementById('results');
    if (!resultsDiv) return;
    resultsDiv.innerHTML = '';

    data.result.forEach(joke => {
      const article = document.createElement('article');
      const p = document.createElement('p');
      p.textContent = joke.value;
      article.appendChild(p);
      resultsDiv.appendChild(article);
    });

  } catch (error) {
    console.log(error.message);
    document.getElementById('results').textContent = 'Error fetching jokes';
  } finally {
    console.log('fetch complete');
  }
}

document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const query = document.getElementById('query').value;
  if (query) searchJokes(query);
});

/*
Develop the app further.
Now add a form where you can enter a search term like in assignments 1-3.
Send the search term to:
https://api.chucknorris.io/jokes/search?query=${value_from_input} using fetch()
Print each joke in this format:
<article>
    <p>Joke here<p>
</article>
 */