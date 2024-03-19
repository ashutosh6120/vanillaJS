
const sortableList = document.querySelector('.sortable-list');
const items = sortableList.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        setTimeout(() => item.classList.add('dragging'),0);
    });
    item.addEventListener('dragend', () => item.classList.remove('dragging'));
});

const initSortableList = (e) => {
    e.preventDefault();
    const draggingItem = sortableList.querySelector('.dragging');

    //get all items except currently dragging and make array of them
    let siblings = [...sortableList.querySelectorAll('.item:not(.dragging')];

    //find siblin after which dragging item should be placed
    let nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    // console.log(nextSibling);
    
    //insert dragging item before the found sibling
    sortableList.insertBefore(draggingItem, nextSibling);
}


sortableList.addEventListener('dragover', initSortableList);
sortableList.addEventListener('dragenter', e => e.preventDefault());