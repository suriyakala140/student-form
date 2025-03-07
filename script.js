
        function saveStudent() {
            // Get input values
            let name = document.getElementById("name").value;
            let age = document.getElementById("age").value;
            let gender = document.getElementById("gender").value;
            let email = document.getElementById("email").value;
            let course = document.getElementById("course").value;

            // Validate inputs
            if (name === "" || age === "" || gender === "" || email === "" || course === "") {
                alert("Please fill in all fields.");
                return;
            }

            // Get the table body
            let tableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

            // Create a new row
            let newRow = tableBody.insertRow();

            // Insert cells
            newRow.insertCell(0).innerText = name;
            newRow.insertCell(1).innerText = age;
            newRow.insertCell(2).innerText = gender;
            newRow.insertCell(3).innerText = email;
            newRow.insertCell(4).innerText = course;

            // Create delete button
            let deleteCell = newRow.insertCell(5);
            let deleteButton = document.createElement("button");
            deleteButton.innerText = "Delete";
            deleteButton.className = "delete-btn";
            deleteButton.onclick = function() {
                tableBody.removeChild(newRow);
            };
            deleteCell.appendChild(deleteButton);

            // Clear input fields
            document.getElementById("studentForm").reset();
        }
    
