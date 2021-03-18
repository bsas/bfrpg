export default class BFRGItemSheet extends ItemSheet {
    get template() {
        return `systems/bfrpg/templates/${this.item.data.type}-sheet.html`
    }

    getData() {
        const data = super.getData();
        data.BFRPG = CONFIG.BFRPG;
        return data;
    }
}