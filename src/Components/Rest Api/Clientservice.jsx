import axios from "axios";

const baseURL = "http://localhost:8080/ClientController";

export const getClientsById = (Client) => axios.get(baseURL + "/Read/+Client");