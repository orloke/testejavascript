const users = new Map();

users.set('Adriana','Admin');
users.set('Carlos','default');
users.set('Roberto','Admin');
users.set('Fernanda','broker');

function usuarios(us){
    for([key, value] of us){
        if(value == 'Admin'){
            console.log(key);
        }
    }
    return;
}

usuarios(users)