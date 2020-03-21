class Result {
    constructor(playerA, playerB, scoreOne, scoreTwo) {
      this.playerA = playerA.value;
      this.playerB = playerB.value;
      this.scoreOne = scoreOne.value;
      this.scoreTwo = scoreTwo.value;
    }
  }
  
  class UI {
    addBookToList(result) {
      const list = document.getElementById('results-list');
      // Create tr element
      const row = document.createElement('tr');
      // Insert cols
      row.innerHTML = `
        <td>${result.playerA}</td>
        <td>${result.scoreOne}</td>
        <td><p>-</p></td>
        <td>${result.scoreTwo}</td>
        <td>${result.playerB}</td>
        <td><a href="#" class="delete">X<a></td>
      `;
    
      list.appendChild(row);
    }
  
    deleteBook(target) {
      if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
      }
    }
  
    clearFields() {
        document.getElementById('playerA').value = '';
        document.getElementById('playerB').value = '';
        document.getElementById('scoreOne').value = '';
        document.getElementById('scoreTwo').value = '';
    }
  }
  
  // Event Listener for add book
  document.getElementById('results-form').addEventListener('submit', function(e){
    // Get form values
    let playerOne = document.getElementById('playerA').value,
        playerTwo = document.getElementById('playerB').value,
        scoreA = document.getElementById('scoreOne').value,
        scoreB = document.getElementById('scoreTwo').value
  
        // Instantiate a book
        const result = new Result(playerA, playerB, scoreOne, scoreTwo);

        //Instantiate UI
        const ui = new UI();

        //Add book to list
        ui.addBookToList(result);

        // Clear fields
        ui.clearFields();

    e.preventDefault();
    });
  
  // Event Listener for delete
  document.getElementById('results-list').addEventListener('click', function(e{
  
    // Instantiate UI
    const ui = new UI();
  
    // Delete book
    ui.deleteBook(e.target);
  
    e.preventDefault();
  });