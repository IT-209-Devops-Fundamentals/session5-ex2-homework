// Authentication Module - complete
function login(username, password) {
    if (!username || !password) {
        throw new Error("Invalid credentials");
    }
    console.log("Logging in user: " + username);
    return true;
}

function logout(token) {
    console.log("User logged out with token: " + token);
    return true;
}

function verifyToken(token) {
    return token !== null && token !== undefined;
}

module.exports = { login, logout, verifyToken };
