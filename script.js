function scrollToLastRow()
{
    const container = document.getElementById('container');
    const table = document.getElementById('food');
    const rows = table.getElementsByTagName('tr');
    const row = findRowById('lucky');
    console.log(row);
    const lastRow = rows[row];

    container.scrollTop = lastRow.offsetTop - container.offsetTop;
}   

function findRowById(rowId)
{
    const table = document.getElementById('food');
    const rows = table.getElementsByTagName('tr');
    
    for(let i = 0; i < rows.length; i++)
        {
            if(rows[i].id === rowId)
                {
                    return i;
                }
        }
        return -1;
    }