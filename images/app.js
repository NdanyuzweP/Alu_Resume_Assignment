body {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2; /* Background color */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    width: 400px; /* Set a fixed width for the container */
    background-color: #fff; /* Form background color */
    border: 1px solid #ccc; /* Border color */
    border-radius: 5px; /* Rounded corners */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
    padding: 20px;
    text-align: right; /* Align the content to the right */
}

/* Style the headings */
h1 {
    color: #333; /* Heading color */
}


label {
    display: block; 
    margin-bottom: 5px;
    color: #444;
}

input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc; /
    border-radius: 3px;
}

input[type="submit"] {
    background-color: #000; 
    color: #fff; 
    padding: 10px 20px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #333; 
}