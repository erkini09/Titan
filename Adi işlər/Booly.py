Booly = input("Əməliyyat növünü daxil edin (AND, OR, NOT, XOR, XNOR, NOR, NAND,): ").upper()
x = int(input("Birinci ədədin qiymətini daxil edin (0 və ya 1): "))
y = int(input("İkinci ədədin qiymətini daxil edin (0 və ya 1): "))

if Booly == "AND":
    if x == 1 and y == 1:
        print("Nəticə: 1")
    else:
        print("Nəticə: 0")
elif Booly == "OR":
    if x == 0 or y == 0:
        print("Nəticə: 0")
    else:
        print("Nəticə: 1")
elif Booly == "NOT":
    if x == 1:
        print("Nəticə: 0")
    else:
        print("Nəticə: 1")
elif Booly == "XOR":
    if x != y:
        print("Nəticə: 1")
    else:
        print("Nəticə: 0")
elif Booly == "XNOR":
    if x == y:
        print("Nəticə: 1")
    else:
        print("Nəticə: 0")
elif Booly == "NOR":
    if x == 0 and y == 0:
        print("Nəticə: 1")
    else:
        print("Nəticə: 0")
elif Booly == "NAND":
    if x == 1 and y == 1:
        print("Nəticə: 0")
    else:
        print("Nəticə: 1")
else:
    print("Yanlış əməliyyat növü daxil edildi.")