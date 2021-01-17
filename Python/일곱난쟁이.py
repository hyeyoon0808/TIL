import sys 

nlist = []
total = 0
flag = False

for i in range(9):
    nlist.append(int(sys.stdin.readline()))

total = sum(nlist)

for i in range(8):
    for x in range(i+1, 9):
        if (nlist[i]+nlist[x] == total-100):
            del nlist[i]
            del nlist[x-1]
            flag = True
            break
    if (flag):
        break

nlist.sort()

for i in nlist:
    print(i)