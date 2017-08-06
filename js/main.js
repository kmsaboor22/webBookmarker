//Listen for form Submit

//this inline function will save the bookmark
document.getElementById('myForm').addEventListener('submit', function saveBookmark(e) {
    // console.log('eureka!!!');

    //Get Form values
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;

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
    //this prevent the form from submitting
    e.preventDefault();
});
//delete function
function deleteBookmark(url) {

}

//Fetch bookmarks
function fetchBookmarks() {
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
            ' <a  onclick="deleteBookmark(\'' + url + '\')" class="btn btn-danger" target="_blank" href="#">Delete</a>' +
            '</h3>' +
            '</div>';

    }
}