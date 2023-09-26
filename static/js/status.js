function updateOrderStatus() {
    fetch('/get_order_status')  // Create a route to fetch the order status from the server
        .then(response => response.json())
        .then(data => {
            const orderStatus = data.order_status;
            const statusText = document.querySelector('#status_text');

            // Update the text content of the <span> element based on the order status value
            statusText.textContent = orderStatus;
        })
        .catch(error => console.error('Error fetching order status:', error));
}

// Periodically update the order status (e.g., every 1 seconds)
setInterval(updateOrderStatus, 1000);

function updateAssemblyStep() {
    fetch('/get_assembly_step')  // Create a route to fetch the order status from the server
        .then(response => response.json())
        .then(data => {
            const assemblyStep = data.Assembly_Status;
            const statusText = document.querySelector('#step_text');

            // Update the text content of the <span> element based on the order status value
            statusText.textContent = assemblyStep;
        })
        .catch(error => console.error('Error fetching order status:', error));
}

// Periodically update the order status (e.g., every 1 seconds)
setInterval(updateAssemblyStep, 1000);

function monitorSecondVariable() {
    fetch('/get_second_variable')
        .then(response => response.json())
        .then(data => {
            const secondVariable = data.second_variable;
            // Update the UI based on the value of the second variable
            // For example, you can display a message or perform other actions
            if (secondVariable) {
                console.log('Second variable is true.');
            } else {
                console.log('Second variable is false.');
            }
        })
        .catch(error => console.error('Error fetching second variable:', error));
}

// Periodically monitor the second variable (e.g., every 1 second)
setInterval(monitorSecondVariable, 1000);


function updateStatus() {
    fetch('/process_order') // Fetch real-time updates from the server
        .then(response => response.json())
        .then(data => {
            const updateMessage = data.update_message; // Corrected variable name

            const statusText = document.querySelector('#status_text');

            // Update the text content of the <span> element based on the order status value
            statusText.textContent = updateMessage;
        })
        .catch(error => console.error('Error fetching order status:', error));
}

// Periodically update the status (e.g., every 1 second)
setInterval(updateStatus, 1000);
