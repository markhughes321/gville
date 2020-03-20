// Book constructor
function Result(playerA, playerB, scoreOne, scoreTwo) {
    this.playerA = playerA.value;
    this.playerB = playerB.value;
    this.scoreOne = scoreOne.value;
    this.scoreTwo = scoreTwo.value;
}

// UI constructor
function UI() {}

// Add book to list
 UI.prototype.addBookToList = function(result){
    const list = document.getElementById('results-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${result.playerA}</td>
    <td>${result.playerB}</td>
    <td>${result.scoreOne}</td>
    <td>${result.scoreTwo}</td>
    `;

    console.log(result);

    list.appendChild(row);
}

// Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('playerA').value = '';
    document.getElementById('playerB').value = '';
    document.getElementById('scoreOne').value = '';
    document.getElementById('scoreTwo').value = '';
}


// Event listeners 
document.getElementById('results-form').addEventListener('submit', 
    function(e){
        //Get form values
        const playerA = document.getElementById('playerA').value,
             playerB = document.getElementById('playerB').value,
             scoreOne = document.getElementById('scoreOne').value,
             scoreTwo = document.getElementById('scoreTwo').value


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