import React, { useState } from 'react';

const ClientDetails = () => {
  const [id, setId] = useState('');  // Client ID
  const [client, setClient] = useState(null);  // Client data
  const [loading, setLoading] = useState(false);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Function to handle input change
  const handleInputChange = (e) => {
    setId(e.target.value);
  };

  // Function to handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:8080/ClientController/Read/${id}`);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`Client with ID ${id} not found.`);
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();  // Fetch client data
      setClient(data);  // Set client data to state
    } catch (error) {
      setError(error.message);  // Set error message
    } finally {
      setLoading(false);  // Stop loading
    }
  };

  return (
    <div>
      <h1>Find Client Details</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter Client ID:
          <input
            type="number"
            value={id}
            onChange={handleInputChange}  // Update the input value
            required
          />
        </label>
        <button type="submit">Get Client Details</button>
      </form>

      {/* Show loading spinner or message */}
      {loading && <p>Loading client details...</p>}

      {/* Display error if there's any */}
      {error && <p>Error: {error}</p>}

      {/* Show client details if available */}
      {client && (
        <div>
          <h2>Client Details</h2>
          <p><strong>ID:</strong> {client.id}</p>
          <p><strong>Name:</strong> {client.name}</p>
          <p><strong>Email:</strong> {client.email}</p>
          <p><strong>Mobile:</strong> {client.mobile}</p>
          <p><strong>Address:</strong> {client.address}</p>
          <p><strong>Message:</strong> {client.message}</p>
          {/* Add other client details as needed */}
        </div>
      )}

      {/* Show message if no client found */}
      {!loading && !client && !error && id && (
        <p>No client found with ID {id}</p>
      )}
    </div>
  );
};

export default ClientDetails;
