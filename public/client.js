var socket = io();

var connectionCount = document.getElementById('connection-count');

socket.on('usersConnected', function (count) {
  connectionCount.innerText = 'Connected Users: ' + count;
});

var statusMessage = document.getElementById('status-message');

socket.on('statusMessage', function (message) {
  statusMessage.innerText = message;
});

socket.on('voteCount', function (votes) {
  var voteCount = document.getElementById('vote-count')
  voteCount.innerText = votes["A"] + votes["B"] + votes["C"] + votes["D"]
  console.log(votes);
});

socket.on('yourVote', function(vote){
  var yourVote = document.getElementById('your-vote')
  yourVote.innerText = vote
  console.log(vote)
});

var buttons = document.querySelectorAll('#choices button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    socket.send('voteCast', this.innerText);
  });
}
