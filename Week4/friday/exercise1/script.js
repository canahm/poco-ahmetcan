
var list = [4, 1, 3, 22, 2, 7, 35, -1, 42, 100, 55, 6, 2];

for (var iter = 0; iter < list.length; iter++)
{
    var smallest_value = undefined;
    var smallest_value_index = undefined;

    for (var index = iter; index < list.length; index++) {
        var current_value = list[index];
        if (smallest_value == undefined || current_value < smallest_value) {
            smallest_value = current_value;
            smallest_value_index = index;
        }
    }

    // swap two elements of the list
    var temp = list[smallest_value_index];
    list[smallest_value_index] = list[iter];
    list[iter] = temp;
}