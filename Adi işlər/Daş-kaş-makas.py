import random

def user_choice():
    print("\nZəhmət olmasa birini seçin:")
    print("1 - Daş")
    print("2 - Kağız")
    print("3 - Qayçı")
    choice = input("Seçiminiz (1/2/3): ")
    while choice not in ['1', '2', '3']:
        print("Yanlış seçim. Təkrar cəhd edin.")
        choice = input("Seçiminiz (1/2/3): ")
    return int(choice)

def computer_choice():
    return random.randint(1, 3)

def choice_name(choice):
    return {1: "Daş", 2: "Kağız", 3: "Qayçı"}[choice]

def determine_winner(user, computer):
    if user == computer:
        return "Bərabərə!"
    elif (user == 1 and computer == 3) or \
         (user == 2 and computer == 1) or \
         (user == 3 and computer == 2):
        return "Təbriklər, siz qalib gəldiniz!"
    else:
        return "Təəssüf, kompüter qalib gəldi."

def main():
    print("Daş-Kağız-Qayçı Oyununa Xoş Gəlmisiniz!")
    while True:
        user = user_choice()
        computer = computer_choice()
        print(f"Siz: {choice_name(user)}")
        print(f"Kompüter: {choice_name(computer)}")
        print(determine_winner(user, computer))

        again = input("\nBir daha oynamaq istəyirsiniz? (bəli/xeyr): ").lower()
        if again not in ['bəli', 'b']:
            print("\nOyuna görə təşəkkürlər! Gələcəkdə daha yaxşı qalibiyyətlər diləyirəm!")
            break

if __name__ == "__main__":
    main()