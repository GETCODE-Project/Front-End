import { createContext, useContext, useState } from "react";

interface AuthContextType {
    accessToken: string | null;
    refreshToken: string | null;
    setAccessToken: (token: string | null) => void;
    setRefreshToken: (token: string | null) => void;
}
const AuthContexts = createContext<AuthContextType>({
    accessToken: null,
    refreshToken: null,
    setAccessToken: token => {},
    setRefreshToken: token => {},
});

export const useAuth = () => useContext(AuthContexts);

export const AuthProvider: React.FC = ({ children }:any) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);

    return (
        <AuthContexts.Provider value={{ accessToken, refreshToken, setAccessToken, setRefreshToken }}>
        {children}
        </AuthContexts.Provider>
    );
}