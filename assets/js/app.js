const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'light'
    }
});

const app = createApp({
    data() {
        return {
            test: "OK",
            questions,
            active: {},
            snackbar: false,
            fab: false,
            snackbarMsg: ""
        }
    },
    mounted() {
        // Initialize highlight.js for all code blocks
        hljs.highlightAll();
        
        // Initialize active tabs for each question
        this.questions.forEach((question, index) => {
            this.active[index] = 0;
        });
    },
    methods: {
        async copyCode(value) {
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    // Use modern Clipboard API
                    await navigator.clipboard.writeText(value);
                    this.showSnackBar("Code Copied To Clipboard!");
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement("textarea");
                    textArea.value = value;
                    textArea.style.position = "fixed";
                    textArea.style.left = "-999999px";
                    textArea.style.top = "-999999px";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    
                    try {
                        document.execCommand('copy');
                        this.showSnackBar("Code Copied To Clipboard!");
                    } catch (err) {
                        this.showSnackBar("Failed to copy code. Please copy manually.");
                    }
                    
                    document.body.removeChild(textArea);
                }
            } catch (err) {
                this.showSnackBar("Failed to copy code. Please copy manually.");
            }
        },
        showSnackBar(message) {
            this.snackbarMsg = message;
            this.snackbar = true;
        },
        highlightCode(code, language) {
            // Map common language names to highlight.js language names
            const languageMap = {
                'C': 'c',
                'java': 'java',
                'javascript': 'javascript',
                'python': 'python',
                'cpp': 'cpp',
                'csharp': 'csharp'
            };
            
            const mappedLanguage = languageMap[language] || language.toLowerCase();
            
            try {
                if (hljs.getLanguage(mappedLanguage)) {
                    return hljs.highlight(code, { language: mappedLanguage }).value;
                } else {
                    return hljs.highlightAuto(code).value;
                }
            } catch (err) {
                // Fallback to auto-highlighting if specific language fails
                return hljs.highlightAuto(code).value;
            }
        }
    },
    watch: {
        // Watch for changes in active tabs and re-highlight code
        active: {
            deep: true,
            handler() {
                this.$nextTick(() => {
                    hljs.highlightAll();
                });
            }
        }
    }
});

app.use(vuetify);
app.mount('#app');