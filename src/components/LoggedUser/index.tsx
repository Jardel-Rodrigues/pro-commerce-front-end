import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as authService from '../../services/auth-service';
import { ContextToken } from '../../utils/context-token';
import { useEffect, useState } from 'react';
import { UserDTO } from '../../models/user';

export default function LoggedUser() {

    const { contextTokenPayload, setContextTokenPayload } = useContext(ContextToken);

    const [user, setUser] = useState<UserDTO>();

    function handleLogoutClick() {
        authService.logout();
        setContextTokenPayload(undefined);
    }

    return (
        contextTokenPayload && authService.isAuthenticated()
            ? (
                <div className="dsc-logged-user">
                    <p>{user?.name}</p>
                    <span onClick={handleLogoutClick}>Sair</span>
                </div>
            )
            : (
                <Link to="/login">
                    Entrar
                </Link>
            )
    );
}
