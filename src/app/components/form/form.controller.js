export default class todoForm {
    submitHandle() {
        this.onSubmit({$text: this.addText});
        this.addText = '';
    }

    searchHandle() {
        this.onSearch({$text: this.searchText});
    }
};