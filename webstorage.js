function SaveToSessionStorage() {
    window.sessionStorage.mySessionKeyX = 'Saved Directly in Session';
    window.sessionStorage.setItem("mySessionKeyY" ,"Saved Using Set Item");
}

function SaveToLocalStorage() {
    window.localStorage.myLocalKeyA = 'Saved Directly in Local';
    window.localStorage.setItem("myLocalKeyB", "Saved Using Set Item");
}

function GetFromSessionStorage() {
    alert("Value X: " + window.sessionStorage.getItem("mySessionKeyX"));
}

function GetFromLocalStorage() {
    alert("Value B: " + window.localStorage.getItem("myLocalKeyB"));
}

function RemoveFromSessionStorage() {
    window.sessionStorage.removeItem("mySessionKeyX");
}

function RemoveFromLocalStorage() {
    window.localStorage.removeItem("myLocalKeyB");
}

function clearAll() {
    localStorage.clear();
    sessionStorage.clear();
}
