//Listen for form Submit

//this inline function will save the bookmark
document.getElementById('myForm').addEventListener('submit', function saveBookmark(e) {
    // console.log('eureka!!!');

    //Get Form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

    if (!validateForm(siteName, siteUrl)) {
        return false;
    }

    //object for our input values
    var bookmark = {
        name: siteName,
        url: siteUrl
    }

    /*
    //local strage test for instruction
    localStorage.setItem('test', 'hello world');
    console.log(localStorage.getItem('test'));
    localStorage.removeItem('test');
    console.log(localStorage.getItem('test')); 
*/
    //test if bookmarks is null
    if (localStorage.getItem('bookmarks') === null) {
        //Init array
        var bookmarks = [];
        //Add to Array 
        bookmarks.push(bookmark);
        //set to localstorage
        //Stringify will turn bookmarks into a sring
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // get bookmarks from local Storage
        // turn a string into a JSON
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        //add bookmark to array
        bookmarks.push(bookmark);
        //reset back to local storage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    }

    //Re-fetch bookmarks
    fetchBookmarks();

    //this prevent the form from submitting
    e.preventDefault();
});
//delete function
function deleteBookmark(url) {
    //Fetch bookmarks fromlocal storage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    //loop through bookmarks
    for (i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == url) {
            //remove from array
            bookmarks.splice(i, 1)
        }
    }
    //reset back to local storage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))

    //Re-fetch bookmarks
    fetchBookmarks();
}

//Fetch bookmarks
function fetchBookmarks(siteName, siteUrl) {
    // get bookmarks from local Storage
    // turn a string into a JSON
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Get output ID
    var bookmarksResults = document.getElementById('bookmarkResults');
    //Build Output
    bookmarksResults.innerHTML = '';

    for (i = 0; i < bookmarks.length; i++) {
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;

        bookmarksResults.innerHTML += '<div class="well">' +
            '<h3>' + name +
            ' <a  class="btn btn-default" target="_blank" href="' + url + '">Visit</a>' + //32:31
            ' <a  onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" href="#">Delete</a>' +
            '</h3>' +
            '</div>';

    }
}

//validate form
function validateForm() {
    if (!siteName || !siteUrl) {
        alert('Please fill in the form');
        return false;
    }
    //REGEX for url validation
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteUrl.match(regex)) {
        alert('Please use a valid URL');
        return false;
    }
    return true;
}