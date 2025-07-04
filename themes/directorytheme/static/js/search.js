function displayResults (results, store) {
  const searchResults = document.getElementById('results')
  if (results.length) {
    let resultList = ''
    // Iterate and build result list elements
    for (const n in results) {
      const item = store[results[n].ref]
      resultList += '<div class="blockImageTextSvg taxonomyListTabledLessMargin"><div class="blockImageSvgWrapID-hite taxonomyListTabled"><a href="' + item.url + '">' + item.title + '</a></div></div>'
    }
    searchResults.innerHTML = resultList
  } else {
    searchResults.innerHTML = 'No results found.'
  }
}

// Get the query parameter(s)
var params = new URLSearchParams(window.location.search)
var query = params.get('query')

// Perform a search if there is a query
if (query) {
  // Retain the search input in the form when displaying results
  document.getElementById('search-input').setAttribute('value', query)

  const idx = lunr(function () {
    this.ref('id')
    this.field('title', {
      boost: 15
    })
    this.field('tags')
    this.field('content', {
      boost: 10
    })
    this.field('categories')
    this.field('content', {
      boost: 10
    })

    for (const key in window.store) {
      this.add({
        id: key,
        title: window.store[key].title,
        tags: window.store[key].categories,
        categories: window.store[key].tags,
        content: window.store[key].content
      })
    }
  })

  // Perform the search
  const results = idx.search(query)
  // Update the list with results
  displayResults(results, window.store)
}