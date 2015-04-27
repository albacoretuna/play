function getShortMessages(message){ 
   var messages  =  message.filter(function(val) { 
        return (val.message.length < 50);
   });
return messages.map(function(el){
    return el["message"];
    });
}

module.exports = getShortMessages;
