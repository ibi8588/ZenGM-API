$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: '/api/players',
    success: loadPlayers,
    error: playerError
  })


});

function loadPlayers(json) {
  for (i = 0; i < json.length; i++) {
    $('#playerTarget').append(

      `<table id="playerInformation">
  <tbody>
    <tr>
    <td>Player Name:</td>
<td>${json[i].name}&nbsp;</td>
</tbody>
</table>`
    )
  }
}
