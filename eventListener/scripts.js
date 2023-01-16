// This creates an event listener. When there is a change on the...
// ...html body, updatePage() is called.
d3.selectAll("body").on("change", updatePage);

// updatePage() uses d3.selectAll() to select the dropdown menu.
// The menu has an id of selectOption.
// SelectedOption holds the option that the user chose. 
function updatePage(){
    var dropdownMenu = d3.selectAll("#selectOption").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectedOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectedOption);
};