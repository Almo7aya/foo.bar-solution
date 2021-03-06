def answer(n):
    arr = []
    minSum = n
    while minSum:
        last = getMaxSq(minSum)
        minSum -= last
        if last == 0:
            arr.append(1)
        else:
            arr.append(last)
    
    return arr

def getMaxSq(n):
    i = 1
    lastSq = 0
    while 1:
        square = i ** 2
        if square >= n:
            break
        lastSq = square;
        i += 1

    if lastSq == 0:
        lastSq = 1

    return lastSq