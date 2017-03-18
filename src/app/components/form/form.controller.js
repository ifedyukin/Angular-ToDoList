var todoForm = function todoForm() {
    this.submitHandle = function () {
        this.onSubmit({ $text: this.addText });
        this.addText = '';
    }

    this.searchHandle = function () {
        this.onSearch({ $text: this.searchText });
    }
}

export default todoForm;