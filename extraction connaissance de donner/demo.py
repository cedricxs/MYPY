l = []
l = l + [1]
print(l)
d = {}
for k,v in zip(l,l):
    d[k] = v
print(d)
print(zip(l,l))