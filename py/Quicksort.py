def partition(arr, l, r):
    i = l - 1
    pivot = arr[r]

    for j in range(l, r):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i+1], arr[r] = arr[r], arr[i+1]
    return i + 1

def qs(arr, l, r):
    if l >= r:
        return arr

    p = partition(arr, l, r)

    qs(arr, l, p - 1)
    qs(arr, p + 1, r)

arr = [1, 2, 4, 6, 16, 21, 54, 12, 4, 3, 8, 32, 512]
print('Unsorted array: ', arr)
qs(arr, 0, len(arr) - 1)
print('Sorted array: ', arr)

