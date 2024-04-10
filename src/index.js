// Your code here
function getMovieDetails() {
    fetch("http://localhost:3000/films")
    .then(resp => resp.json())
    .then(data => {
        const movieList = document.getElementById("films");
        console.log(data);
        data.forEach(element => {
            const listItem = document.createElement("li");
            listItem.style.cursor = 'pointer';
            listItem.id = element.id;
            listItem.textContent = ${element.title};
  
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener('click', function(){
              deleteFilm(element.id);
              listItem.remove();
            })
            listItem.appendChild(deleteButton);
  
            listItem.addEventListener('click', function(){
                document.getElementById('poster').src = element.poster;
                document.getElementById('title').textContent = element.title;
                document.getElementById('runtime').textContent = element.runtime;
                document.getElementById('film-info').textContent = element.description;
                document.getElementById('showtime').textContent = element.showtime;
                document.getElementById('ticket-num').textContent = element.capacity - element.tickets_sold;
            });
            movieList.appendChild(listItem);
        });
  
        let button = document.getElementById('buy-ticket');
        button.addEventListener('click', function(){
            let availableTickets = parseInt(document.getElementById('ticket-num').textContent);// Parse to int
            if(availableTickets > 0){
                availableTickets--;
                document.getElementById('ticket-num').textContent = availableTickets;
            } else {
                console.log("Tickets sold out");
            }
            updateTickets();
        });
    });
  }
  
  getMovieDetails();
   
  function updateTickets(filmId,newTicketsSold) {
    fetch(http://localhost:3000/films/${tickets_sold}, {// corrected URL format and backticks
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'tickets_sold': newTicketsSold})// Use newTicketSold parameter
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  function newTicket(){
    fetch(http://localhost:3000/films/${tickets_sold}, {// corrected URL format
      method:'POST',
      headers: {
        'Content-Type': 'applicatin/json'
      },
      body: JSON.stringify({'film_id': 28, 'number_of_tickets';1})// Example data,adjust as needed
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }
  
  function deleteFilm(filmId) {
    fetch(http://localhost:3000/films/${film}, {// corrected url format
      method: 'DELETE'
    })
    .then(resp => {
      if (resp.ok) {
        console.log("Film deleted successfully");
      } else {
        console.error("Failed to delete film");
      }
    });
  }