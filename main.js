function logout(){
    localStorage.clear()
}

function showToast(){
    var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
}