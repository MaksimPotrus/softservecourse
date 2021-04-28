class PaginationHelper {
    constructor(collection, itemsPerPage) {
      this.collection = collection;
      this.itemsPerPage = itemsPerPage;
    }
    pageCount = () => Math.ceil(this.itemCount() / this.itemsPerPage);
    itemCount = () => this.collection.length;
    pageIndex(itemIndex) {
      const pageInd = Math.floor(itemIndex / this.itemsPerPage);
      return (itemIndex < 0 || this.itemCount() <= itemIndex) ? -1 : pageInd;
    }
    pageItemCount(pageIndex) {
      if (pageIndex < 0 || pageIndex >= this.pageCount()) {
        return -1;
      }
      const pageItem = this.itemCount() - this.itemsPerPage * pageIndex;
      return Math.min(this.itemsPerPage, pageItem);
    }
  }

  const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
  console.log(helper.pageCount());
  console.log(helper.itemCount());
  console.log(helper.pageItemCount(0));
  console.log(helper.pageItemCount(1));
  console.log(helper.pageItemCount(2));
  console.log(helper.pageIndex(5));
  console.log(helper.pageIndex(2));
  console.log(helper.pageIndex(20));
  console.log(helper.pageIndex(-10));