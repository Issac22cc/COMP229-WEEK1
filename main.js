import { halfOf , multiply} from './demo.js';
console.log(halfOf(84));
console.log(multiply(21, 2));

const sum1 = (a, b) => a + b;
let result = sum1(1, 5);
console.log(result);

function reinitConst(){
    let me = 1;
    console.log(me);
    me = 2;
    console.log(me);
    }
    reinitConst();

function userFriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends');
    }
    userFriends('User', 'Bob', 'Alice');

    function userTopFriends(firstFriend, secondFriend, thirdFriends) {
        console.log(firstFriend);
        console.log(secondFriend);
        console.log(thirdFriends);
        }
        userTopFriends(...['Alice', 'Bob', 'Michelle']);

        function parent() {
            const message = 'Hello World';
            function child() {
            alert (message);
            }
            child();
            }
            parent();