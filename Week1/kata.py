def Kata(num):
    if num == 1:
        return "1"

    elif num == 2:
        return "2"

    elif num % 3 == 0 and num % 5 == 0:
        return "PepsiCoke"

    elif num % 3 == 0:
        return "Pepsi"

    elif num % 5 == 0:
        return "Coke"
        
    else:
        return None


print(Kata(1))
print(Kata(2))
print(Kata(3))
print(Kata(4))
print(Kata(5))
print(Kata(6))
print(Kata(10))
print(Kata(15))