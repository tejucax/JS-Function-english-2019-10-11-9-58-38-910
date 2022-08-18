function countWords(message){
    newMessage = message.split(" ");
    return newMessage.length;
}
countWords('Good morning, I love JavaScript.'); // should return 5