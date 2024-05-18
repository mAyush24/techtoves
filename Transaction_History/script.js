document.addEventListener("DOMContentLoaded", function() {
    // Sample data (can be replaced with actual data from database)
    var transactions = [
        { date: "2024-05-17", description: "Payment to John Doe", amount: "$50.00", status: "Completed" },
        { date: "2024-05-16", description: "Payment to Jane Smith", amount: "$30.00", status: "Completed" },
        { date: "2024-05-15", description: "Payment to Bob Johnson", amount: "$25.00", status: "Failed" }
    ];

    var tableBody = document.querySelector("#transaction-table tbody");

    // Loop through transactions and create table rows
    transactions.forEach(function(transaction) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.description}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.status}</td>
        `;
        tableBody.appendChild(row);
    });
});
