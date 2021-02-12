#Remove Duplicate Names
names = ["Alex","John","Mary","Steve","John", "Steve"]

def remove_dups(list):
  new_list = []
  for item in list:
    if item not in new_list:
      new_list.append(item)

  return new_list

names = remove_dups(names)
print(names)     


#Largest Element

numbers = [2,1,5,4,3]

def find_largest_element(list,):
  largest_element = numbers[0]
  for num in numbers:
    if num > largest_element:
      largest_element = num

  return largest_element

largest_element = find_largest_element(numbers)

print(f"The largest element is {largest_element}")

#Smallest Element

def find_smallest_element(list):
  smallest_element = numbers[0] 
  for num in numbers:
    if num < smallest_element:
        smallest_element = num

  return smallest_element

smallest_element = find_smallest_element(numbers)

print(f"The smallest element is {smallest_element}")

#Missing Array

# list_numbers = [0,1,2,3,4,6,7,8,9]

# i=0

# while i < len(list_numbers):    
#     if (list_numbers[i] + 1) != list_numbers[i+1]:
#         print(f"missing {list_numbers[i]+1}")
#         break
#     else:
#         print(list_numbers[i], list_numbers[i+1])
#         i += 1

# Missing Array

list_numbers = [0,1,2,3,4,6,7,8,9]

def find_missing_numbers(list):
  for i in list:
    if (list[i] + 1) != list[i+1]:
      return (list_numbers[i]+1)
  
missing_number = (find_missing_numbers(list_numbers))
print(f"The missing number is {missing_number}")
       
#Duplicate Array

# list = [1,2,3,4,5]

# i = 0

# while i < 5:
#     list.append(list[i])
#     i += 1
# print(list)

#Duplicate the Array

list_num = [1,2,3,4,5]

def duplicate_list(list):
  i=0
  list_length = len(list)
  while i < list_length:
      list.append(list[i])
      i += 1
  return list

print(duplicate_list(list_num))

#Pyramid

# spaces = 
# stars = 
# i = 0
# height = 9
#nested loops?
# while i < 9:
#   line1 - print height - 1 # of spaces and print  1 star
    #line 2 - print height -2 spaces and add 3 stars

#     height -= 2
#     spaces -= 1
#     stars +=2




