def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n-1) + fibonacci(n-2)

# İstifadəçidən neçəinci ədədi istədiyini alırıq
n = int(input("Fibonacci ardıcıllığının neçənci ədədini istəyirsən? "))

print(f"{n}-ci Fibonacci ədədi: {fibonacci(n)}")
