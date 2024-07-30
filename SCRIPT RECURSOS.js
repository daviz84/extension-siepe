fetch("chrome-extension://knopkpibogfofpelkjndobbineepbmmd/htmlll.html").then(function (response) {
    return response.text();
}).then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log('Fetch Error :-S', err);
});

"https://developer.chrome.com/docs/extensions/reference/manifest/web-accessible-resources?hl=pt-br"


`
"web_accessible_resources": [
    {
        "resources": [
            "images/pngwing.com.png","htmlll.html"
        ],
        "matches": [
            "https://web.whatsapp.com/*"
        ]
    }
]

`




