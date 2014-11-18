var i = 7;
function sevenBoom() {
    postMessage(i);
    i = i + 7;

}

setInterval(sevenBoom, 1000);
/*פונקציה פשוטה שכל שנייה מעלה את איי בשבע.*/
