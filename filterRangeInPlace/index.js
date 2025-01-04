function filterRangeInPlace(arr, a, b) {
    for(i = 0; i < arr.length; i++) {
        if(arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;                      // decrement after each splice to rearrange the order
        }
    }
}