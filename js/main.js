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
//Fetch bookmarks
function fetchBookmarks() {
    // get bookmarks from local Storage
    // turn a string into a JSON
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    console.log(bookmarks)
}