import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
	const [data, setData] = useState({});

	async function signIn({ email, password }) {
		try {
			const response = await api.post("/sessions", { email, password });
			const { registeredUser, token } = response.data;

			localStorage.setItem(
				"@foodexplorer: User",
				JSON.stringify(registeredUser)
			);

			localStorage.setItem("@foodexplorer: Token", token);

			api.defaults.headers.common["authorization"] = `Bearer ${token}`;

			setData({ registeredUser, token });
		} catch (error) {
			if (error.response) {
				alert(error.response.data.message);
			} else {
				alert("Não foi possível entrar!");
			}
		}
	}

	function signOut() {
		localStorage.removeItem("@foodexplorer: User");
		localStorage.removeItem("@foodexplorer: Token");

		setData({});
	}

	useEffect(() => {
		const user = localStorage.getItem("@foodexplorer: User");
		const token = localStorage.getItem("@foodexplorer: Token");

		if (user && token) {
			api.defaults.headers.common["authorization"] = `Bearer ${token}`;

			setData({
				registeredUser: JSON.parse(user),
				token,
			});
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{
				signIn,
				signOut,
				registeredUser: data.registeredUser,
			}}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);

	return context;
}

export { AuthProvider, useAuth };
