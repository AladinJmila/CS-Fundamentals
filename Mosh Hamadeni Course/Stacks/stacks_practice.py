# Reversing strings
string = 'Yabadabadooba'
string_list = list(string)

# Using reversed()
rever1 = ''
for ch in reversed(string):
  rever1 += ch
print(rever1)

# Using .reverse()
string_list.reverse()
rever2 = ''
for ch in string_list:
  rever2 += ch
print(rever2)

# Using .pop()
string_list = list(string)
rever3 = ''
for ch in string:
  rever3 += string_list.pop()
print(rever3)

# Using slicing
print(string[::-1])

class Expression():
  '''Checks various Expressions properties.'''
  def __init__(self, expression):
    self.expression = expression

  stack = []
  left_brackets = '([{<'
  right_brackets = ')]}>'

  def is_balanced(self):
    for ch in self.expression:
      if ch in self.left_brackets:
        self.stack.append(ch)

      if ch in self.right_brackets:
        if not self.stack: return False

        top = self.stack.pop()
        if self.right_brackets.index(ch) != self.left_brackets.index(top):
          return False

    return not self.stack

expression = Expression('(a) + {b}')
print(expression.is_balanced())