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
    //this prevent the form from submitting
    e.preventDefault();
});