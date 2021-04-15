string = 'string to reverse'

string_list = list(string)
# Using reversed()
rever1 = ''
for i in reversed(string_list):
  rever1 += i
print(rever1)
# Using .reverse()
string_list.reverse()
rever2 = ''
for i in string_list:
  rever2 += i
print(rever2)
# Using .pop()
string_list = list(string)
rever3 = ''
for i in string:
  rever3 += string_list.pop()
print(rever3)
#Using slicing
rever4 = string[::-1]
print(rever4)
