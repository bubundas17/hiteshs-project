var vm =  new Vue({
    el: "#app",
    data: {
        test: "OK",
        questions,
        active: {},
        snackbar: false,
        fab:"",
        snackbarMsg: ""
    },
    mounted() {
        hljs.initHighlightingOnLoad();
    },
    methods: {
        copyCode(value){
            this.showSnackBar("Code Copied To Clipboard!");
            let aux = document.createElement("input");
            aux.setAttribute("value", value);
            document.body.appendChild(aux);
            aux.select();
            document.execCommand("copy");
            document.body.removeChild(aux);
        },
        showSnackBar(message){
            this.snackbarMsg = message;
            this.snackbar = true
        }
    }
});