let lower_limit = 1;
let upper_limit = 10;
let always_find = false;
let rabbit;
let guess_counter;

const default_values = [{
    lower_limit: 1,
    upper_limit: 10,
    always_find: false
}]

function setLowerLimit(){
    lower_limit = parseInt(document.getElementById('lower-limit').value);
}

function setUpperLimit(){
    upper_limit = parseInt(document.getElementById('upper-limit').value);
}

function setDefVal(){
    document.getElementById('lower-limit').value = '';
    document.getElementById('upper-limit').value = '';    
    document.getElementById('always-find').checked = false;

    lower_limit = default_values[0].lower_limit;
    upper_limit = default_values[0].upper_limit;
    always_find = default_values[0].always_find;
}

function validate(){
    if(upper_limit < lower_limit){
        return false;
    }
    return true;
}

function guess(num){
    guess_counter++;
    console.log('Rabbit is in -> ', rabbit, ' ', num, ' <- my guess');
    if(num == rabbit){
        return true;
    }else{
        let direction = Math.random();
        if(direction >= 0.5){
            rabbit++;
        }else{
            rabbit--;
        }
        if(rabbit == upper_limit + 1){
            rabbit = upper_limit -1;
        }
        if(rabbit == lower_limit - 1){
            rabbit = lower_limit + 1;
        }
        console.log('Rabbit jumped to: ', rabbit);
        return false;
    }
}

function findRabbit(){
    if(!validate()){
        console.error('The limits are not valid!');
        return;
    }
    always_find = document.getElementById('always-find').checked;
    guess_counter = 0;
    console.clear('');
    console.log('You set the lower limit to:', lower_limit, 'and upper limit to:', upper_limit);
    rabbit = Math.floor((Math.random() * (upper_limit + 1 - lower_limit)) + lower_limit);
    console.log("%cRabbit started at:", "background-color: rgb(47, 104, 247);", rabbit);

    if(always_find){
        if((upper_limit - lower_limit) % 2 != 0){
            for(let i = lower_limit; i <= upper_limit; i++){
                if(guess(i)){
                    console.log("%cFound rabbit at:", "background-color: green;", i, "From", guess_counter, "guesses");
                    return;
                }
            }
            console.log("%cSecond Iteration", "background-color: orange;");
            for(let i = lower_limit + 1; i <= upper_limit; i++){
                if(guess(i)){
                    console.log("%cFound rabbit at:", "background-color: green;", i, "From", guess_counter, "guesses");
                    return;
                }
            }
        }else{
            for(let i = lower_limit + 1; i <= upper_limit; i++){
                if(guess(i)){
                    console.log("%cFound rabbit at:", "background-color: green;", i, "From", guess_counter, "guesses");
                    return;
                }
            }
            console.log("%cSecond Iteration", "background-color: orange;");
            for(let i = lower_limit; i <= upper_limit; i++){
                if(guess(i)){
                    console.log("%cFound rabbit at:", "background-color: green;", i, "From", guess_counter, "guesses");
                    return;
                }
            }
        }
    }else{
        for(let i = lower_limit; i <= upper_limit; i++){
            if(guess(i)){
                console.log("%cFound rabbit at:", "background-color: green;", i, "From", guess_counter, "guesses");
                return;
            }
        }
        console.log("%cSecond Iteration", "background-color: orange;");
        for(let i = lower_limit + 1; i <= upper_limit; i++){
            if(guess(i)){
                console.log("%cFound rabbit at:", "background-color: green;", i, "From", guess_counter, "guesses");
                return;
            }
        }
        console.log("%cRabbit was not found!", "background-color: red;");
    }
}