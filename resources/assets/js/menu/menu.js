

document.addEventListener('turbo:load', loadMenuData);

function loadMenuData () {
    $('#selectParentMenu').select2({
        language: {
            noResults: function (params) {
                return Lang.get('messages.no_results_found');
            }
        },
        width: '100%',
    })
    let categoryTableName = $('#categoryTable')

    listen('click', '.delete-menu-btn', function (event) {
        let deleteMenuId = $(event.currentTarget).data('id')
        deleteItem(route('menus.destroy', deleteMenuId),
            Lang.get('messages.menu.menu'))
    })
}

listenChange('.menu-status', function () {
    let showInMenu = $(this).attr('show-in-menu')
    let menuId = $(this).attr('data-id')
    window.livewire.emit('updateShowInMenu', showInMenu, menuId)
})
