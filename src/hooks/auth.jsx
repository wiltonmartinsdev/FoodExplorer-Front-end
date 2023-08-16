// Imports Global
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api.js";

export const AuthContext = createContext({});

function AuthProvider({ children }) {}

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
