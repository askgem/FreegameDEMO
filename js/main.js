var searchBar = new Vue({
	el: "#search-bar",
	data: {
		message: 'Hello Vue!',
		keyword: ""
	},
	methods: {
		searchBtnOnClick() {
			googleSearch();
		}
	}
});

var searchResult = new Vue({
	el: "#search-result",
	data() {
		return {
			result: []
		}
	}
});


    //Key 1: b42220236cd64172af7d910cb3236d89
    // Key 2: 0e28e0f3c1504fca8e58c4def72d06d9

 function googleSearch() {
	// const baseUrl = "http://localhost:5000/search?keyword=";
	// Preparation
	const baseUrl = "https://api.cognitive.microsoft.com/bing/v7.0/search?q=";
	const sub_key = "b42220236cd64172af7d910cb3236d89";
	// Getting user input
	let keyword = searchBar.$data.keyword;
	// Bing Search API Call
	axios({
		method: "GET",
		url: baseUrl + encodeURIComponent(keyword),
		headers: {
			"Ocp-Apim-Subscription-Key": sub_key
		}
	}).then((result) => {
		searchResult.$data.result = result.data.webPages.value;
		console.log(result);
	})
}
