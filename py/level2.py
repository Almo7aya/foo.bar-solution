def answer(n):
    st = ''
    for i in range(2, 10000):
        j = 2
        while j <= i:
            if i == j:
                st += str(i)
            if (i % j) == 0:
                break
            j += 1

    return st[n:n+5]
