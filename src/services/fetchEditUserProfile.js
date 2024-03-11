

export const fetchEditUserProfile = (username) => {

    const token = localStorage.getItem('token');
    
    return fetch("http://localhost:8000/user/profile/edit/", {
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'Content-Type',
            'Authorization' : `Token ${token}`,
            },
        method: 'PATCH',
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({    
            username: username
        })
    });
};