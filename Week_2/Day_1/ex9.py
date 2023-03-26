inches_IN = 1
sm_IN = 2.54

print("Say height:")

inches = int(input("Naber of inches="))


Height=(inches*inches_IN*sm_IN)
print("Height in SM =", Height)
Height=int(Height)
if Height > 145:
    print("We are tall enough to ride")
else: print("we are cool")

   