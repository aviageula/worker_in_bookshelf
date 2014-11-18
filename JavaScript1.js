var workerFile;
//יצרתי את המשתנה וורקרפייל
var startCount= function(){
    if (Worker) {
    if (typeof (workerFile) == "undefined") {
        workerFile = new Worker("JavaScript2.js");
    }
    workerFile.onmessage = function (e) {
        document.getElementById("theSevens").innerHTML = e.data;
    };
    } else {
        document.getElementById("theSevens").innerHTML = "sorry! you're dont diserve it";
    }

};
/*כאשר לוחצים על הכפור אז קודם כל יבדוק
האם הדפדפן תומך בוורקר?
אם כן אז האם כבר יש לי כבר את וורקר?
אם לא תיצור אותו וכשהוא מקבל את ההודעה אז את המידע שקיבלת תשים
באינר הטמל של התגית אאוטפוט.*/

var Book = function (bookName, authorName, score) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.score = score;
};
/*יצירת אובייקט בשם בוק שיש לו שלוש תכונות - שם ספר, שם סופר וציון.
כל אל איי שהמשתמש יכניס בעצם יהפוך לאובייקט כזה בשם בוק.*/

var reset = function () {
    document.getElementById('bookName').value = "";
    document.getElementById('authorName').value = "";
    document.getElementById('score').value = "";
};
/*יצירת פונקציה ריסט שמאפסת את האינפוטים שם ספר שם סופר וציון.*/

var booksArray = [];
/*יצירת מערך שבהמשך יאפסן אצלו כל אובייקט בוק שנוצר על ידי המשתמש
ויאפשר לנו לגשת למידע הזה.*/

var messageToSayHaveNothing = document.getElementById("message");
/*משתנה שמכיל את הדיב שמודיע כאשר החיפוש לא מצא כלום ואני משנה לו את הדיספליי
כשצריך.*/

var timeToPreesOnKey;
/*הכרזתי על משתנה שאשתמש בו בשביל לעכב את החיפוש אם המשתמש עדין מקליד.*/

var nameOfBookToSearchInThArray;
/*הכרזתי על משתנה שאליו אכניס את שם הספר שאבדוק במערך איזה אינדקס הוא כדי למחוק.*/

var performsearch = function () {
    clearList();
    var searchResults = [];
    var nameToSearchFor = document.getElementById("searchName").value;
    for (var i = 0; i < booksArray.length; i++) {
        if (booksArray[i].bookName.indexOf(nameToSearchFor) > -1) {
            messageToSayHaveNothing.style.display = "none";
            searchResults.push(booksArray[i]);
        }
    }
    buildListFromArray(searchResults);

    if (searchResults.length == 0) {
        messageToSayHaveNothing.style.display = "inline-block";
    }
    if (nameToSearchFor.length < 1) {
        messageToSayHaveNothing.style.display = "none";
    }
};

/*יצירת פונקצית חיפוש.
קודם כל הפונקציה מנקה את היו אל על מנת שיוצגו לנו רק האל איי שחיפש המשתמש.
הפונקציה יוצרת מערך חדש שכל אל איי עם שם הספר שהמשתמש חיפש נכנס למערך הזה ותופס בו אינדקס אחד.
הפונקציה מבצעת את החיפוש על ידי בדיקה של האם הוליו שהמשתמש הכניס הוא חלק משם הספר של
כל איבר במערך בוקסאריי.
אם התשובה היא לא אז יוצג מינוס אחד ולכן אם התשובה היא מעל מינוס אחד אז מה שהמשתמש הכניס נמצא באיבר המסויים
והוא יצטרף למערך חדש של רק השמות שהמשתמש חיפש.
לאחר מכן נתתי איף שאם המערך החדש ריק אז יוצג על המסך שאין תוצאות ואם 
השדה של החיפוש ריק כי לא נמצא שם כלום אז ההודעה תעלם.*/

var search = function () {
    if (timeToPreesOnKey !== undefined) {
        clearTimeout(timeToPreesOnKey);
    }
    timeToPreesOnKey = setTimeout(performsearch, 500);
};
/*זאת הפונציה שאני קורא לה כאשר יש אונ קיי אפ באינפוט של החיפוש.
נאמר כאן שאם המשתנה הוא לא אנדפיינד אז נבטל את ההוצאה לפועל של פונקצית החיפוש
ואז נוציא אותה לפועל מחדש בדיליי של חצי שנייה.
מה שיקרה כאן זה שהמתמש יתחיל חיפוש וילחץ על אות מסויימת,אם תעבור חצי שנייה בלי 
שלחץ שוב אז יופיעו לו התוצאות,אם ילחץ על עוד מקש לפני שעברה חצי שנייה אז החיפוש ידחה בעוד
חצי שנייה וכך שוב ושוב.
מה שהרווחנו פה זה שלא בכל לחיצה על מקש הפונקציה תרוץ אלא רק כאשר המשתמש יעשה עצירה מלהקליד
וזה חוסך בעומס על הדף וגם לא יחפש כל פעם סתם.*/

var buildListFromArray = function (searchResults) {
    for (var i = 0; i < searchResults.length; i++) {
        addToList(searchResults[i]);
    }
};
/*הפונקציה מקבלת מערך ועוברת על כל איבר בו ויוצרת ממנו רשימת אל איי עם 
הפונקציה אדד טו ליסט.*/


var addBook = function () {
    var inputBook = document.getElementById("bookName");
    var inputAuthor = document.getElementById("authorName");
    var inputScore = document.getElementById("score");
    if (inputBook.value.trim().length == 0) {
        alert("נא להכניס שם ספר");
        inputBook.focus();
    } else if (inputAuthor.value.trim().length == 0) {
        alert("נא להכניס שם מחבר");
        inputAuthor.focus();
    } else if (!((inputScore.value >= 1) && (inputScore.value <= 10))) {
        alert("נא להכניס מספר בין 1-10");
        inputScore.select();
    } else {
        var book = new Book(inputBook.value, inputAuthor.value, inputScore.value);
        booksArray.push(book);
        addToList(book);
        reset();
        messageToSayHaveNothing.style.display = "none";

    }
};
/*הפונקציה הזאת מוסיפה את הספר שהמשתמש הכניס לרשימה.
 קודם כל היא מודאת שהשדות מולאו נכון ואם לא אז היא מודיעה למשתמש ושמה פוקוס על
 השדה הראשון שלא מולא כראוי.
 במקרה של הציון היא גם מסמנת את מה שנכתב אם וכאשר.
 לאחר שכל השדות מולאו כראוי הפונרציה יוצרת אובייקט בוק
 דוחקת אותו למערך בוקסאריי כדי לשמור את המידע אצלו
 ואז מפעילה את הפונקציה אד טו ליסט על האובייקט והפונציקה עד טו ליסט בעצם
 יוצרת אל איי חדשה עם כל מה שצריך ומיספה את האל איי ליול.
לאחר מכן הפונקציה הזאתי קוראת לפונקציה ריסט ודבר אחרון היא 
מעלימה את ההודעת חיפוש אם היא קיימת.
 */

var createDivElement = function (theInnerHtml, theClass) {
    var theDivName = document.createElement("div");
    theDivName.innerHTML = theInnerHtml;
    theDivName.className = theClass;
    return theDivName;
};
/*פונקציה שיוצרת לי אלמנט דיב ונותנת לו אינר וקלאס.
היא נוצרה בשביל לחסוך בשורות קוד.*/

var addToList = function (book) {

    var newElement = document.createElement("li");

    var bookNameDiv = createDivElement(book.bookName, "left");

    var authorNameDiv = createDivElement(book.authorName, "center");

    var scoreDiv = createDivElement(book.score, "right");

    var divDelete = document.createElement("div");
    divDelete.className = "divDeleteClass";
    divDelete.setAttribute("title", "מחק");

    var ex = document.createTextNode("x");
    divDelete.appendChild(ex);
    divDelete.onclick = function (e) {
        if (e.target.parentNode.children[0].children[0] !== undefined) {
            e.target.parentNode.children[0].children[0].remove();
        }
        nameOfBookToSearchInThArray = e.target.parentNode.children[0].innerHTML;
        for (var i = 0, len = booksArray.length; i < len; i++) {
            if (booksArray[i].bookName.indexOf(nameOfBookToSearchInThArray) > -1) {
                booksArray.splice(i, 1);
            }
        }
        e.target.parentNode.remove();
    };
    /*כשאני לוחץ על האיקס הוא ימחק את הספר הזה גם מהרשימה וגם 
    מהמערך.הפונצקיה הולכת לדיב של שם הספר ובודקת אם נמצא לי שם הכפתור של האדיט
    אז היא מורידה אותו וממשיכה הלאה לשמור את האינר אייצ טי אמ אל של הדיב הראשון.
    לאחר מכן בודקת אם האינר שזה שם הספר אם הוא נמצא באחד משמות
    הספר במערך ואז אם כן אז נעשה ספלייס לאינדקס הזה.*/

    var edit = document.createElement("button");
    edit.innerHTML = "edit";
    edit.className = "editClass";

    var newInputBook = document.createElement("input");
    newInputBook.setAttribute("type", "text");
    newInputBook.className = "newInputBookClass";


    edit.onclick = function (e) {
        edit.disabled = true;
        var editBook = document.createElement("div");
        editBook.innerHTML = "edit";
        editBook.className = "editBookClass"
        editBook.onclick = function (e) {
            editAuthor.className = "classToDisplayNone";
            editScore.className = "classToDisplayNone";
            var firstDiv = e.target.parentNode;
            editBook.remove();
            var valueForEscape = firstDiv.innerHTML;
            firstDiv.appendChild(editBook);
            if (editBook.innerHTML == "edit") {
                editBook.remove();
                newInputBook.value = firstDiv.innerHTML;
                firstDiv.innerHTML = "";
                firstDiv.appendChild(newInputBook);
                editBook.innerHTML = "save";
                editBook.style.width = "17%"
                firstDiv.appendChild(editBook);

            } else if (editBook.innerHTML == "save") {
                editBook.remove();
                firstDiv.innerHTML = newInputBook.value;
                firstDiv.appendChild(editBook);
                editBook.innerHTML = "edit";
                editBook.style.width = "15%";
                editAuthor.className = "editAuthorClass";
                editScore.className = "editScoreClass";
            }
            newInputBook.onkeyup = function (e) {
                if (e.keyCode == 27) {
                    firstDiv.innerHTML = valueForEscape;
                    firstDiv.appendChild(editBook);
                    editBook.innerHTML = "edit";
                    editAuthor.className = "editAuthorClass";
                    editScore.className = "editScoreClass";

                }
            };


        };
        var editAuthor = document.createElement("div");
        editAuthor.innerHTML = "edit";
        editAuthor.className = "editAuthorClass";
        var newInputAuthor = document.createElement("input");
        newInputAuthor.setAttribute("type", "text");
        newInputAuthor.className = "newInputBookClass";
        editAuthor.onclick = function (e) {
            editBook.className = "classToDisplayNone";
            editScore.className = "classToDisplayNone";
            var secondeDiv = e.target.parentNode;
            editAuthor.remove();
            var valueForEscape = secondeDiv.innerHTML;
            secondeDiv.appendChild(editAuthor);
            if (editAuthor.innerHTML == "edit") {
                editAuthor.remove();
                newInputBook.value = secondeDiv.innerHTML;
                secondeDiv.innerHTML = "";
                secondeDiv.appendChild(newInputBook);
                editAuthor.innerHTML = "save";
                editAuthor.style.width = "17%"
                secondeDiv.appendChild(editAuthor);

            } else if (editAuthor.innerHTML == "save") {
                editAuthor.remove();
                secondeDiv.innerHTML = newInputBook.value;
                secondeDiv.appendChild(editAuthor);
                editAuthor.innerHTML = "edit";
                editAuthor.style.width = "15%";
                editBook.className = "editBookClass";
                editScore.className = "editScoreClass";
            }
            newInputBook.onkeyup = function (e) {
                if (e.keyCode == 27) {
                    secondeDiv.innerHTML = valueForEscape;
                    secondeDiv.appendChild(editAuthor);
                    editAuthor.innerHTML = "edit";
                    editBook.className = "editBookClass";
                    editScore.className = "editScoreClass";
                }
            };


        };
        var editScore = document.createElement("div");
        editScore.innerHTML = "edit";
        editScore.className = "editScoreClass"
        var newInputScore = document.createElement("input");
        newInputScore.setAttribute("type", "text");
        newInputScore.className = "newInputBookClass";
        editScore.onclick = function (e) {
            editBook.className = "classToDisplayNone";
            editAuthor.className = "classToDisplayNone";
            var thirdDiv = e.target.parentNode;
            editScore.remove();
            var valueForEscape = thirdDiv.innerHTML;
            thirdDiv.appendChild(editScore);
            if (editScore.innerHTML == "edit") {
                editScore.remove();
                newInputBook.value = thirdDiv.innerHTML;
                thirdDiv.innerHTML = "";
                thirdDiv.appendChild(newInputBook);
                editScore.innerHTML = "save";
                editScore.style.width = "17%"
                thirdDiv.appendChild(editScore);

            } else if (editScore.innerHTML == "save") {
                editScore.remove();
                thirdDiv.innerHTML = newInputBook.value;
                thirdDiv.appendChild(editScore);
                editScore.innerHTML = "edit";
                editScore.style.width = "15%";
                editBook.className = "editBookClass";
                editAuthor.className = "editAuthorClass";
            }
            newInputBook.onkeyup = function (e) {
                if (e.keyCode == 27) {
                    thirdDiv.innerHTML = valueForEscape;
                    thirdDiv.appendChild(editScore);
                    editScore.innerHTML = "edit";
                    editBook.className = "editBookClass";
                    editAuthor.className = "editAuthorClass";
                }
            };


        };
        bookNameDiv.appendChild(editBook);
        authorNameDiv.appendChild(editAuthor);
        scoreDiv.appendChild(editScore);

    };
    newElement.appendChild(bookNameDiv);
    newElement.appendChild(authorNameDiv);
    newElement.appendChild(scoreDiv);
    newElement.appendChild(edit);
    newElement.appendChild(divDelete);
    var ul = document.getElementById("bookList");

    ul.appendChild(newElement);

};
/*הפונקציה הזאת יוצרת לי את כל הרשימה.
כל פעם שהיא מקבלת אינפוט מהמשתמש היא יוצרת תגית אל איי חדשה ובתוכה
שלושה דיבים שונים,בנוסף יש את כל הכפתורים של העריכה בתוכה והאינפוטים
לעריכה,יש איבנטים לאונקייאפ ואונקליק וזאתת פונקציה ענקיתתת.*/

var clearList = function () {
    var ul = document.getElementById("bookList");
    ul.innerHTML = '';
};
/*פונקציה פשוטה שמרוקנת את תוכן היו אל.*/

var clearListAndArray = function () {
    clearList();
    booksArray = [];
    messageToSayHaveNothing.style.display = "none";

};
/*פונקציה שמרוקנת גם את היו אל וגם את המערך
ולאחר מכן מעלימה את הודעת החיפוש שלא נמצא.*/

